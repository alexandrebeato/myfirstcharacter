import { AttributeModel } from './attributes';
import { SkillModel } from './skills';

export interface BackgroundModel {
  readonly uniqueIdentifier: string;
  readonly name: string;
  readonly description: string;
  readonly attributeProficiencies: readonly AttributeModel[];

  // TODO: Implement feat model and uncomment the line below
  // readonly feat: FeatModel;

  readonly skillProficiencies: readonly SkillModel[];

  // TODO: Check if tool proficiencies should be a model or just a string array, and implement it accordingly
  readonly toolProficiencies: readonly string[];

  // TODO: Implement starting equipment model and uncomment the line below
  // readonly startingEquipment: readonly StartingEquipmentModel[];
}
