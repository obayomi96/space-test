const express = require('express');

const router = express();

const wallet = {
  balance: 0
}

router.get('/', (req, res) =>
  res.status(200).json({
    status: res.statusCode,
    message: 'Welcome to Space X API',
  })
);

router.get('/wallets', (req, res) => {
  res.status(200).send({
    status: res.statusCode,
    data: {
      balance: wallet.balance
    }
  })
})

router.post('/wallets', (req, res) => {
  const { balance } = req.body;
  if (balance !== 3000) {
    return res.status(400).send({
      status: res.statusCode,
      message: `Error!, BTC wallet should be loaded with 3000 BTC`,
      data: {
        balance: wallet.balance
      }
    })
  }
  wallet.balance = balance;
  res.status(201).send({
    status: res.statusCode,
    message: `BTC wallet loaded with ${balance}BTC`,
    data: {
      balance: wallet.balance
    }
  })
})


module.exports = router;
