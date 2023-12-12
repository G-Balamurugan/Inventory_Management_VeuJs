
const onProxyResHandler = async function (proxyRes) {
  if (proxyRes && proxyRes.headers['set-cookie']) {
    const cookies = proxyRes.headers['set-cookie'].map(cookie =>
      cookie.replace(/; secure/gi, '')
    )
    proxyRes.headers['set-cookie'] = cookies
  }
}

const onProxyReqHandler = async function (proxyReq) {
  proxyReq.setHeader('accept-encoding', 'gzip;q=0,deflate,sdch')
}

const TARGET = 'https://www.blibli.com'

const commonProxy = {
  //Example
  '/api/': {
    target: TARGET,
    changeOrigin: true,
    rewrite: (path) => path.replace(/^\/api\//, '/backend/')
  },
  '/backend/': {
    target: TARGET,
    changeOrigin: true,
  },
  '/backend/testing/': {
    target: TARGET,
    changeOrigin: true,
    configure: (proxy) => {
      proxy.on('proxyReq', onProxyReqHandler)
      proxy.on('proxyRes', onProxyResHandler)
    },
  },
}

module.exports = {
  commonProxy
}