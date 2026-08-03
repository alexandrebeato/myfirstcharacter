export interface WeaponPropertyModel {
  readonly uniqueIdentifier: string;
  readonly name: string;
  readonly description: string;
}

// Página do jogador: 213
export const weaponProperties = {
  ammunition: {
    uniqueIdentifier: 'ammunition',
    name: 'Munição',
    description: '',
  },
  finesse: {
    uniqueIdentifier: 'finesse',
    name: 'Acuidade',
    description: '',
  },
  heavy: {
    uniqueIdentifier: 'heavy',
    name: 'Pesada',
    description: '',
  },
  light: {
    uniqueIdentifier: 'light',
    name: 'Leve',
    description: '',
  },
  loading: {
    uniqueIdentifier: 'loading',
    name: 'Recarga',
    description: '',
  },
  range: {
    uniqueIdentifier: 'range',
    name: 'Distância',
    description: '',
  },
  reach: {
    uniqueIdentifier: 'reach',
    name: 'Alcance',
    description: '',
  },
  thrown: {
    uniqueIdentifier: 'thrown',
    name: 'Arremesso',
    description: '',
  },
  twoHanded: {
    uniqueIdentifier: 'twoHanded',
    name: 'Duas Mãos',
    description: '',
  },
  versatile: {
    uniqueIdentifier: 'versatile',
    name: 'Versátil',
    description: '',
  },
} as const satisfies Record<string, WeaponPropertyModel>;
