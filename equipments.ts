export interface EquipmentModel {
  readonly uniqueIdentifier: string;
  readonly name: string;
  readonly description: string;
  readonly type: 'weapon' | 'ammunition' | 'armor' | 'tool' | 'gear' | 'coin';
}
