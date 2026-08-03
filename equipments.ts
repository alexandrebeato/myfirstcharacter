import { DiceModel } from './dices';

interface EquipmentModel {
  readonly uniqueIdentifier: string;
  readonly name: string;
  readonly type: 'weapon' | 'armor' | 'tool' | 'gear';
}

interface WeaponModel extends EquipmentModel {
  readonly type: 'weapon';
  readonly damageDice: DiceModel;
  // TODO: Create a DamageType model
  // readonly damageType: DamageType;
  // TODO: Create a WeaponProperty model
  // readonly properties: readonly WeaponProperty[];
}
