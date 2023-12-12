export default [
  {
    method: 'GET',
    url: '/backend/test',
    queryParams: {
      queryTest: ['TEST-123', 'TEST-345']
    },
    response: {
      code: 200,
      status: 'OK',
      data: {
        text: 'Get data via API is successful',
        params: ['TEST-123', 'TEST-345']
      }
    }
  },
  {
    method: 'POST',
    url: '/backend/test',
    body: {
      id: 'Test123',
      data: {
        text: 'Doing some Test',
        list: [
          'this is data1',
          'this is data2',
          'this is data3'
        ]
      }
    },
    response: {
      code: 200,
      status: 'OK',
      data: {
        text: 'Post data via API is successful',
        list: [
          'this is data1',
          'this is data2',
          'this is data3'
        ]
      }
    }
  }
]
