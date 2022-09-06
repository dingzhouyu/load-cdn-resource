export default {
    name: 'bar',
}

function loadScripts(prefix, hash, src) {
  const resolve = (...args) => args.join('/')
  const script = document.createElement('script')
  // path resolve
  script.src = resolve.apply(null, hash ? [prefix, hash, src] : [prefix, src])
  document.body.appendChild(script)
}

loadScripts('.', '', 'public/foo.js')