// Textos do produto em português (microcopy centralizado para facilitar ajustes).

export const BRAND = 'PratoFacil';

export const cheers = [
  'Muito bem! Um passo a menos.',
  'Isso aí, você está indo bem.',
  'Perfeito. Respire e siga em frente.',
  'Ficou ótimo. Confie no processo.',
  'Mais um passo concluído. Orgulho de você!',
];

export const finishMessages = [
  'Você cozinhou. Isso é de verdade. 🎉',
  'Prato pronto e feito por você.',
  'Mais uma refeição que você aprendeu a fazer.',
];

export const homeMoods = [
  { id: 'rapido', emoji: '⏱️', label: 'Tenho pouco tempo', hint: 'Até 20 minutos', filter: { time: 20 } },
  { id: 'panela', emoji: '🍲', label: 'Pouca louça', hint: 'Uma panela só', filter: { onePot: 1 } },
  { id: 'facil', emoji: '🌱', label: 'Quero algo bem fácil', hint: 'Para começar sem susto', filter: { difficulty: 'Muito fácil' } },
  { id: 'reconforto', emoji: '🫶', label: 'Quero conforto', hint: 'Jantares que abraçam', filter: { category: 'Jantar' } },
];

export const steps3 = [
  { n: '1', title: 'Escolha um prato', text: 'Tudo já vem na medida de uma pessoa.' },
  { n: '2', title: 'Separe os ingredientes', text: 'Marque cada item na lista.' },
  { n: '3', title: 'Siga um passo por vez', text: 'Com timer e o que você deve ver em cada etapa.' },
];

export const starterIds = ['omelete-caprichado', 'sanduiche-quente-queijo', 'macarrao-alho-e-oleo'];

export const badges = ['🥄 1 porção', '⏱️ A maioria em até 30 min', '🌱 Sem precisar de experiência'];

export const glossary = [
  { term: 'Refogar', text: 'Cozinhar rapidamente em um pouco de gordura (óleo, azeite ou manteiga), mexendo de vez em quando.' },
  { term: 'Fogo baixo', text: 'Chama pequena, quase só aquecendo. A panela fica morna, com borbulhas bem fracas.' },
  { term: 'Fogo médio', text: 'Chama de tamanho médio. Chia ao colocar comida, mas sem fumaça.' },
  { term: 'Ponto de fervura', text: 'Bolhas grandes subindo do fundo e se espalhando por toda a superfície.' },
  { term: 'Escorrer', text: 'Retirar toda a água de um alimento usando peneira ou escorredor.' },
  { term: 'Dourar', text: 'Cozinhar até a superfície ficar de cor dourada, como um pão torrado.' },
  { term: 'Uma pitada', text: 'O que cabe entre o polegar e o indicador. Cerca de ¼ de colher de chá.' },
  { term: 'A gosto', text: 'Comece com pouco, prove e acrescente mais se precisar.' },
];

export const tips = [
  {
    id: 'comecar',
    emoji: '🧺',
    title: 'Antes de acender o fogo',
    items: [
      { q: 'Leia a receita inteira uma vez', a: 'Dois minutos de leitura evitam surpresas no meio do caminho. Veja os ingredientes, os utensílios e o tempo total.' },
      { q: 'Separe tudo antes', a: 'Cozinheiros profissionais chamam isso de "mise en place". Para você, é só colocar tudo ao lado do fogão, picado e medido.' },
      { q: 'Limpe enquanto cozinha', a: 'Aproveite os tempos de espera para lavar uma tigela ou guardar o que sobrou. A pia final fica bem menor.' },
    ],
  },
  {
    id: 'fogo',
    emoji: '🔥',
    title: 'Fogo e panela',
    items: [
      { q: 'Quando em dúvida, fogo mais baixo', a: 'É sempre possível aumentar depois. Uma comida queimada não tem volta.' },
      { q: 'Panela aquecida antes do ingrediente', a: 'Para dourar, a panela precisa estar quente. Pingue uma gota de água: se chiar, pode colocar.' },
      { q: 'Nem sempre mexa', a: 'Carnes e legumes precisam ficar quietos para ganhar cor. Mexa só quando a receita pedir.' },
    ],
  },
  {
    id: 'sabor',
    emoji: '🧂',
    title: 'Sal, sabor e prova',
    items: [
      { q: 'Prove durante o preparo', a: 'Uma colher limpa a cada etapa. É assim que você aprende a acertar o tempero.' },
      { q: 'Sal pouco a pouco', a: 'Dá para colocar, mas não dá para tirar. Comece com uma pitada.' },
      { q: 'Limão ou vinagre para dar vida', a: 'Se o prato está sem graça mas o sal está certo, umas gotinhas de ácido costumam resolver.' },
    ],
  },
  {
    id: 'seguranca',
    emoji: '🛟',
    title: 'Segurança sem drama',
    items: [
      { q: 'Segure a faca com calma', a: 'Apoie o alimento na tábua, mantenha os dedos dobrados como uma garrinha e corte devagar. Velocidade vem com o tempo.' },
      { q: 'Cabos para dentro', a: 'Gire os cabos das panelas para o centro do fogão, longe da borda.' },
      { q: 'Carnes de frango bem passadas', a: 'Frango precisa estar branco por dentro, sem partes rosadas. Se tiver dúvida, cozinhe mais um minuto.' },
    ],
  },
  {
    id: 'erros',
    emoji: '🤗',
    title: 'Quando algo dá errado',
    items: [
      { q: 'Queimou um pouco?', a: 'Se for só o fundo, não raspe. Passe a parte boa para outra panela e siga em frente.' },
      { q: 'Ficou salgado demais?', a: 'Junte um ingrediente sem sal (arroz, batata cozida, água ou creme) para diluir.' },
      { q: 'Não ficou como a foto?', a: 'Normal. Você está aprendendo. Anote o que mudaria e tente de novo na próxima.' },
    ],
  },
  {
    id: 'sobras',
    emoji: '📦',
    title: 'Sobras e geladeira',
    items: [
      { q: 'Esfrie antes de guardar', a: 'Espere uns 30 minutos, depois coloque em pote fechado na geladeira.' },
      { q: 'Quanto tempo dura?', a: 'Comida cozida costuma durar até 3 dias na geladeira. Na dúvida pelo cheiro ou aspecto, descarte.' },
      { q: 'Reaquecer com água', a: 'Uma colher de água ao esquentar arroz ou massa devolve a maciez.' },
    ],
  },
];

export const tipOfTheDay = [
  'Pare, respire e prove. Cozinhar é feito de pequenos ajustes.',
  'Se algo grudar, espere um pouquinho. Quando estiver pronto, solta sozinho.',
  'Deixe a panela esquentar antes de colocar a comida.',
  'Escolha uma música de que você goste. Cozinhar fica mais leve.',
  'Errar faz parte. Cada panela te ensina algo novo.',
];
