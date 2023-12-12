import fs from 'fs'
import path from 'path'

const allUrls = new Set()
const mockPaths = new Map()

/* eslint-disable no-unused-vars */
function accumulateUrl (url, method) {
  const fullUrl = document.location.origin + url
  allUrls.add(method + '::' + fullUrl)
}

if (typeof require.context === 'undefined') {
  require.context = (base = '.', scanSubDirectories = false, regularExpression = /\.js$/) => {
    const files = {}

    function readDirectory(directory) {
      fs.readdirSync(directory).forEach((file) => {
        const fullPath = path.resolve(directory, file)

        if (fs.statSync(fullPath).isDirectory()) {
          if (scanSubDirectories) readDirectory(fullPath)
          return
        }
        if (!regularExpression.test(fullPath)) return
        files[fullPath] = true
      });
    }

    readDirectory(path.resolve(__dirname, base))

    function Module (file) {
      return require(file)
    }

    Module.keys = () => Object.keys(files)

    return Module
  }
}

const reqDev = require.context('./modules', true, /\.js$/)

reqDev.keys().forEach(function (key) {
  reqDev(key).default.forEach((item) => {
    const {
      url,
      method,
      body = {},
      queryParams = {}
    } = item
    
    // retrieve data
    const listByMethod = mockPaths.get(url) || new Map()
    const list = listByMethod.get(method) || new Map()
  
    const queryStr = JSON.stringify(queryParams)
    const payloadStr = JSON.stringify(body)
  
    const key = queryStr + payloadStr
    // update data
    list.set(key, item)
    listByMethod.set(method, list)
    mockPaths.set(url, listByMethod)
  })
})

export default mockPaths