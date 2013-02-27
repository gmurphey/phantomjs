var execSync = require('exec-sync')
var binPath = execSync('which phantomjs')

if (!binPath) {
  var path = require('path')

  binPath = path.join(__dirname, 'phantom')

  if (process.platform === 'win32') {
    binPath = path.join(binPath, 'phantomjs.exe')
  } else {
    binPath = path.join(binPath, 'bin' ,'phantomjs')
  }
}

exports.path = binPath
