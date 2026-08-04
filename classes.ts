import { AttributeModel } from './attributes';
import { DiceModel } from './dices';
import { SkillModel } from './skills';
import { ArmorTrainingModel } from './armor-training';
import { WeaponProficiencyModel } from './weapon-proficiencies';
import { StartingEquipmentOptionModel } from './starting-equipment-option';

export interface ClassModel {
  readonly uniqueIdentifier: string;
  readonly name: string;
  readonly description: string;
  readonly primaryAttributes: readonly AttributeModel[];
  readonly hitPointDice: DiceModel;
  readonly savingThrowProficiencies: readonly AttributeModel[];
  readonly skillProficienciesOptions: readonly SkillModel[];
  readonly howManySkillProficienciesCanChoose: number;
  readonly weaponProficiencies: readonly WeaponProficiencyModel[];
  readonly armorTraining: readonly ArmorTrainingModel[];
  readonly defaultAbilityScore: {
    attribute: AttributeModel;
    score: number;
  };
  readonly startingEquipmentOptions: readonly StartingEquipmentOptionModel[];
}
