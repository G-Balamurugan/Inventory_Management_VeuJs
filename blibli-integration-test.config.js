module.exports = {
  app: {
    // script to run collab in no mock mode
    script: 'dev-nomock',
    // url to app.js file
    waitUrls: ['http-get://localhost:8080/src/main.js'],
    // api mock path
    mockPaths: ['/src/api-mock/modules']
  },
  playwright: {
    // headless: true, // default to true
    // devtools: false,
    // debug: false,
    // inspector: true
    setRetry: false,
    retryTimes: 3
  },
  jest: {
    // default to 50% cpu thread number
    // maxWorkers: '50%',
    // test target files
    // testMatch: [
    //   '<rootDir>/integrations/specs/**/*.spec.js'
    // ],
  },
  // remove this attribute if you do not use unit testing
  unitTest: {
    // path to coverage final json file from unit test
    coverageFinalJsonPaths: ['tests/coverage/coverage-final.json']
  },
  // remove this attribute if you do not need to mock
  mock: {
    // you can add array of url(s) here using regex
    urls: [
      // example url that needs to be mocked: /maps.google.com/
    ]
  }
}