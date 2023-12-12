import { createServer, Response } from 'miragejs'

const RESPONSE_404 = {
  status: 404,
  response: {
    code: 404,
    status: 'Not Found'
  }
}

const mockPaths = new Map()

const reqDev = import.meta.glob('./modules/*.js', { eager: true })

function getValue(accKey, val) {
  if(!accKey) return val
  return [].concat(accKey, val)
}

function getGroupedQueryParamsByKey (queryParams) {
  const params = new URLSearchParams(queryParams)
  return [...params.entries()].reduce((acc, tuple) => {
    const [key, val] = tuple
    acc[key] = getValue(acc[key], val)
    return acc
  }, {})
}

for (const path in reqDev) {
  reqDev[path].default.forEach((item) => {
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
}

createServer({
  routes () {
    mockPaths.forEach((groupByMethod, keyUrl) => {
      groupByMethod.forEach((groupByPayload, keyMethod) => {
        const curMethod = keyMethod.toLowerCase()

        // register route
        this[curMethod](keyUrl, (schema, request) => {
          const url = new URL(request.url)
          const groupedQueryParams = getGroupedQueryParamsByKey(url.search)
          const queryStr = JSON.stringify(groupedQueryParams)
          const body = JSON.parse(request.requestBody || '{}')
          const bodyStr = JSON.stringify(body)
          const key = queryStr + bodyStr
          const item = groupByPayload.get(key) || RESPONSE_404
          const { response } = item

          return new Response(response.code, {}, response)
        })
      })
    })
  }
})
