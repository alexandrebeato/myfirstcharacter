import { AttributeModel, attributes } from './attributes';
import { SkillModel, skills } from './skills';
import { ToolModel, tools } from './tools';
import { StartingEquipmentOptionModel } from './starting-equipment-option';
import { gears } from './gears';
import { coins } from './coins';
import { weapons } from './weapons';
import { ammunitions } from './ammunitions';

export interface BackgroundModel {
  readonly uniqueIdentifier: string;
  readonly name: string;
  readonly description: string;
  readonly abilityScores: readonly AttributeModel[];

  // readonly feat: FeatModel; // TODO: Implement feat model and uncomment the line below

  readonly skillProficiencies: readonly SkillModel[];
  readonly toolProficiencies: readonly ToolModel[];
  readonly startingEquipmentOptions: readonly StartingEquipmentOptionModel[];
}

// Livro do Jogador: página 178
export const backgrounds = {
  acolyte: {
    uniqueIdentifier: 'acolyte',
    name: 'Acólito',
    description:
      'Você se dedicou inteiramente a servir em um templo, seja localizado em uma vila ou isolado em um bosque sagrado. ' +
      'Lá, você realizou ritos em honra a um deus ou panteão. Você serviu sob o comando de um sacerdote e estudou religião. ' +
      'Graças à instrução do seu sacerdote e à sua própria devoção, você também aprendeu a canalizar um mínimo de poder divino ' +
      'a serviço do seu local de culto e das pessoas que ali rezavam.',
    abilityScores: [
      attributes.intelligence,
      attributes.wisdom,
      attributes.charisma,
    ],
    skillProficiencies: [skills.insight, skills.religion],
    toolProficiencies: [tools.calligrapherSupplies],
    startingEquipmentOptions: [
      {
        startingEquipment: [
          {
            quantity: 1,
            equipment: tools.calligrapherSupplies,
          },
          {
            quantity: 1,
            equipment: gears.book,
          },
          {
            quantity: 1,
            equipment: gears.holySymbol,
          },
          {
            quantity: 10,
            equipment: gears.parchment,
          },
          {
            quantity: 1,
            equipment: gears.robe,
          },
          {
            quantity: 8,
            equipment: coins.goldPieces,
          },
        ],
      },
      {
        startingEquipment: [
          {
            quantity: 50,
            equipment: coins.goldPieces,
          },
        ],
      },
    ],
  },

  artisan: {
    uniqueIdentifier: 'artisan',
    name: 'Artesão',
    description:
      'Assim que teve forças para carregar um balde, você começou a esfregar pisos e balcões na oficina de um artesão por algumas moedas de cobre por dia. ' +
      'Quando chegou na idade para ser aprendiz, você aprendeu a criar seus próprios itens básicos e também a convencer clientes exigentes. ' +
      'Seu ofício também lhe concedeu um olhar aguçado para detalhes.',
    abilityScores: [
      attributes.strength,
      attributes.dexterity,
      attributes.intelligence,
    ],
    skillProficiencies: [skills.investigation, skills.persuasion],
    toolProficiencies: [tools.smithTools], // TODO: This should be to choose an artisan's tool, but for now it is a generic smith's tool
    startingEquipmentOptions: [
      {
        startingEquipment: [
          {
            quantity: 2,
            equipment: gears.pouch,
          },
          {
            quantity: 1,
            equipment: tools.smithTools, // TODO: This should be to choose an artisan's tool, but for now it is a generic smith's tool
          },
          {
            quantity: 1,
            equipment: gears.travelersClothes,
          },
          {
            quantity: 32,
            equipment: coins.goldPieces,
          },
        ],
      },
      {
        startingEquipment: [
          {
            quantity: 50,
            equipment: coins.goldPieces,
          },
        ],
      },
    ],
  },

  charlatan: {
    uniqueIdentifier: 'charlatan',
    name: 'Charlatão',
    description:
      'Quando você tinha idade suficiente para pedir uma cerveja, logo arranjou um banco favorito em cada taverna na região onde nasceu. ' +
      'Ao pular de bar em bar, você aprendeu a identificar pobres coitados em busca de uma ou duas mentiras reconfortantes. ' +
      'Talvez uma poção de mentira ou registros de ancestralidade falsificados.',
    abilityScores: [
      attributes.dexterity,
      attributes.constitution,
      attributes.charisma,
    ],
    skillProficiencies: [skills.deception, skills.sleightOfHand],
    toolProficiencies: [tools.forgeryKit],
    startingEquipmentOptions: [
      {
        startingEquipment: [
          {
            quantity: 1,
            equipment: tools.forgeryKit,
          },
          {
            quantity: 1,
            equipment: gears.costume,
          },
          {
            quantity: 1,
            equipment: gears.fineClothes,
          },
          {
            quantity: 15,
            equipment: coins.goldPieces,
          },
        ],
      },
      {
        startingEquipment: [
          {
            quantity: 50,
            equipment: coins.goldPieces,
          },
        ],
      },
    ],
  },

  criminal: {
    uniqueIdentifier: 'criminal',
    name: 'Criminoso',
    description:
      'Você ganhava a vida em becos escuros, afanando bolsas ou assaltando lojas. ' +
      'Talvez você fizesse parte de uma pequena gangue de infratores com a mesma opinião e que se protegiam mutuamente. ' +
      'Ou talvez você fosse um lobo solitário, lutando contra a guilda de ladrões local e outros criminosos mais temíveis.',
    abilityScores: [
      attributes.dexterity,
      attributes.constitution,
      attributes.intelligence,
    ],
    skillProficiencies: [skills.sleightOfHand, skills.stealth],
    toolProficiencies: [tools.thievesTools],
    startingEquipmentOptions: [
      {
        startingEquipment: [
          {
            quantity: 2,
            equipment: weapons.dagger,
          },
          {
            quantity: 1,
            equipment: tools.thievesTools,
          },
          {
            quantity: 1,
            equipment: gears.crowbar,
          },
          {
            quantity: 2,
            equipment: gears.pouch,
          },
          {
            quantity: 1,
            equipment: gears.travelersClothes,
          },
          {
            quantity: 16,
            equipment: coins.goldPieces,
          },
        ],
      },
      {
        startingEquipment: [
          {
            quantity: 50,
            equipment: coins.goldPieces,
          },
        ],
      },
    ],
  },

  entertainer: {
    uniqueIdentifier: 'entertainer',
    name: 'Artista',
    description:
      'Você passou muito da sua juventude vagando em feiras e parques, fazendo trabalhos estranhos para músicos e acrobatas em troca de aulas. ' +
      'Você pode ter aprendido a andar na corda bamba, a tocar um alaúde em um estilo distinto ou a recitar poesia com dicção impecável. ' +
      'Até hoje, você ama aplausos e não consegue ficar longe dos palcos.',
    abilityScores: [
      attributes.strength,
      attributes.dexterity,
      attributes.charisma,
    ],
    skillProficiencies: [skills.acrobatics, skills.performance],
    toolProficiencies: [tools.musicalInstrument],
    startingEquipmentOptions: [
      {
        startingEquipment: [
          {
            quantity: 1,
            equipment: tools.musicalInstrument,
          },
          {
            quantity: 2,
            equipment: gears.costume,
          },
          {
            quantity: 1,
            equipment: gears.mirror,
          },
          {
            quantity: 1,
            equipment: gears.perfume,
          },
          {
            quantity: 1,
            equipment: gears.travelersClothes,
          },
          {
            quantity: 11,
            equipment: coins.goldPieces,
          },
        ],
      },
      {
        startingEquipment: [
          {
            quantity: 50,
            equipment: coins.goldPieces,
          },
        ],
      },
    ],
  },

  farmer: {
    uniqueIdentifier: 'farmer',
    name: 'Fazendeiro',
    description:
      'Você cresceu no interior. Anos cuidando de animais e cultivando a terra recompensaram você com paciência e boa saúde. ' +
      'Você tem um grande apreço pela generosidade da natureza e respeita a fúria dela.',
    abilityScores: [
      attributes.strength,
      attributes.constitution,
      attributes.wisdom,
    ],
    skillProficiencies: [skills.animalHandling, skills.nature],
    toolProficiencies: [tools.carpenterTools],
    startingEquipmentOptions: [
      {
        startingEquipment: [
          {
            quantity: 1,
            equipment: weapons.sickle,
          },
          {
            quantity: 1,
            equipment: tools.carpenterTools,
          },
          {
            quantity: 1,
            equipment: gears.healersKit,
          },
          {
            quantity: 1,
            equipment: gears.ironPot,
          },
          {
            quantity: 1,
            equipment: gears.shovel,
          },
          {
            quantity: 1,
            equipment: gears.travelersClothes,
          },
          {
            quantity: 30,
            equipment: coins.goldPieces,
          },
        ],
      },
      {
        startingEquipment: [
          {
            quantity: 50,
            equipment: coins.goldPieces,
          },
        ],
      },
    ],
  },

  guard: {
    uniqueIdentifier: 'guard',
    name: 'Guarda',
    description:
      'Seus pés doem quando você se lembra das inúmeras horas que passou em seu posto na torre. ' +
      'Você recebeu treinamento para vigiar a muralha: tanto o lado de fora, à procura de saqueadores vindos da floresta próxima, ' +
      'quanto o lado de dentro, detectando punguistas e arruaceiros.',
    abilityScores: [
      attributes.strength,
      attributes.intelligence,
      attributes.wisdom,
    ],
    skillProficiencies: [skills.athletics, skills.perception],
    toolProficiencies: [tools.gamingSet],
    startingEquipmentOptions: [
      {
        startingEquipment: [
          {
            quantity: 1,
            equipment: weapons.spear,
          },
          {
            quantity: 1,
            equipment: weapons.lightCrossbow,
          },
          {
            quantity: 20,
            equipment: ammunitions.bolt,
          },
          {
            quantity: 1,
            equipment: tools.gamingSet,
          },
          {
            quantity: 1,
            equipment: gears.hoodedLantern,
          },
          {
            quantity: 1,
            equipment: gears.manacles,
          },
          {
            quantity: 1,
            equipment: gears.quiver,
          },
          {
            quantity: 1,
            equipment: gears.travelersClothes,
          },
          {
            quantity: 12,
            equipment: coins.goldPieces,
          },
        ],
      },
      {
        startingEquipment: [
          {
            quantity: 50,
            equipment: coins.goldPieces,
          },
        ],
      },
    ],
  },

  guide: {
    uniqueIdentifier: 'guide',
    name: 'Guia',
    description:
      'Você amadureceu ao ar livre, longe de terras colonizadas. Seu lar era onde quer que você colocasse seu saco de dormir. ' +
      'A natureza selvagem abriga muitas maravilhas: monstros estranhos, florestas e riachos intocados, ruínas de grandes salões que já foram habitados por gigantes, ' +
      'e você aprendeu a se defender enquanto explorava tudo isso. De tempos em tempos, você guiava sacerdotes amigos da natureza que lhe ensinavam os fundamentos ' +
      'da canalização da magia natural.',
    abilityScores: [
      attributes.dexterity,
      attributes.constitution,
      attributes.wisdom,
    ],
    skillProficiencies: [skills.stealth, skills.survival],
    toolProficiencies: [tools.cartographerTools],
    startingEquipmentOptions: [
      {
        startingEquipment: [
          {
            quantity: 1,
            equipment: weapons.shortbow,
          },
          {
            quantity: 20,
            equipment: ammunitions.arrow,
          },
          {
            quantity: 1,
            equipment: tools.cartographerTools,
          },
          {
            quantity: 1,
            equipment: gears.bedroll,
          },
          {
            quantity: 1,
            equipment: gears.quiver,
          },
          {
            quantity: 1,
            equipment: gears.tent,
          },
          {
            quantity: 1,
            equipment: gears.travelersClothes,
          },
          {
            quantity: 3,
            equipment: coins.goldPieces,
          },
        ],
      },
      {
        startingEquipment: [
          {
            quantity: 50,
            equipment: coins.goldPieces,
          },
        ],
      },
    ],
  },

  hermit: {
    uniqueIdentifier: 'hermit',
    name: 'Eremita',
    description:
      'Você passou sua infância em isolamento numa cabana ou mosteiro localizado bem além dos arredores do assentamento mais próximo. ' +
      'Naquela época, seus únicos companheiros eram as criaturas da floresta e aqueles que ocasionalmente lhe visitavam para trazer suprimentos e notícias do mundo exterior. ' +
      'A solidão permitiu que você passasse muitas horas refletindo sobre os mistérios da criação.',
    abilityScores: [
      attributes.constitution,
      attributes.wisdom,
      attributes.charisma,
    ],
    skillProficiencies: [skills.medicine, skills.religion],
    toolProficiencies: [tools.herbalismKit],
    startingEquipmentOptions: [
      {
        startingEquipment: [
          {
            quantity: 1,
            equipment: weapons.quarterstaff,
          },
          {
            quantity: 1,
            equipment: tools.herbalismKit,
          },
          {
            quantity: 1,
            equipment: gears.bedroll,
          },
          {
            quantity: 1,
            equipment: gears.book,
          },
          {
            quantity: 1,
            equipment: gears.lamp,
          },
          {
            quantity: 3,
            equipment: gears.oil,
          },
          {
            quantity: 1,
            equipment: gears.travelersClothes,
          },
          {
            quantity: 16,
            equipment: coins.goldPieces,
          },
        ],
      },
      {
        startingEquipment: [
          {
            quantity: 50,
            equipment: coins.goldPieces,
          },
        ],
      },
    ],
  },

  merchant: {
    uniqueIdentifier: 'merchant',
    name: 'Comerciante',
    description:
      'Você era aprendiz de um comerciante, mestre de caravana ou lojista, aprendendo os fundamentos do comércio. ' +
      'Você viajou bastante e ganhou a vida comprando e vendendo as matérias-primas de que os artesãos precisam para praticar seu ofício; ' +
      'ou as obras acabadas desses artesãos. Você pode ter transportado mercadorias de um lugar para outro (por navio, carroção ou caravana) ' +
      'ou comprado de comerciantes itinerantes e vendido em sua própria loja.',
    abilityScores: [
      attributes.constitution,
      attributes.intelligence,
      attributes.charisma,
    ],
    skillProficiencies: [skills.animalHandling, skills.persuasion],
    toolProficiencies: [tools.navigatorTools],
    startingEquipmentOptions: [
      {
        startingEquipment: [
          {
            quantity: 1,
            equipment: tools.navigatorTools,
          },
          {
            quantity: 2,
            equipment: gears.pouch,
          },
          {
            quantity: 1,
            equipment: gears.travelersClothes,
          },
          {
            quantity: 22,
            equipment: coins.goldPieces,
          },
        ],
      },
      {
        startingEquipment: [
          {
            quantity: 50,
            equipment: coins.goldPieces,
          },
        ],
      },
    ],
  },

  noble: {
    uniqueIdentifier: 'noble',
    name: 'Nobre',
    description:
      'Você cresceu em um castelo, em meio à riqueza, poder e privilégios. Sua família de pequenos aristocratas garantiu que você recebesse uma educação de primeira classe, ' +
      'que você apreciava, mas nem sempre. Você aprendeu muito sobre liderança em seu tempo no castelo, especialmente as muitas horas que passou observando sua família na corte.',
    abilityScores: [
      attributes.strength,
      attributes.intelligence,
      attributes.charisma,
    ],
    skillProficiencies: [skills.history, skills.persuasion],
    toolProficiencies: [tools.gamingSet],
    startingEquipmentOptions: [
      {
        startingEquipment: [
          {
            quantity: 1,
            equipment: tools.gamingSet,
          },
          {
            quantity: 1,
            equipment: gears.fineClothes,
          },
          {
            quantity: 1,
            equipment: gears.perfume,
          },
          {
            quantity: 29,
            equipment: coins.goldPieces,
          },
        ],
      },
      {
        startingEquipment: [
          {
            quantity: 50,
            equipment: coins.goldPieces,
          },
        ],
      },
    ],
  },

  sage: {
    uniqueIdentifier: 'sage',
    name: 'Sábio',
    description:
      'Você passou seus anos de formação viajando entre mansões e mosteiros, realizando vários trabalhos e serviços estranhos em troca de acesso às bibliotecas desses locais. ' +
      'Apesar de ter passado muitas noites estudando livros e pergaminhos, aprendendo os conhecimentos do multiverso — inclusive os rudimentos da magia — sua mente ainda anseia por mais.',
    abilityScores: [
      attributes.constitution,
      attributes.intelligence,
      attributes.wisdom,
    ],
    skillProficiencies: [skills.arcana, skills.history],
    toolProficiencies: [tools.calligrapherSupplies],
    startingEquipmentOptions: [
      {
        startingEquipment: [
          {
            quantity: 1,
            equipment: weapons.quarterstaff,
          },
          {
            quantity: 1,
            equipment: tools.calligrapherSupplies,
          },
          {
            quantity: 1,
            equipment: gears.book,
          },
          {
            quantity: 8,
            equipment: gears.parchment,
          },
          {
            quantity: 1,
            equipment: gears.robe,
          },
          {
            quantity: 8,
            equipment: coins.goldPieces,
          },
        ],
      },
      {
        startingEquipment: [
          {
            quantity: 50,
            equipment: coins.goldPieces,
          },
        ],
      },
    ],
  },

  sailor: {
    uniqueIdentifier: 'sailor',
    name: 'Marinheiro',
    description:
      'Você viveu em navios, com o vento em suas costas e o convés balançando sob seus pés. ' +
      'Você já se sentou em bancos de bar em mais portos do que consegue se lembrar, enfrentou tempestades violentas e trocou histórias com pessoas que vivem sob as ondas.',
    abilityScores: [
      attributes.strength,
      attributes.dexterity,
      attributes.wisdom,
    ],
    skillProficiencies: [skills.acrobatics, skills.perception],
    toolProficiencies: [tools.navigatorTools],
    startingEquipmentOptions: [
      {
        startingEquipment: [
          {
            quantity: 1,
            equipment: weapons.dagger,
          },
          {
            quantity: 1,
            equipment: tools.navigatorTools,
          },
          {
            quantity: 1,
            equipment: gears.rope,
          },
          {
            quantity: 1,
            equipment: gears.travelersClothes,
          },
          {
            quantity: 20,
            equipment: coins.goldPieces,
          },
        ],
      },
      {
        startingEquipment: [
          {
            quantity: 50,
            equipment: coins.goldPieces,
          },
        ],
      },
    ],
  },

  scribe: {
    uniqueIdentifier: 'scribe',
    name: 'Escriba',
    description:
      'Você passou seus anos de formação em um scriptorium, um monastério dedicado à preservação do conhecimento ou em uma agência governamental, ' +
      'onde aprendeu a escrever com uma boa caligrafia e a produzir textos finamente escritos. Talvez você tenha redigido documentos governamentais ou copiado tomos de literatura. ' +
      'Você pode ter alguma perícia em escrita de poesia, narrativa ou pesquisa acadêmica. Acima de tudo, você presta muita atenção aos detalhes, ' +
      'o que te ajuda a evitar erros nos documentos que copia e cria.',
    abilityScores: [
      attributes.dexterity,
      attributes.intelligence,
      attributes.wisdom,
    ],
    skillProficiencies: [skills.investigation, skills.perception],
    toolProficiencies: [tools.calligrapherSupplies],
    startingEquipmentOptions: [
      {
        startingEquipment: [
          {
            quantity: 1,
            equipment: tools.calligrapherSupplies,
          },
          {
            quantity: 1,
            equipment: gears.fineClothes,
          },
          {
            quantity: 1,
            equipment: gears.lamp,
          },
          {
            quantity: 3,
            equipment: gears.oil,
          },
          {
            quantity: 12,
            equipment: gears.parchment,
          },
          {
            quantity: 23,
            equipment: coins.goldPieces,
          },
        ],
      },
      {
        startingEquipment: [
          {
            quantity: 50,
            equipment: coins.goldPieces,
          },
        ],
      },
    ],
  },

  soldier: {
    uniqueIdentifier: 'soldier',
    name: 'Soldado',
    description:
      'Você começou a treinar para a guerra assim que atingiu a idade adulta e tem poucas lembranças preciosas da vida antes das armas. ' +
      'A batalha está no seu sangue. Às vezes, você se pega executando por reflexo os exercícios básicos de luta que aprendeu primeiro. ' +
      'Eventualmente, você colocará esse treinamento em prática no campo de batalha, protegendo o reino por meio da guerra.',
    abilityScores: [
      attributes.strength,
      attributes.dexterity,
      attributes.constitution,
    ],
    skillProficiencies: [skills.athletics, skills.intimidation],
    toolProficiencies: [tools.gamingSet],
    startingEquipmentOptions: [
      {
        startingEquipment: [
          {
            quantity: 1,
            equipment: weapons.spear,
          },
          {
            quantity: 1,
            equipment: weapons.shortbow,
          },
          {
            quantity: 20,
            equipment: ammunitions.arrow,
          },
          {
            quantity: 1,
            equipment: tools.gamingSet,
          },
          {
            quantity: 1,
            equipment: gears.healersKit,
          },
          {
            quantity: 1,
            equipment: gears.quiver,
          },
          {
            quantity: 1,
            equipment: gears.travelersClothes,
          },
          {
            quantity: 14,
            equipment: coins.goldPieces,
          },
        ],
      },
      {
        startingEquipment: [
          {
            quantity: 50,
            equipment: coins.goldPieces,
          },
        ],
      },
    ],
  },

  wayfarer: {
    uniqueIdentifier: 'wayfarer',
    name: 'Viajante',
    description:
      'Você cresceu nas ruas, em meio a outros rejeitados com o mesmo destino, alguns deles amigos e outros rivais. ' +
      'Você dormia onde podia e fazia bicos em troca de comida. Às vezes, quando a fome se tornava insuportável, você recorria ao roubo. ' +
      'Ainda assim, você nunca perdeu seu orgulho e nunca abandonou a esperança. Seu destino ainda não está decidido.',
    abilityScores: [
      attributes.dexterity,
      attributes.wisdom,
      attributes.charisma,
    ],
    skillProficiencies: [skills.insight, skills.stealth],
    toolProficiencies: [tools.thievesTools],
    startingEquipmentOptions: [
      {
        startingEquipment: [
          {
            quantity: 2,
            equipment: weapons.dagger,
          },
          {
            quantity: 1,
            equipment: tools.thievesTools,
          },
          {
            quantity: 1,
            equipment: tools.gamingSet,
          },
          {
            quantity: 1,
            equipment: gears.bedroll,
          },
          {
            quantity: 2,
            equipment: gears.pouch,
          },
          {
            quantity: 1,
            equipment: gears.travelersClothes,
          },
          {
            quantity: 16,
            equipment: coins.goldPieces,
          },
        ],
      },
      {
        startingEquipment: [
          {
            quantity: 50,
            equipment: coins.goldPieces,
          },
        ],
      },
    ],
  },
} as const satisfies Record<string, BackgroundModel>;
