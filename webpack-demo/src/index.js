import './public-path'
import(/* webpackChunkName: "foo" */ './foo')
import('./bar')
import('./foo1')
// const small = require("./small.png");
import('./app.css')
// import(/* webpackPrefetch: true, webpackChunkName: "chunk-css" */ './app.css')
// var style = require(/* webpackPrefetch: true, webpackChunkName: "chunk-css" */ './app.css')
import 'lodash'
// console.log(foo, style)

function component() {
  const element = document.createElement('h1')

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ')

  return element
}

document.body.appendChild(component())
