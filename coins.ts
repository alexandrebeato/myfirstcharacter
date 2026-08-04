import { EquipmentModel } from './equipments';

export interface CoinModel extends EquipmentModel {
  readonly type: 'coin';
}

export const coins = {
  copperPieces: {
    uniqueIdentifier: 'copperPieces',
    name: 'Peças de cobre',
    type: 'coin',
    description: '',
  },
  silverPieces: {
    uniqueIdentifier: 'silverPieces',
    name: 'Peças de prata',
    type: 'coin',
    description: '',
  },
  electrumPieces: {
    uniqueIdentifier: 'electrumPieces',
    name: 'Peças de elektro',
    type: 'coin',
    description: '',
  },
  goldPieces: {
    uniqueIdentifier: 'goldPieces',
    name: 'Peças de ouro',
    type: 'coin',
    description: '',
  },
  platinumPieces: {
    uniqueIdentifier: 'platinumPieces',
    name: 'Peças de platina',
    type: 'coin',
    description: '',
  },
} as Record<string, CoinModel>;
