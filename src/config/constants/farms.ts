import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 8,
    risk: 5,
    lpSymbol: 'ZEFI-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x24b87c29e907d6329ed8fd6d7b2ecb074089093e',
    },
    tokenSymbol: 'ZEFI',
    tokenAddresses: {
      97: '',
      56: '0x0288D3E353fE2299F11eA2c2e1696b4A648eCC07',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  }, 
  {
    pid: 9,
    risk: 5,
    lpSymbol: 'ZEFI-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x0e6027880a04677bae5e4225000078ee92904bf6',
    },
    tokenSymbol: 'ZEFI',
    tokenAddresses: {
      97: '',
      56: '0x0288D3E353fE2299F11eA2c2e1696b4A648eCC07',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },   
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'WZCR-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x706040E6472BF5445e7B88D450De4F2623106DB2',
    },
    tokenSymbol: 'WZCR',
    tokenAddresses: {
      97: '',
      56: '0x1f01dc57c66c2f87d8eab9c625d335e9defe6912',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },  

  {
    pid: 1,
    risk: 5,
    lpSymbol: 'WZCR-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x304ae067f223c56bc273aa65631630d473718602',
    },
    tokenSymbol: 'WZCR',
    tokenAddresses: {
      97: '',
      56: '0x1f01dc57c66c2f87d8eab9c625d335e9defe6912',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },  
  {
    pid: 2,
    risk: 5,
    lpSymbol: 'ZCRT-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x30599d4c9c015bf6cb374cf9a125b3c94d101f69',
    },
    tokenSymbol: 'ZCRT',
    tokenAddresses: {
      97: '',
      56: '0x31184efef1ccd72696facd35594af3af2a537a3f',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },  
  {
    pid: 3,
    risk: 3,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },   
  {
    pid: 4,
    risk: 1,
    lpSymbol: 'USDT-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xc15fa3e22c912a276550f3e5fe3b0deb87b55acd',
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '',
      56: '0x55d398326f99059ff775485246999027b3197955',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },   
  {
    pid: 5,
    risk: 1,
    lpSymbol: 'USDC-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x680dd100e4b394bda26a59dd5c119a391e747d18',
    },
    tokenSymbol: 'USDC',
    tokenAddresses: {
      97: '',
      56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  }, 
  {
    pid: 22,
    risk: 5,
    lpSymbol: 'DAI-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x3aB77e40340AB084c3e23Be8e5A6f7afed9D41DC',
    },
    tokenSymbol: 'DAI',
    tokenAddresses: {
      97: '',
      56: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },      
  {
    pid: 12,
    risk: 2,
    lpSymbol: 'BTCB-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x7561eee90e24f3b348e1087a005f78b4c8453524',
    },
    tokenSymbol: 'BTCB',
    tokenAddresses: {
      97: '',
      56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },  
  {
    pid: 13,
    risk: 2,
    lpSymbol: 'ETH-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x70d8929d04b60af4fb9b58713ebcf18765ade422',
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '',
      56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },    
  {
    pid: 6,
    risk: 4,
    lpSymbol: 'CAKE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xa527a61703d82139f8a06bc30097cc9caa2df5a6',
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },   
  {
    pid: 7,
    risk: 5,
    lpSymbol: 'EGG-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xd1b59d11316e87c3a0a069e80f590ba35cd8d8d3',
    },
    tokenSymbol: 'EGG',
    tokenAddresses: {
      97: '',
      56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  }, 
  {
    pid: 11,
    risk: 5,
    lpSymbol: 'WKSOC-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xcEf1AB7C9B5A5025d90BB4Dc0FF491941e038665',
    },
    tokenSymbol: 'WKSOC',
    tokenAddresses: {
      97: '',
      56: '0xdeE6Ae8455be6470c9dD5865df191414aF9C287E',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },    
  {
    pid: 10,
    risk: 5,
    lpSymbol: 'WKSOC-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xcEf1AB7C9B5A5025d90BB4Dc0FF491941e038665',
    },
    tokenSymbol: 'WKSOC',
    tokenAddresses: {
      97: '',
      56: '0xdeE6Ae8455be6470c9dD5865df191414aF9C287E',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },  
  {
    pid: 14,
    risk: 5,
    isTokenOnly: true,    
    lpSymbol: 'ZEFI',
    lpAddresses: {
      97: '',
      56: '0x24b87c29e907d6329ed8fd6d7b2ecb074089093e', // ZEFI-BUSD LP
    },
    tokenSymbol: 'ZEFI',
    tokenAddresses: {
      97: '',
      56: '0x0288D3E353fE2299F11eA2c2e1696b4A648eCC07',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
{
    pid: 15,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'BUSD',
    lpAddresses: {
      97: '',
      56: '0x24b87c29e907d6329ed8fd6d7b2ecb074089093e', // EGG-BUSD LP (BUSD-BUSD will ignore)
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '',
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 16,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'WBNB',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f', // BNB-BUSD LP
    },
    tokenSymbol: 'WBNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 23,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'DAI',
    lpAddresses: {
      97: '',
      56: '0x3ab77e40340ab084c3e23be8e5a6f7afed9d41dc', // DAI-BUSD LP
    },
    tokenSymbol: 'DAI',
    tokenAddresses: {
      97: '',
      56: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },  
  {
    pid: 24,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'CAKE',
    lpAddresses: {
      97: '',
      56: '0x0ed8e0a2d99643e1e65cca22ed4424090b8b7458', // CAKE-BUSD LP
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },    
  {
    pid: 17,
    risk: 2,
    isTokenOnly: true,
    lpSymbol: 'BTCB',
    lpAddresses: {
      97: '',
      56: '0xb8875e207ee8096a929d543c9981c9586992eacb', // BTCB-BUSD LP
    },
    tokenSymbol: 'BTCB',
    tokenAddresses: {
      97: '',
      56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 18,
    risk: 2,
    isTokenOnly: true,
    lpSymbol: 'ETH',
    lpAddresses: {
      97: '',
      56: '0xd9a0d1f5e02de2403f68bb71a15f8847a854b494', // ETH-BUSD LP
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '',
      56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 19,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'USDC',
    lpAddresses: {
      97: '',
      56: '0x680dd100e4b394bda26a59dd5c119a391e747d18', // USDC-BUSD LP
    },
    tokenSymbol: 'USDC',
    tokenAddresses: {
      97: '',
      56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 20,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'USDT',
    lpAddresses: {
      97: '',
      56: '0xc15fa3e22c912a276550f3e5fe3b0deb87b55acd', // USDT-BUSD LP
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '',
      56: '0x55d398326f99059ff775485246999027b3197955',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },  
  {
    pid: 21,
    risk: 5,
    lpSymbol: 'WLQX-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x96c3Bef501F5ddC82e0717839Dba5F4e1F75429d',
    },
    tokenSymbol: 'WLQX',
    tokenAddresses: {
      97: '',
      56: '0x4495e673eE53c61CE79c35D5e299733639362aEc',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },    

]

export default farms
