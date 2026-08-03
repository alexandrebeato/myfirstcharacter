import { AttributeModel } from './attributes';
import { SkillModel } from './skills';
import { ToolModel } from './tools';
import { StartingEquipmentOptionModel } from './starting-equipment-option';

export interface BackgroundModel {
  readonly uniqueIdentifier: string;
  readonly name: string;
  readonly description: string;
  readonly attributeProficiencies: readonly AttributeModel[];

  // TODO: Implement feat model and uncomment the line below
  // readonly feat: FeatModel;

  readonly skillProficiencies: readonly SkillModel[];
  readonly toolProficiencies: readonly ToolModel[];
  readonly startingEquipmentOptions: readonly StartingEquipmentOptionModel[];
}
