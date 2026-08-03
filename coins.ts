interface CoinModel {
  readonly uniqueIdentifier: string;
  readonly name: string;
  readonly description: string;
}

export const coins = {
  copperPieces: {
    uniqueIdentifier: 'copperPieces',
    name: 'Peças de cobre',
    description: '',
  },
  silverPieces: {
    uniqueIdentifier: 'silverPieces',
    name: 'Peças de prata',
    description: '',
  },
  electrumPieces: {
    uniqueIdentifier: 'electrumPieces',
    name: 'Peças de elektro',
    description: '',
  },
  goldPieces: {
    uniqueIdentifier: 'goldPieces',
    name: 'Peças de ouro',
    description: '',
  },
  platinumPieces: {
    uniqueIdentifier: 'platinumPieces',
    name: 'Peças de platina',
    description: '',
  },
} as Record<string, CoinModel>;
