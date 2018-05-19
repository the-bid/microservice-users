const { uuid } = require('casual')
const { parseBearerToken } = require('./index')

describe('utils', () => {
  describe('parseBearerToken', () => {
    const request = {}
    beforeEach(() => {
      request.headers = {
        authorization: `Bearer ${uuid}`
      }
    })
    afterEach(() => {
      delete request.headers
    })
    test('returns token after the word Bearer in the authorization header', () => {
      const result = parseBearerToken(request)
      expect(result).toEqual(expect.stringMatching(/^[^Bearer].*$/))
    })
    test('returns authorization header if not a Bearer token', () => {
      request.headers.authorization = `Basic ${uuid}`
      const result = parseBearerToken(request)
      expect(result).toEqual(expect.stringMatching(/^Basic\s.*$/))
    })
  })
})