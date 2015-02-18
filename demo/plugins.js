
var React = require('react')
var Treed = require('../classy')

window.title = 'Full Soup'

var treed = window.treed = new Treed({
  data: require('./demo-data'),
  plugins: [
    require('../plugins/todo'),
    require('../plugins/rebase'),
    require('../plugins/clipboard'),
    require('../plugins/collapse'),
    require('../plugins/undo'),
    require('../plugins/done'),
    require('../plugins/types'),
    require('../plugins/image'),
    require('../plugins/lists'),
  ]
})

var start = Date.now()
treed.quickstart('#example').then(storeView => {
  console.log((Date.now() - start) + 'ms to render')
  window.actions = storeView.actions
}).catch(error => {
  alert("Failed to initialize: " + error)
})
