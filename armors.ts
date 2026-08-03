import { EquipmentModel } from './equipments';

interface ArmorClass {
  readonly base?: number;
  readonly usesDexterityModifier: boolean;
  readonly maximumDexterityModifier?: number;
  readonly shieldBonus?: number;
}

export interface ArmorModel extends EquipmentModel {
  readonly type: 'armor';
  readonly armorType: 'light' | 'medium' | 'heavy' | 'shield';
  readonly armorClass: ArmorClass;
  readonly strengthRequirement?: number;
  readonly stealthDisadvantage: boolean;
}

export const armors = {
  paddedArmor: {
    uniqueIdentifier: 'paddedArmor',
    type: 'armor',
    name: 'Armadura acolchoada',
    description: '',
    armorType: 'light',
    armorClass: {
      base: 11,
      usesDexterityModifier: true,
    },
    stealthDisadvantage: true,
  },
  leatherArmor: {
    uniqueIdentifier: 'leatherArmor',
    type: 'armor',
    name: 'Armadura de couro',
    description: '',
    armorType: 'light',
    armorClass: {
      base: 11,
      usesDexterityModifier: true,
    },
    stealthDisadvantage: false,
  },
  studdedLeatherArmor: {
    uniqueIdentifier: 'studdedLeatherArmor',
    type: 'armor',
    name: 'Armadura de couro batido',
    description: '',
    armorType: 'light',
    armorClass: {
      base: 12,
      usesDexterityModifier: true,
    },
    stealthDisadvantage: false,
  },
  hideArmor: {
    uniqueIdentifier: 'hideArmor',
    type: 'armor',
    name: 'Gibão de peles',
    description: '',
    armorType: 'medium',
    armorClass: {
      base: 12,
      usesDexterityModifier: true,
      maximumDexterityModifier: 2,
    },
    stealthDisadvantage: false,
  },
  chainShirt: {
    uniqueIdentifier: 'chainShirt',
    type: 'armor',
    name: 'Cota de malha parcial',
    description: '',
    armorType: 'medium',
    armorClass: {
      base: 13,
      usesDexterityModifier: true,
      maximumDexterityModifier: 2,
    },
    stealthDisadvantage: false,
  },
  scaleMail: {
    uniqueIdentifier: 'scaleMail',
    type: 'armor',
    name: 'Lórica de escamas',
    description: '',
    armorType: 'medium',
    armorClass: {
      base: 14,
      usesDexterityModifier: true,
      maximumDexterityModifier: 2,
    },
    stealthDisadvantage: true,
  },
  breastplate: {
    uniqueIdentifier: 'breastplate',
    type: 'armor',
    name: 'Couraça peitoral',
    description: '',
    armorType: 'medium',
    armorClass: {
      base: 14,
      usesDexterityModifier: true,
      maximumDexterityModifier: 2,
    },
    stealthDisadvantage: false,
  },
  halfPlateArmor: {
    uniqueIdentifier: 'halfPlateArmor',
    type: 'armor',
    name: 'Armadura de placas parcial',
    description: '',
    armorType: 'medium',
    armorClass: {
      base: 15,
      usesDexterityModifier: true,
      maximumDexterityModifier: 2,
    },
    stealthDisadvantage: true,
  },
  ringMail: {
    uniqueIdentifier: 'ringMail',
    type: 'armor',
    name: 'Cota de anéis',
    description: '',
    armorType: 'heavy',
    armorClass: {
      base: 14,
      usesDexterityModifier: false,
    },
    stealthDisadvantage: true,
  },
  chainMail: {
    uniqueIdentifier: 'chainMail',
    type: 'armor',
    name: 'Cota de malha',
    description: '',
    armorType: 'heavy',
    armorClass: {
      base: 16,
      usesDexterityModifier: false,
    },
    strengthRequirement: 13,
    stealthDisadvantage: true,
  },
  splintArmor: {
    uniqueIdentifier: 'splintArmor',
    type: 'armor',
    name: 'Cota de talas',
    description: '',
    armorType: 'heavy',
    armorClass: {
      base: 17,
      usesDexterityModifier: false,
    },
    strengthRequirement: 15,
    stealthDisadvantage: true,
  },
  plateArmor: {
    uniqueIdentifier: 'plateArmor',
    type: 'armor',
    name: 'Armadura de placas',
    description: '',
    armorType: 'heavy',
    armorClass: {
      base: 18,
      usesDexterityModifier: false,
    },
    strengthRequirement: 15,
    stealthDisadvantage: true,
  },
  shield: {
    uniqueIdentifier: 'shield',
    type: 'armor',
    name: 'Escudo',
    description: '',
    armorType: 'shield',
    armorClass: {
      usesDexterityModifier: false,
      shieldBonus: 2,
    },
    stealthDisadvantage: false,
  },
} as const satisfies Record<string, ArmorModel>;
