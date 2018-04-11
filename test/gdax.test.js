const { expect } = require('chai')
const { back } = require('nock')

back.fixtures = __dirname + '/nock_fixtures'
back.setMode(true ? 'record': 'dryrun')

const { Gdax: Api } = require('../')

const options = {
  key: '',
  secret: '',
  currency: 'BTC',
  asset: 'ETH'
}

const api = new Api(options)

describe(api.name, function() {

  let recordDone

  before(async () => {
    const { nockDone } = await back(`${api.name}.json`)
    recordDone = nockDone
  })

  it('get trades', async () => {
    const trades = await api.getTradesAsync(null)

    expect(trades[0]).to.have.property('tid')
    expect(trades[0]).to.have.property('date')
    expect(trades[0]).to.have.property('price')
    expect(trades[0]).to.have.property('amount')
  })

  it('get ticker', async () => {
    const ticker = await api.getTickerAsync()

    expect(ticker).to.have.property('ask')
    expect(ticker).to.have.property('bid')
  })

  after(() => {
    recordDone()
  })

})
