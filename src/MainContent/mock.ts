import { TradingAccount } from "./types";


export const mockAccounts: Array<TradingAccount> = [
  // {
  //   type: 'StandardTradingAccount',
  //   id: '12345',
  //   active: true,
  //   demo: false,
  //   equity: 12500.50,
  //   currency: 'USD',
  //   leverage: 100,
  //   data: [{ timestamp: 1, value: 100 }, { timestamp: 2, value: 105 }]
  // },
  {
    type: 'StandardTradingAccount',
    id: '12345',
    active: true,
    demo: false,
    equity: 12500.50,
    currency: 'USD',
    leverage: 100,
    data: [
      { timestamp: 1, value: 150 },
      { timestamp: 2, value: 135 },
      { timestamp: 3, value: 120 },
      { timestamp: 4, value: 105 },
      { timestamp: 5, value: 90 },
      { timestamp: 6, value: 78 },
      { timestamp: 7, value: 65 },
      { timestamp: 8, value: 50 }
    ]
  },
  {
    type: 'StandardTradingAccount',
    id: '12345',
    active: true,
    demo: false,
    equity: 12500.50,
    currency: 'USD',
    leverage: 100,
    data: [
      { timestamp: 1, value: 100 }, 
      { timestamp: 2, value: 105 }, 
      { timestamp: 3, value: 88 }, 
      { timestamp: 4, value: 23 },
      { timestamp: 5, value: 96 }, 
      { timestamp: 6, value: 105 },
      { timestamp: 7, value: 100 }, 
      { timestamp: 8, value: 120 }]
  },
  {
    type: 'StandardTradingAccount',
    id: '12345',
    active: true,
    demo: false,
    equity: 12500.50,
    currency: 'USD',
    leverage: 100,
    data: [
      { timestamp: 1, value: 50 },
      { timestamp: 2, value: 65 },
      { timestamp: 3, value: 78 },
      { timestamp: 4, value: 92 },
      { timestamp: 5, value: 110 },
      { timestamp: 6, value: 125 },
      { timestamp: 7, value: 140 },
      { timestamp: 8, value: 155 }
    ]
  },
  {
    type: 'StandardTradingAccount',
    id: '12345',
    active: true,
    demo: false,
    equity: 12500.50,
    currency: 'USD',
    leverage: 100,
    data: [{ timestamp: 1, value: 100 },
    { timestamp: 2, value: 145 },
    { timestamp: 3, value: 85 },
    { timestamp: 4, value: 130 },
    { timestamp: 5, value: 75 },
    { timestamp: 6, value: 120 },
    { timestamp: 7, value: 95 },
    { timestamp: 8, value: 140 }]
  },
  {
    type: 'StandardTradingAccount', 
    id: '67890',
    active: false,
    demo: false,
    equity: 0,
    currency: 'USD',
    leverage: 0,
    data: [
      { timestamp: 1, value: 80 },
      { timestamp: 2, value: 95 },
      { timestamp: 3, value: 110 },
      { timestamp: 4, value: 105 }, 
      { timestamp: 5, value: 120 },
      { timestamp: 6, value: 135 },
      { timestamp: 7, value: 130 },
      { timestamp: 8, value: 145 }
    ]
  },
  {
    type: 'StandardTradingAccount',
    id: '55555',
    active: true,
    demo: true,
    equity: 10000,
    currency: 'EUR',
    leverage: 50,
    data: [
      { timestamp: 1, value: 95 },
      { timestamp: 2, value: 98 },
      { timestamp: 3, value: 102 },
      { timestamp: 4, value: 97 },
      { timestamp: 5, value: 101 },
      { timestamp: 6, value: 99 },
      { timestamp: 7, value: 103 },
      { timestamp: 8, value: 100 }
    ]
  },
  {
    type: 'StandardTradingAccount',
    id: '55555',
    active: true,
    demo: true,
    equity: 10000,
    currency: 'EUR',
    leverage: 50,
    data: [
      { timestamp: 1, value: 80 },
      { timestamp: 2, value: 160 },
      { timestamp: 3, value: 70 },
      { timestamp: 4, value: 150 },
      { timestamp: 5, value: 60 },
      { timestamp: 6, value: 140 },
      { timestamp: 7, value: 75 },
      { timestamp: 8, value: 130 }
    ]
  },
  {
    type: 'AppTradingAccount',
    id: '333',
    balance: 5000,
    currency: 'USD'
  }
];
