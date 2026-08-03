export interface AttributeModel {
  readonly uniqueIdentifier: string;
  readonly name: string;
  readonly description: string;
}

export const attributes = {
  strength: {
    uniqueIdentifier: 'strength',
    name: 'Força',
    description: '',
  },
  dexterity: {
    uniqueIdentifier: 'dexterity',
    name: 'Destreza',
    description: '',
  },
  constitution: {
    uniqueIdentifier: 'constitution',
    name: 'Constituição',
    description: '',
  },
  intelligence: {
    uniqueIdentifier: 'intelligence',
    name: 'Inteligência',
    description: '',
  },
  wisdom: {
    uniqueIdentifier: 'wisdom',
    name: 'Sabedoria',
    description: '',
  },
  charisma: {
    uniqueIdentifier: 'charisma',
    name: 'Carisma',
    description: '',
  },
} as const satisfies Record<string, AttributeModel>;
