export interface ArmorTrainingModel {
  readonly uniqueIdentifier: string;
  readonly name: string;
  readonly description: string;
}

export const armorTraining = {
  lightArmor: {
    uniqueIdentifier: 'lightArmor',
    name: 'Armaduras Leves',
    description: '',
  },
  mediumArmor: {
    uniqueIdentifier: 'mediumArmor',
    name: 'Armaduras Médias',
    description: '',
  },
  heavyArmor: {
    uniqueIdentifier: 'heavyArmor',
    name: 'Armaduras Pesadas',
    description: '',
  },
  shields: {
    uniqueIdentifier: 'shields',
    name: 'Escudos',
    description: '',
  },
} as const satisfies Record<string, ArmorTrainingModel>;
