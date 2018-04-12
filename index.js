const { join } = require('path')
const { promisifyAll } = require('bluebird')

let util

try {
  util = require(join(__dirname, '../../node_modules/gekko/core/util'))
} catch (e) {
  util = require(join(__dirname, 'node_modules/gekko/core/util'))
}

util.setConfig({})

const { exchanges } = util.dirs()

const Binance = require(exchanges + 'binance')
promisifyAll(Binance.prototype)

const Bitcoincoid = require(exchanges + 'bitcoin-co-id')
promisifyAll(Bitcoincoid.prototype)

const Bitfinex = require(exchanges + 'bitfinex')
promisifyAll(Bitfinex.prototype)

const Bitstamp = require(exchanges + 'bitstamp')
promisifyAll(Bitstamp.prototype)

const Bittrex = require(exchanges + 'bittrex')
promisifyAll(Bittrex.prototype)

const Bitx = require(exchanges + 'bitx')
promisifyAll(Bitx.prototype)

const BTCChina = require(exchanges + 'btcc')
promisifyAll(BTCChina.prototype)

const Bitexthai = require(exchanges + 'bx.in.th')
promisifyAll(Bitexthai.prototype)

const CEXio = require(exchanges + 'cexio')
promisifyAll(CEXio.prototype)

const Coinfalcon = require(exchanges + 'coinfalcon')
promisifyAll(Coinfalcon.prototype)

const Coingi = require(exchanges + 'coingi')
promisifyAll(Coingi.prototype)

const Gdax = require(exchanges + 'gdax')
promisifyAll(Gdax.prototype)

const Gemini = require(exchanges + 'gemini')
promisifyAll(Gemini.prototype)

const Kraken = require(exchanges + 'kraken')
promisifyAll(Kraken.prototype)

const Lakebtc = require(exchanges + 'lakebtc')
promisifyAll(Lakebtc.prototype)

const OKCoin = require(exchanges + 'okcoin')
promisifyAll(OKCoin.prototype)

const Poloniex = require(exchanges + 'poloniex')
promisifyAll(Poloniex.prototype)

const Quadriga = require(exchanges + 'quadriga')
promisifyAll(Quadriga.prototype)

const WEX = require(exchanges + 'wex.nz')
promisifyAll(WEX.prototype)

module.exports = {
  Binance,
  Bitcoincoid,
  Bitfinex,
  Bitstamp,
  Bittrex,
  Bitx,
  BTCChina,
  Bitexthai,
  CEXio,
  Coinfalcon,
  Coingi,
  Gdax,
  Gemini,
  Kraken,
  Lakebtc,
  OKCoin,
  Poloniex,
  Quadriga,
  WEX
}
