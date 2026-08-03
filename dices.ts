export interface DiceModel {
  readonly uniqueIdentifier: string;
  readonly name: string;
  readonly description: string;
  readonly sides: number;
}

export const dices = {
  d4: {
    uniqueIdentifier: 'd4',
    name: 'D4',
    description: 'Dado de 4 lados',
    sides: 4,
  },
  d6: {
    uniqueIdentifier: 'd6',
    name: 'D6',
    description: 'Dado de 6 lados',
    sides: 6,
  },
  d8: {
    uniqueIdentifier: 'd8',
    name: 'D8',
    description: 'Dado de 8 lados',
    sides: 8,
  },
  d10: {
    uniqueIdentifier: 'd10',
    name: 'D10',
    description: 'Dado de 10 lados',
    sides: 10,
  },
  d12: {
    uniqueIdentifier: 'd12',
    name: 'D12',
    description: 'Dado de 12 lados',
    sides: 12,
  },
  d20: {
    uniqueIdentifier: 'd20',
    name: 'D20',
    description: 'Dado de 20 lados',
    sides: 20,
  },
  d100: {
    uniqueIdentifier: 'd100',
    name: 'D100',
    description: 'Dado de 100 lados',
    sides: 100,
  },
} as const satisfies Record<string, DiceModel>;
