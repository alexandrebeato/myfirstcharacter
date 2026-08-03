export interface LanguageModel {
  readonly uniqueIdentifier: string;
  readonly name: string;
  readonly origin: string;
  readonly description: string;
  readonly rarity: 'standard' | 'rare';
}

export const languages = {
  abyssal: {
    uniqueIdentifier: 'abyssal',
    name: 'Abissal',
    origin: 'Demônios do Abismo',
    description: '',
    rarity: 'rare',
  },
  celestial: {
    uniqueIdentifier: 'celestial',
    name: 'Celestial',
    origin: 'Celestiais',
    description: '',
    rarity: 'rare',
  },
  common: {
    uniqueIdentifier: 'common',
    name: 'Comum',
    origin: 'Sigil',
    description: '',
    rarity: 'standard',
  },
  commonSignLanguage: {
    uniqueIdentifier: 'commonSignLanguage',
    name: 'Língua Comum de Sinais',
    origin: 'Sigil',
    description: '',
    rarity: 'standard',
  },
  deepSpeech: {
    uniqueIdentifier: 'deepSpeech',
    name: 'Dialeto Obscuro',
    origin: 'Aberrações',
    description: '',
    rarity: 'rare',
  },
  draconic: {
    uniqueIdentifier: 'draconic',
    name: 'Dracônico',
    origin: 'Dragões',
    description: '',
    rarity: 'standard',
  },
  druidic: {
    uniqueIdentifier: 'druidic',
    name: 'Druídico',
    origin: 'Círculos Druídicos',
    description: '',
    rarity: 'rare',
  },
  dwarvish: {
    uniqueIdentifier: 'dwarvish',
    name: 'Anão',
    origin: 'Anões',
    description: '',
    rarity: 'standard',
  },
  elvish: {
    uniqueIdentifier: 'elvish',
    name: 'Élfico',
    origin: 'Elfos',
    description: '',
    rarity: 'standard',
  },
  giant: {
    uniqueIdentifier: 'giant',
    name: 'Gigante',
    origin: 'Gigantes',
    description: '',
    rarity: 'standard',
  },
  gnomish: {
    uniqueIdentifier: 'gnomish',
    name: 'Gnômico',
    origin: 'Gnomos',
    description: '',
    rarity: 'standard',
  },
  goblin: {
    uniqueIdentifier: 'goblin',
    name: 'Goblin',
    origin: 'Goblinoides',
    description: '',
    rarity: 'standard',
  },
  halfling: {
    uniqueIdentifier: 'halfling',
    name: 'Pequenino',
    origin: 'Pequeninos',
    description: '',
    rarity: 'standard',
  },
  infernal: {
    uniqueIdentifier: 'infernal',
    name: 'Infernal',
    origin: 'Diabos dos Nove Infernos',
    description: '',
    rarity: 'rare',
  },
  orc: {
    uniqueIdentifier: 'orc',
    name: 'Orc',
    origin: 'Orcs',
    description: '',
    rarity: 'standard',
  },
  primordial: {
    uniqueIdentifier: 'primordial',
    name: 'Primordial',
    origin: 'Elementais',
    description: '',
    rarity: 'rare',
  },
  sylvan: {
    uniqueIdentifier: 'sylvan',
    name: 'Silvestre',
    origin: 'Faéria',
    description: '',
    rarity: 'rare',
  },
  thievesCant: {
    uniqueIdentifier: 'thievesCant',
    name: 'Gíria do Ladrão',
    origin: 'Várias guildas criminosas',
    description: '',
    rarity: 'rare',
  },
  undercommon: {
    uniqueIdentifier: 'undercommon',
    name: 'Subcomum',
    origin: 'O Subterrâneo',
    description: '',
    rarity: 'rare',
  },
} as const satisfies Record<string, LanguageModel>;
