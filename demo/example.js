const { Binance, Bitfinex } = require('gekko-exchanges');

const binance = new Binance({ key: '', secret: '', currency: 'BTC', asset: 'ETH' });
const bitfinex = new Bitfinex({ key: '', secret: '', currency: 'BTC', asset: 'ETH' });

// async example
(async () => {

  try {
    const binanceTrades = await binance.getTradesAsync(null)
    console.log('binanceTrades', binanceTrades)
  } catch (err) {
    console.log('err', err)
  }

})();

// callback example
bitfinex.getTrades(null, (err, bitfinexTrades) => {
  console.log('err', err)
  console.log('bitfinexTrades', bitfinexTrades)
})
