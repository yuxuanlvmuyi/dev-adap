import { smartContract } from '../config.js'
const TronWeb = require('tronweb')

// console.log(smartContract)
const HttpProvider = TronWeb.providers.HttpProvider;
const fullNode = new HttpProvider(smartContract.fullNodeUrl); // Full node http endpoint
const solidityNode = new HttpProvider(smartContract.solidityNodeUrl); // Solidity node http endpoint
const eventServer = new HttpProvider(smartContract.eventServerUrl); // Contract events http endpoint
const tronWeb = new TronWeb(
    fullNode,
    solidityNode,
    eventServer,
    smartContract.developerPrivateKey
);
const owner_address = tronWeb.defaultAddress.hex;

// 后台调用doBuy方法
export async function doBuy () {
  var res = await tronWeb.fullNode.request("wallet/triggersmartcontract", {
      // contract_address: '41f04053ec8484e978e894c414b6caafc57917802f',
      contract_address : smartContract.contractAddress,
      owner_address: owner_address,
      function_selector: 'doBuy()',
      fee_limit: parseInt(6000000),
      call_value: parseInt(10000000)
  }, "post");
  return res;
}

// 请求智能合约status方法
export async function status () {
  var res = await tronWeb.fullNode.request("wallet/triggersmartcontract", {
      // contract_address: '41f04053ec8484e978e894c414b6caafc57917802f',
      contract_address : smartContract.contractAddress,
      owner_address: owner_address,
      function_selector: 'status()',
      fee_limit: parseInt(6000000)
  }, "post");
  console.log('res res:', res)
  return res;
}

// 获取txid的状态
export async function gettransactioninfobyid (txid) {
  var res = await tronWeb.solidityNode.request("walletsolidity/gettransactioninfobyid", {
      // contract_address: '41f04053ec8484e978e894c414b6caafc57917802f',
      value : 'c5755e08703742c29da26f4f99de69bb009e81643f70d179b430c66b2f6ca8ef'
      // value : '9e58a000b42922c1d08d31aa968be1dea695e57464bdc403bb01a4f2d69d7c40'
      // value : txid,
  }, "post");
  console.log('res res:', res)
  return res;
}

// 获取txid的状态
export async function roundLucky (txid) {
  var res = await tronWeb.fullNode.request("wallet/triggersmartcontract", {
      contract_address : smartContract.contractAddress,
      owner_address: owner_address,
      function_selector: 'roundLucky()',
      fee_limit: parseInt(6000000),
      // call_value: 
  }, "post");
  console.log('res res:', res)
  return res;
}


// 获取txid的状态
export async function doRefund (txid) {
  var res = await tronWeb.fullNode.request("wallet/triggersmartcontract", {
      contract_address : smartContract.contractAddress,
      owner_address: owner_address,
      function_selector: 'doRefund()',
      fee_limit: parseInt(6000000)
  }, "post");
  console.log('res res:', res)
  return res;
}























