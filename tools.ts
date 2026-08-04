import { EquipmentModel } from './equipments';
import { AttributeModel, attributes } from './attributes';

export interface ToolModel extends EquipmentModel {
  readonly type: 'tool';
  readonly attribute: AttributeModel;
  readonly utilize: string;
  readonly craft: string;
  readonly variants: string[];
}

export const tools = {
  alchemistSupplies: {
    uniqueIdentifier: 'alchemistSupplies',
    type: 'tool',
    name: 'Suprimentos de Alquimista',
    description: '',
    attribute: attributes.intelligence,
    utilize: 'Identificar uma substância (CD 15) ou acender um fogo (CD 15)',
    craft:
      'Ácido, bolsa para componentes, fogo alquímico, óleo, papel, perfume',
    variants: [],
  },

  brewerSupplies: {
    uniqueIdentifier: 'brewerSupplies',
    type: 'tool',
    name: 'Suprimentos de Cervejeiro',
    description: '',
    attribute: attributes.intelligence,
    utilize: 'Detectar bebida envenenada (CD 15) ou identificar álcool (CD 10)',
    craft: 'Antitoxina',
    variants: [],
  },

  calligrapherSupplies: {
    uniqueIdentifier: 'calligrapherSupplies',
    type: 'tool',
    name: 'Suprimentos de Calígrafo',
    description: '',
    attribute: attributes.dexterity,
    utilize:
      'Escrever textos com floreados impressionantes que protegem contra falsificação (CD 15)',
    craft: 'Tinta, pergaminho de magia',
    variants: [],
  },

  carpenterTools: {
    uniqueIdentifier: 'carpenterTools',
    type: 'tool',
    name: 'Ferramentas de Carpinteiro',
    description: '',
    attribute: attributes.strength,
    utilize: 'Selar ou abrir uma porta ou recipiente (CD 20)',
    craft:
      'Aríete portátil, barril, bastão, baú, clava, clava grande, escada, haste, tocha',
    variants: [],
  },

  cartographerTools: {
    uniqueIdentifier: 'cartographerTools',
    type: 'tool',
    name: 'Ferramentas de Cartógrafo',
    description: '',
    attribute: attributes.wisdom,
    utilize: 'Esboçar um mapa de uma área pequena (CD 15)',
    craft: 'Mapa',
    variants: [],
  },

  cobblerTools: {
    uniqueIdentifier: 'cobblerTools',
    type: 'tool',
    name: 'Ferramentas de Sapateiro',
    description: '',
    attribute: attributes.dexterity,
    utilize:
      'Modificar calçados para conceder vantagem no próximo teste de Destreza (Acrobacia) (CD 10)',
    craft: 'Kit de alpinista',
    variants: [],
  },

  cookUtensils: {
    uniqueIdentifier: 'cookUtensils',
    type: 'tool',
    name: 'Utensílios de Cozinheiro',
    description: '',
    attribute: attributes.wisdom,
    utilize:
      'Melhorar o sabor de comidas (CD 10) ou detectar alimentos estragados ou envenenados (CD 15)',
    craft: 'Rações',
    variants: [],
  },

  glassblowerTools: {
    uniqueIdentifier: 'glassblowerTools',
    type: 'tool',
    name: 'Ferramentas de Soprador de Vidro',
    description: '',
    attribute: attributes.intelligence,
    utilize:
      'Saber o que um objeto de vidro contém nas últimas 24 horas (CD 15)',
    craft: 'Frasco, garrafa de vidro, luneta, lupa',
    variants: [],
  },

  jewelerTools: {
    uniqueIdentifier: 'jewelerTools',
    type: 'tool',
    name: 'Ferramentas de Joalheiro',
    description: '',
    attribute: attributes.intelligence,
    utilize: 'Discernir o valor de uma gema (CD 15)',
    craft: 'Foco arcano, símbolo sagrado',
    variants: [],
  },

  leatherworkerTools: {
    uniqueIdentifier: 'leatherworkerTools',
    type: 'tool',
    name: 'Ferramentas de Coureiro',
    description: '',
    attribute: attributes.dexterity,
    utilize: 'Adicionar um padrão a um item de couro (CD 10)',
    craft:
      'Aljava, armadura de couro, armadura de couro batido, bolsa, cantil, chicote, estojo para virotes de besta, estojo para mapa ou pergaminho, funda, gibão de peles, mochila, pergaminho',
    variants: [],
  },

  masonTools: {
    uniqueIdentifier: 'masonTools',
    type: 'tool',
    name: 'Ferramentas de Pedreiro',
    description: '',
    attribute: attributes.strength,
    utilize: 'Esculpir um símbolo ou fazer um buraco em uma pedra (CD 10)',
    craft: 'Roldana e polias',
    variants: [],
  },

  painterSupplies: {
    uniqueIdentifier: 'painterSupplies',
    type: 'tool',
    name: 'Suprimentos de Pintor',
    description: '',
    attribute: attributes.wisdom,
    utilize: 'Pintar uma imagem reconhecível de algo que você já viu (CD 10)',
    craft: 'Foco druídico, símbolo sagrado',
    variants: [],
  },

  potterTools: {
    uniqueIdentifier: 'potterTools',
    type: 'tool',
    name: 'Ferramentas de Oleiro',
    description: '',
    attribute: attributes.intelligence,
    utilize:
      'Saber o que um objeto de cerâmica contém nas últimas 24 horas (CD 15)',
    craft: 'Jarro, lamparina',
    variants: [],
  },

  smithTools: {
    uniqueIdentifier: 'smithTools',
    type: 'tool',
    name: 'Ferramentas de Ferreiro',
    description: '',
    attribute: attributes.strength,
    utilize: 'Arrombar uma porta ou um recipiente (CD 20)',
    craft:
      'Armaduras médias (exceto gibão de peles), armaduras pesadas, arpéu, balas de arma de fogo, balas de funda, balde, corrente, esferas de metal, estacas de ferro, estribos, munição de funda, panela de ferro, pé de cabra, qualquer arma de combate corpo a corpo (exceto bastão, clava, clava grande e chicote)',
    variants: [],
  },

  tinkerTools: {
    uniqueIdentifier: 'tinkerTools',
    type: 'tool',
    name: 'Ferramentas de Funileiro',
    description: '',
    attribute: attributes.dexterity,
    utilize:
      'Montar um item minúsculo feito de sucata, que se desfaz em 1 minuto (CD 20)',
    craft:
      'Algemas, apito sinalizador, armadilha de caça, caixa para fogo, espelho, fechadura, frasco, lanterna coberta, lanterna de foco, mosquete, pá, pistola, sino',
    variants: [],
  },

  weaverTools: {
    uniqueIdentifier: 'weaverTools',
    type: 'tool',
    name: 'Ferramentas de Tecelão',
    description: '',
    attribute: attributes.dexterity,
    utilize:
      'Remendar uma roupa rasgada (CD 10) ou costurar um padrão Minúsculo (CD 10)',
    craft:
      'Armadura acolchoada, cesto, cobertor, corda, fio, rede, roupas finas, saca, saco de dormir, tenda, traje de viajante, túnica',
    variants: [],
  },

  woodcarverTools: {
    uniqueIdentifier: 'woodcarverTools',
    type: 'tool',
    name: 'Ferramentas de Entalhador',
    description: '',
    attribute: attributes.dexterity,
    utilize: 'Entalhar um padrão em madeira (CD 10)',
    craft:
      'Agulhas, armas de combate à distância (exceto funda, mosquete e pistola), bastão, caneta-tinteiro, clava, clava grande, flechas, foco arcano, foco druídico, virotes',
    variants: [],
  },

  disguiseKit: {
    uniqueIdentifier: 'disguiseKit',
    type: 'tool',
    name: 'Kit de Disfarce',
    description: '',
    attribute: attributes.charisma,
    utilize: 'Aplicar maquiagem (CD 10)',
    craft: 'Fantasia',
    variants: [],
  },

  forgeryKit: {
    uniqueIdentifier: 'forgeryKit',
    type: 'tool',
    name: 'Kit de Falsificação',
    description: '',
    attribute: attributes.dexterity,
    utilize:
      'Imitar 10 ou menos palavras da caligrafia de outra pessoa (CD 15) ou duplicar um selo de cera (CD 20)',
    craft: '',
    variants: [],
  },

  gamingSet: {
    uniqueIdentifier: 'gamingSet',
    type: 'tool',
    name: 'Kit de Jogos (baralho, dados, três dragões ou xadrez-do-dragão)',
    description: '',
    attribute: attributes.wisdom,
    utilize:
      'Discernir se alguém está trapaceando (CD 10) ou ganhar o jogo (CD 20)',
    craft: '',
    variants: [
      'Baralho (5 PP)',
      'Dados (1 PP)',
      'Jogo dos três dragões (1 PO)',
      'Xadrez-do-dragão (1 PO)',
    ],
  },

  herbalismKit: {
    uniqueIdentifier: 'herbalismKit',
    type: 'tool',
    name: 'Kit de Herbalismo',
    description: '',
    attribute: attributes.intelligence,
    utilize: 'Identificar uma planta (CD 10)',
    craft: 'Antitoxina, kit de curandeiro, poção de cura, vela',
    variants: [],
  },

  musicalInstrument: {
    uniqueIdentifier: 'musicalInstrument',
    type: 'tool',
    name: 'Instrumento Musical (alaúde, charamela, flauta, flauta de pã, gaita de foles, lira, saltério, tambor, trombeta ou viola)',
    description: '',
    attribute: attributes.charisma,
    utilize: 'Tocar uma canção conhecida (CD 10) ou improvisar uma (CD 15)',
    craft: '',
    variants: [
      'Alaúde (35 PO, 1 kg)',
      'Charamela (2 PO, 500 g)',
      'Flauta (2 PO, 500 g)',
      'Flauta de pã (12 PO, 1 kg)',
      'Gaita de foles (30 PO, 3 kg)',
      'Lira (30 PO, 1 kg)',
      'Saltério (25 PO, 5 kg)',
      'Tambor (6 PO, 1,5 kg)',
      'Trombeta (3 PO, 1 kg)',
      'Viola (30 PO, 500 g)',
    ],
  },

  navigatorTools: {
    uniqueIdentifier: 'navigatorTools',
    type: 'tool',
    name: 'Ferramentas de Navegador',
    description: '',
    attribute: attributes.wisdom,
    utilize:
      'Traçar uma rota (CD 10) ou determinar a posição consultando as estrelas (CD 15)',
    craft: '',
    variants: [],
  },

  poisonerKit: {
    uniqueIdentifier: 'poisonerKit',
    type: 'tool',
    name: 'Kit de Venefício',
    description: '',
    attribute: attributes.intelligence,
    utilize: 'Detectar um objeto envenenado (CD 10)',
    craft: 'Veneno básico',
    variants: [],
  },

  thievesTools: {
    uniqueIdentifier: 'thievesTools',
    type: 'tool',
    name: 'Ferramentas de Ladrão',
    description: '',
    attribute: attributes.dexterity,
    utilize: 'Arrombar uma fechadura (CD 15) ou desarmar uma armadilha (CD 15)',
    craft: '',
    variants: [],
  },
} as const satisfies Record<string, ToolModel>;
