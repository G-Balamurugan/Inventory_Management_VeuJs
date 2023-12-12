const DEFAULT = {
  headers: {
    'Content-Type': 'application/json'
  }
}

function _getHeaders (headers) {
  return {
    ...DEFAULT.headers,
    ...headers
  }
}

function _responseAdapter (res) {
  return res.json().then((body) => {
    const newRes = {
      ...res,
      body
    }
    if (!res.ok) {
      throw newRes.body || newRes
    }
    return newRes
  })
}

const _emptyValues = [undefined, null, '']
function _hasValue (value) {
  if (_emptyValues.includes(value)) {
    return false
  }
  if (Array.isArray(value)) {
    return value.filter(i => !_emptyValues.includes(i))
      .length
  }
  return true
}

function buildUrl ({
  url,
  queryParams
}) {
  const isFullUrl = url.indexOf('http') === 0
  const urlObj = new URL((isFullUrl ? '' : document.location.origin) + url)
  const searchParams = urlObj.searchParams
  Object.entries(queryParams || {})
    .filter(([_, value]) => _hasValue(value))
    .forEach(([key, value]) => {
      const values = Array.isArray(value) ? value : [value]
      values.forEach(i => searchParams.append(key, i))
    })
  return urlObj
}

export function getDataViaApi ({
  url,
  queryParams,
  headers
}) {
  const urlObj = buildUrl({
    url,
    queryParams
  })
  return fetch(urlObj, {
    method: 'GET',
    headers: _getHeaders(headers)
  }).then(_responseAdapter)
}

export function postDataViaApi ({
  url,
  queryParams,
  headers,
  body
}) {
  const urlObj = buildUrl({
    url,
    queryParams
  })
  return fetch(urlObj, {
    method: 'POST',
    headers: _getHeaders(headers),
    body: JSON.stringify(body)
  }).then(_responseAdapter)
}

export function putDataViaApi ({
  url,
  queryParams,
  headers,
  body
}) {
  const urlObj = buildUrl({
    url,
    queryParams
  })
  return fetch(urlObj, {
    method: 'PUT',
    headers: _getHeaders(headers),
    body: JSON.stringify(body)
  }).then(_responseAdapter)
}

export function deleteDataViaApi ({
  url,
  queryParams,
  headers
}) {
  const urlObj = buildUrl({
    url,
    queryParams
  })
  return fetch(urlObj, {
    method: 'DELETE',
    headers: _getHeaders(headers)
  }).then(_responseAdapter)
}

export function requestDataViaExternalApi ({
  url,
  method,
  queryParams,
  headers,
  body
}) {
  const urlObj = buildUrl({
    url,
    queryParams
  })
  return fetch(urlObj, {
    method,
    headers: _getHeaders(headers),
    body: JSON.stringify(body)
  }).then(_responseAdapter)
}

export default {
  getDataViaApi,
  postDataViaApi,
  putDataViaApi,
  deleteDataViaApi,
  requestDataViaExternalApi
}
