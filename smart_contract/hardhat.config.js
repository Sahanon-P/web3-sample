require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/_T2cbBIFHm3PJo8uIl1UDEdQiyg8A92D',
      accounts: ['48227376e3bd1674420501f0f7b07931daedf6dda7c7a7dddcedba2b12cf3f27'],
    },
  },
};