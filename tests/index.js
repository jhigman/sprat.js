const boot = require('../app').boot
const shutdown = require('../app').shutdown
const port = require('../app').port
const superagent = require('superagent')
const expect = require('chai').expect

describe('server', () => {

  before(() => {
    boot()
  })

  describe('homepage', () => {
    it('should respond to GET', (done) => {
      superagent
        .get(`http://localhost:${port}`)
        .end((error, response) => {
          expect(response.status).to.equal(200)
          done()
        })
    })
    it('should show message text', (done) => {
      superagent
        .get(`http://localhost:${port}`)
        .end((error, response) => {
          expect(response.text).to.contain('dudes')
          expect(response.text).to.contain('yo there')
          done()
        })
    })
  })

  after(() => {
    shutdown()
  })
})