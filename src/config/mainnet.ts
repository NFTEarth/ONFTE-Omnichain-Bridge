import {ChainId} from '@layerzerolabs/lz-sdk';
import {Token} from '@layerzerolabs/x-trader-joe-bridge';

const tokens = [
  new Token(ChainId.BSC, '0x1912A3504E59d1C1B060bf2d371DEB00b70E8796', 18, 'NFTE'),
  new Token(ChainId.ARBITRUM, '0x51B902f19a56F0c8E409a34a215AD2673EDF3284', 18, 'NFTE'),
  new Token(ChainId.AVALANCHE, '0xD47E4F1ef1AA4090bc27420BDD5cB379Ced81440', 18, 'NFTE'),
  new Token(ChainId.POLYGON, '0x492Fa53b88614923937B7197C87E0F7F8EEb7B20', 18, 'NFTE'),
  new Token(ChainId.OPTIMISM, '0x8637725aDa78db0674a679CeA2A5e0A0869EF4A1', 18, 'NFTE'),
  new Token(ChainId.BASE, '0xc2106ca72996e49bBADcB836eeC52B765977fd20', 18, 'NFTE'),
  new Token(ChainId.LINEA, '0x2140Ea50bc3B6Ac3971F9e9Ea93A1442665670e4', 18, 'NFTE'),
]

export const mainnet = {tokens};
