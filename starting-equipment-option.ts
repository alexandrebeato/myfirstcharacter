import { ToolModel } from './tools';
import { WeaponModel } from './weapons';
import { ArmorModel } from './armors';
import { GearModel } from './gears';

export interface StartingEquipmentOptionModel {
  startingEquipment: readonly StartingEquipmentModel[];
}

interface StartingEquipmentModel {
  quantity: number;
  equipment: WeaponModel | ArmorModel | ToolModel | GearModel;
}
