/* eslint-disable no-undef */
// https://github.com/mswjs/msw-storybook-addon/issues/36#issuecomment-1496150729
//
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url)

  const blacklist = /\/src\/|node_modules|\/sb-common-assets|\/favicon\.svg|\/virtual|\/.storybook|\.jpg|\.woff2/g
  if (url.href.search(blacklist) !== -1) {
    // Do not propagate this event to other listeners (from MSW)
    event.stopImmediatePropagation()
  }
})

importScripts('./mockServiceWorker.js')
