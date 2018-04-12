# Gekko Exchanges

Based on [gekko](https://github.com/askmike/gekko)

*Use gekko-exchanges at your own risk.*   

## Gekko exchanges api (async / callback)

### Install
```
npm install gekko-exchanges
```

### Usage [example](demo/example.js)
```
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
```

### Avalialbe Methods [docs](https://github.com/askmike/gekko/blob/develop/docs/extending/add_an_exchange.md)
```
// Sync
getCapabilities

// Async
getTradesAsync
getTickerAsync
getPortfolioAsync
addOrderAsync
getOrderAsync
buyAsync
sellAsync
checkOrderAsync
cancelOrderAsync

// Callback
getTrades
getTicker
getPortfolio
addOrder
getOrder
buy
sell
checkOrder
cancelOrder
```

### Avalialbe Exchanges
```
Binance
Bitcoincoid
Bitfinex
Bittrex
CEXio
Coinfalcon
Gdax
Gemini
Quadriga
```
