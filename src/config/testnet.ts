import {ChainId} from '@layerzerolabs/lz-sdk';
import {Token} from '@layerzerolabs/x-trader-joe-bridge';

const tokens = [
  new Token(ChainId.FUJI, '0x4EA9EE08407A06fb62dd2F4B1070c07A8a122525', 18, 'ONFTEV2'),
  new Token(ChainId.ARBITRUM_GOERLI, '0x845C442d3B6B5cCC32Fd0192b196b8e155Db508B', 18, 'ONFTEV2'),
  new Token(ChainId.OPTIMISM_GOERLI, '0x261689E5A8534F243d30E6255Ce1f95E938A84A6', 18, 'ONFTEV2'),
  new Token(ChainId.MUMBAI, '0xa282373c58dE9ecD5eAeC2CC1Ab51b8Dae3E6C7b', 18, 'ONFTEV2'),
];



export const testnet = {tokens};
