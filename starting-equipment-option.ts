import { ToolModel } from './tools';
import { WeaponModel } from './weapons';
import { ArmorModel } from './armors';
import { GearModel } from './gears';
import { CoinModel } from './coins';
import { AmmunitionModel } from './ammunitions';

export interface StartingEquipmentOptionModel {
  startingEquipment: readonly StartingEquipmentModel[];
}

interface StartingEquipmentModel {
  quantity: number;
  equipment:
    | WeaponModel
    | AmmunitionModel
    | ArmorModel
    | ToolModel
    | GearModel
    | CoinModel;
}
