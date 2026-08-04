import { EquipmentModel } from './equipments';

export interface AmmunitionModel extends EquipmentModel {
  readonly type: 'ammunition';
}

export const ammunitions = {
  arrow: {
    uniqueIdentifier: 'arrow',
    type: 'ammunition',
    name: 'Flecha',
    description: '',
  },
  bolt: {
    uniqueIdentifier: 'bolt',
    type: 'ammunition',
    name: 'Virote',
    description: '',
  },
  bulletFirearms: {
    uniqueIdentifier: 'bulletFirearms',
    type: 'ammunition',
    name: 'Bala, arma de fogo',
    description: '',
  },
  bulletSling: {
    uniqueIdentifier: 'bulletSling',
    type: 'ammunition',
    name: 'Bala, funda',
    description: '',
  },
  needle: {
    uniqueIdentifier: 'needle',
    type: 'ammunition',
    name: 'Agulha',
    description: '',
  },
} as const satisfies Record<string, AmmunitionModel>;
