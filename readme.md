# A Simple Storage Dapp On Web
## Description
"Simple Storage Dapp" is a very simple dapp, of which web frontend with Metamask and blockchain backend using (Ropsten) testnet provides a simple value storage usage. Users can easily send a transaction by using Metamask to change the value stored on Ropsten testnet. Put backend first, local test mainly rely on Truffle, and final deployment rely on Infura. On the other hand, frontend, web development and local test with react, and then deployment on Github pages. 

### Address of contract
0xd474ca4e5ab236d7855f3a86f0c3b49a85c1fed0

### URL on Etherscan to check
https://ropsten.etherscan.io/address/0xd474ca4e5ab236d7855f3a86f0c3b49a85c1fed0

## Frontend UI
https://rayhungkao.github.io/simple-dapp/

## Requirements
1. Use your Metamask account and a supported web browser e.g. Chrome.
2. Install Node.js and npm
#### Version of Node.js I use
```
    $node --version
    v10.16.3
```
#### Version of npm I use
```
    $npm --version
    6.9.0
```

## Environment setup
truffle and react
```
    $npm install -g truffle
    $npm install @truffle/hdwallet-provider //if failed and you use Windows, run `$npm install -g windows-build-tools` and try again
    $npm install -g create-react-app
    $cd client
    $npm install    //inside client directory
    $npm install react-bootstrap bootstrap  //for correctly render with react bootstrap
```

## Test for contract by truffle
```
    $truffle develop
    $compile    //inside truffle console
    $migrate    
    $test       //by default it runs $test ./test/<filename>.sol
```
or directly run
```
    $truffle test ./test/simplestorage.js       //for js test files
    $truffle test ./test/TestSimpleStorage.sol  //for sol test files
```

## Test for web and display in localhost
run command in another terminal, not in truffle console:
```
    $cd client
    $npm run start  //inside client directory
```

## Deploy the contract to Ropsten by truffle and infura
```
    $truffle migrate --network ropsten
```

### Build web app
```
    $cd client
    $npm run build
```

### Deploy web app
```
    $cd client
    $npm run deploy
```