# demo-idol-funding

## 1. 데모 앱 환경설정
> ./src/js/config.js
```javascript
Config : {
    environment: {
      id: '1633689966949106721'  // SideChain의 environment id
    },
    st: {
      symbol: 'R1008', // LST Symbol example
      dec: '000000000000000000' // LST pegging Decimal
    },
    mt: {
      symbol: 'I1008' // LMT Symbol example
    },
    wallet: {
      pd: {
        id: '1633690442731056817', // Producer account id
        address: '0x5d3ace19a3bd94c2829f5e6302dc923680faed29' // Producer account address example
      },
      user: {
        id: '1633690457568764624', // User account id
        address: '0x90efa0f62d29b21a2541c8f4ae7a007383d44dba' // User account address example
      }
    },
    apiKey: { // API key for using luniverse API
      token: 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ2ZXIiOiJ2MSIsInRrbiI6ImE2YmRiMjRiM2Q1ZWI5MmIiLCJ0cGUiOiJJQU0iLCJzbHQiOiI3MDhmY2M0YWQyYWI5M2U3IiwiaWF0IjoxNjM1NzQ2Nzk3LCJleHAiOjE5NTExMDY3OTcsImlzcyI6Imx1bnZzOmJhYXM6YXV0aDpzZXJ2aWNlIn0.YIWP0JxOZsIxBHizd-G_Hk1NMeib-jHK3y1mPPuEKl6R_nS7bPZpuUNZtOw7ojuzGXRmOATopO7c2GmYjHBc7w'
    },
    txAction: { // tx Action names
      like: 'like',
      funding: 'funding',
      purchase: 'purchase',
      getOwner: 'getOwner',
      setOwner: 'setOwner'
    },
    nft: { // nft metamask link
      network: {
        chainId: '0xD4EC1',
        rpcUrls: ['https://baas-rpc.luniverse.io:18545?lChainId=1634284028186342722'],
        chainName: 'Luniverse LPOA',
        nativeCurrency: { name: 'LUK', decimals: 18, symbol: 'LUK' },
        blockExplorerUrls: ['https://sidescan.luniverse.io/chains/1634284028186342722']
      },
    }
  }
```
## 2. 디렉토리 구조
```bash
.
├── contracts                          // solidity files to deploy contracts
├── node_modules
├── public
└── src
    ├── assets
    │   ├── css
    │   ├── img2
    │   │   ├── avatars                // avatar card images of a Main Page 
    │   │   ├── detail                 // detail images of a Detail Page
    │   │   └── nft                    // no nft images of a NFT Page
    │   │   └── product                // card images of a Product Page
    │   └── vendor
    │       └── css
    ├── components                     // vue files of pages(Not Components)
    ├── js                             // config.js & metamask.js
    └── router
        └── paths
```
