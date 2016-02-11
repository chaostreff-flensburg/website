/*
This file is used as a test when Travis-CI will only be used as a method of deployment.
If you want to write and use real tests, change the npm test script in package.json.
This repo will only deploy on commits to the "deploy" branch.
Local development is done on individual feature branches or, if you are brave, on the "master" branch.
All settings can be changed in .travis.yml.
*/

function deploy() {
  var test = true;

  return test;
}

deploy();
