export interface WeaponMasteryPropertyModel {
  readonly uniqueIdentifier: string;
  readonly name: string;
  readonly description: string;
}

// Página do jogador: 214
export const weaponMasteryProperties = {
  cleave: {
    uniqueIdentifier: 'cleave',
    name: 'Fender',
    description: '',
  },
  graze: {
    uniqueIdentifier: 'graze',
    name: 'Esfolar',
    description: '',
  },
  nick: {
    uniqueIdentifier: 'nick',
    name: 'Entalhar',
    description: '',
  },
  push: {
    uniqueIdentifier: 'push',
    name: 'Empurrar',
    description: '',
  },
  sap: {
    uniqueIdentifier: 'sap',
    name: 'Minar',
    description: '',
  },
  slow: {
    uniqueIdentifier: 'slow',
    name: 'Desacelerar',
    description: '',
  },
  topple: {
    uniqueIdentifier: 'topple',
    name: 'Derrubar',
    description: '',
  },
  vex: {
    uniqueIdentifier: 'vex',
    name: 'Afligir',
    description: '',
  },
} as const satisfies Record<string, WeaponMasteryPropertyModel>;
