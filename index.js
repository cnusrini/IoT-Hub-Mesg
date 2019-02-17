//const mesg = require('mesg-js').service()
//import web3 from '../web3';
//import contractInstance from '../contract';
const Web3 = require('web3');
let web3 = new Web3(
  // Replace YOUR-PROJECT-ID with a Project ID from your Infura Dashboard
  new Web3.providers.WebsocketProvider("wss://rinkeby.infura.io/ws/v3/2fb5d741e27d41338565a779e1d0f92d")
);

//https://rinkeby.infura.io/v3/2fb5d741e27d41338565a779e1d0f92d
const contractInstance = new web3.eth.Contract(require('./testabi.json'),'0x5b65810427330a935d4e30b90189d880ce9db652');

contractInstance.events.logNewSnapDetails({fromBlock: 'latest'})
  .on('data', (event) => {
    console.log('transfer', event)
  })
  .on('error', (err) => {
    console.error(err)
  })

console.log('Listening ERC20 transfer...')
