import { AttributeModel, attributes } from './attributes';

export interface SkillModel {
  readonly uniqueIdentifier: string;
  readonly name: string;
  readonly description: string;
  readonly attribute: AttributeModel;
}

export const skills = {
  acrobatics: {
    uniqueIdentifier: 'acrobatics',
    name: 'Acrobacia',
    description: '',
    attribute: attributes.dexterity,
  },
  animalHandling: {
    uniqueIdentifier: 'animalHandling',
    name: 'Lidar com Animais',
    description: '',
    attribute: attributes.wisdom,
  },
  arcana: {
    uniqueIdentifier: 'arcana',
    name: 'Arcanismo',
    description: '',
    attribute: attributes.intelligence,
  },
  athletics: {
    uniqueIdentifier: 'athletics',
    name: 'Atletismo',
    description: '',
    attribute: attributes.strength,
  },
  deception: {
    uniqueIdentifier: 'deception',
    name: 'Enganação',
    description: '',
    attribute: attributes.charisma,
  },
  history: {
    uniqueIdentifier: 'history',
    name: 'História',
    description: '',
    attribute: attributes.intelligence,
  },
  insight: {
    uniqueIdentifier: 'insight',
    name: 'Intuição',
    description: '',
    attribute: attributes.wisdom,
  },
  intimidation: {
    uniqueIdentifier: 'intimidation',
    name: 'Intimidação',
    description: '',
    attribute: attributes.charisma,
  },
  investigation: {
    uniqueIdentifier: 'investigation',
    name: 'Investigação',
    description: '',
    attribute: attributes.intelligence,
  },
  medicine: {
    uniqueIdentifier: 'medicine',
    name: 'Medicina',
    description: '',
    attribute: attributes.wisdom,
  },
  nature: {
    uniqueIdentifier: 'nature',
    name: 'Natureza',
    description: '',
    attribute: attributes.intelligence,
  },
  perception: {
    uniqueIdentifier: 'perception',
    name: 'Percepção',
    description: '',
    attribute: attributes.wisdom,
  },
  performance: {
    uniqueIdentifier: 'performance',
    name: 'Performance',
    description: '',
    attribute: attributes.charisma,
  },
  persuasion: {
    uniqueIdentifier: 'persuasion',
    name: 'Persuasão',
    description: '',
    attribute: attributes.charisma,
  },
  religion: {
    uniqueIdentifier: 'religion',
    name: 'Religião',
    description: '',
    attribute: attributes.intelligence,
  },
  sleightOfHand: {
    uniqueIdentifier: 'sleightOfHand',
    name: 'Prestidigitação',
    description: '',
    attribute: attributes.dexterity,
  },
  stealth: {
    uniqueIdentifier: 'stealth',
    name: 'Furtividade',
    description: '',
    attribute: attributes.dexterity,
  },
  survival: {
    uniqueIdentifier: 'survival',
    name: 'Sobrevivência',
    description: '',
    attribute: attributes.wisdom,
  },
} as const satisfies Record<string, SkillModel>;
