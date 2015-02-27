var glob = require('glob');
var S = require('string');

module.exports = function (name, options) {
  options = options || {
    packageJsonPath: '../../package.json'
  }
  var pkg = require(options.packageJsonPath);
  var packageDefinition = pkg.jspm.dependencies[name];

  var baseURL = pkg.jspm.directories.baseURL || '.';

  var packagePattern = '';
  if (packageDefinition.indexOf('@') === -1) {
    packagePattern = baseURL + '/jspm_packages/' + packageDefinition + '*';
  } else {
    var versionPart = packageDefinition.substring(packageDefinition.indexOf('@'));
    packagePattern = baseURL + '/jspm_packages/' + packageDefinition
      .replace(':', '/')
      .replace(versionPart, '*');
  }

  var matches = glob.sync(packagePattern);
  if (matches.length === 0) {
    console.log('Error: `' + name + '` package is not installed.');
    return;
  }

  matches = matches.filter(function (item) {
    return !S(item).endsWith('.js');
  });

  matches.sort(function(a, b){
      if(a < b) return 1;
      if(a > b) return -1;
      return 0;
  })

  return matches[0];
};
