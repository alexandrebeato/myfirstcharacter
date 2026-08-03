export interface DamageTypeModel {
  readonly uniqueIdentifier: string;
  readonly name: string;
  readonly description: string;
}

// Página do jogador: 376
export const damageTypes = {
  acid: {
    uniqueIdentifier: 'acid',
    name: 'Ácido',
    description: '',
  },
  bludgeoning: {
    uniqueIdentifier: 'bludgeoning',
    name: 'Contundente',
    description: '',
  },
  cold: {
    uniqueIdentifier: 'cold',
    name: 'Gélido',
    description: '',
  },
  fire: {
    uniqueIdentifier: 'fire',
    name: 'Ígneo',
    description: '',
  },
  force: {
    uniqueIdentifier: 'force',
    name: 'Energético',
    description: '',
  },
  lightning: {
    uniqueIdentifier: 'lightning',
    name: 'Elétrico',
    description: '',
  },
  necrotic: {
    uniqueIdentifier: 'necrotic',
    name: 'Necrótico',
    description: '',
  },
  piercing: {
    uniqueIdentifier: 'piercing',
    name: 'Perfurante',
    description: '',
  },
  poison: {
    uniqueIdentifier: 'poison',
    name: 'Venenoso',
    description: '',
  },
  psychic: {
    uniqueIdentifier: 'psychic',
    name: 'Psíquico',
    description: '',
  },
  radiant: {
    uniqueIdentifier: 'radiant',
    name: 'Radiante',
    description: '',
  },
  slashing: {
    uniqueIdentifier: 'slashing',
    name: 'Cortante',
    description: '',
  },
  thunder: {
    uniqueIdentifier: 'thunder',
    name: 'Trovejante',
    description: '',
  },
} as const satisfies Record<string, DamageTypeModel>;
