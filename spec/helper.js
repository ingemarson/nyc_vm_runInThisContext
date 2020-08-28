var fs = require("fs");
var vm = require("vm");

const loadDependency = (dependency) => {
  const fileName = dependency.replace(/^.*[\\\/]/, "");
  try {
    vm.runInThisContext(fs.readFileSync(dependency), { filename: fileName });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { loadDependency };
