export interface WeaponProficiencyModel {
  readonly uniqueIdentifier: string;
  readonly name: string;
  readonly description: string;
}

export const weaponProficiencies = {
  simpleWeapons: {
    uniqueIdentifier: 'simpleWeapons',
    name: 'Armas Simples',
    description: '',
  },
  martialWeapons: {
    uniqueIdentifier: 'martialWeapons',
    name: 'Armas Marciais',
    description: '',
  },
} as const satisfies Record<string, WeaponProficiencyModel>;
