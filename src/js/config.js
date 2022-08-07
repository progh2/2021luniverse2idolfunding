module.exports = {
  Config : {
    // chain ID.
    environment: {
      id: '1634284028186342722'
    },
    st: {
      //symbol is R + your phone number dec =  0 * 18
      symbol: 'R9413',
      dec: '000000000000000000'
    },
    // MT symbol.
    mt: {
      symbol: 'EDU'
    },
    wallet: {
      pd: {
        //id is https://console.luniverse.io/env-accounts/"idnumber" check your console-env-account
        id: '1644555731571905505',
        name: 'pd',
        address: '0x87be0be9d37bb8003cd71556bd09312f0e1aa122'
      },
      user: {
        //id is https://console.luniverse.io/env-accounts/"idnumber" check your console-env-account
        id: '1644555839988254397',
        name: 'user',
        address: '0x8613e2efdf5bcca08e549438ca31f7be3d4e50a8'
      }
    },
    apiKey: {
      // API key for using luniverse API. Do not modify this.
      token: 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ2ZXIiOiJ2MSIsInRrbiI6ImE2YmRiMjRiM2Q1ZWI5MmIiLCJ0cGUiOiJJQU0iLCJzbHQiOiI3MDhmY2M0YWQyYWI5M2U3IiwiaWF0IjoxNjM1NzQ2Nzk3LCJleHAiOjE5NTExMDY3OTcsImlzcyI6Imx1bnZzOmJhYXM6YXV0aDpzZXJ2aWNlIn0.YIWP0JxOZsIxBHizd-G_Hk1NMeib-jHK3y1mPPuEKl6R_nS7bPZpuUNZtOw7ojuzGXRmOATopO7c2GmYjHBc7w'
    },
    txAction: {
      // your Tx_action name.
      like: 'like9413',
      funding: 'funding9413',
      purchase: 'purchase9413',
      getOwner: 'getOwner9413',
      setOwner: 'setOwner9413'
    },
    nft: {
      network: {
        chainId: '0xD4EC1',
        rpcUrls: ['https://baas-rpc.luniverse.io:18545?lChainId=1634284028186342722'],
        chainName: 'Luniverse LPOA',
        nativeCurrency: { name: 'LUK', decimals: 18, symbol: 'LUK' },
        blockExplorerUrls: ['https://sidescan.luniverse.io/chains/1634284028186342722']
      },
    }
  }
}
