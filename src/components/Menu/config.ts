import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: "/",
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: "Exchange",
        href: "https://exchange.zcore.network/#/swap",
      },
      {
        label: "Liquidity",
        href: "https://exchange.zcore.network/#/pool",
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Nests',
      icon: 'PoolIcon',
    href: '/nests',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/zcore-coin/',
      },
      {
        label: 'Docs',
        href: 'https://docs.zcore.fi/',
      },
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0x0288D3E353fE2299F11eA2c2e1696b4A648eCC07',
      },
/*      
      {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/en/coins/goose-finance',
      },
      {
        label: 'CoinMarketCap',
        href: 'https://coinmarketcap.com/currencies/goose-finance/',
      },
      {
        label: 'AstroTools',
        href: 'https://app.astrotools.io/pancake-pair-explorer/0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
      },
*/      
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Buy ZeFi',
        href: 'https://exchange.zcore.network/#/swap?inputCurrency=ETH&outputCurrency=0x0288D3E353fE2299F11eA2c2e1696b4A648eCC07',
      },
      {
        label: 'Buy wZCR',
        href: 'https://exchange.zcore.network/#/swap?inputCurrency=ETH&outputCurrency=0x1f01dc57c66c2f87d8eab9c625d335e9defe6912',
      },
      {
        label: 'Buy ZCRT',
        href: 'https://exchange.zcore.network/#/swap?inputCurrency=ETH&outputCurrency=0x31184efef1ccd72696facd35594af3af2a537a3f',
      },
    ],
  },
   {
    label: 'Audit By Certik in progress...',
    icon: 'AuditIcon',
    href: '/',
  },  
]

export default config
