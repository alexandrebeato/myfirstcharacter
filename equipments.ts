import { DiceModel } from './dices';

export interface EquipmentModel {
  readonly uniqueIdentifier: string;
  readonly name: string;
  readonly description: string;
  readonly type: 'weapon' | 'armor' | 'tool' | 'gear';
}
