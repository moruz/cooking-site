// Receitas originais para 1 pessoa.
// Estrutura pensada para crescer: basta adicionar um objeto neste array.
//
// step.timer   -> { seconds, label } (opcional)
// step.look    -> "Como deve ficar" (o que a pessoa deve ver/ouvir/sentir)
// step.careful -> aviso curto de erro comum naquele passo (opcional)

import { extraRecipes } from './recipes-extra.js';

export const DIFFICULTIES = ['Muito fácil', 'Fácil', 'Um desafio leve'];

export const recipes = [
  {
    id: 'arroz-soltinho',
    photo: 'qM8PlclZGg4',
    category: 'Almoço',
    onePot: false,
    title: 'Arroz soltinho para 1',
    emoji: '🍚',
    tone: 'butter',
    mainIngredient: 'Arroz',
    summary: 'Um arroz básico que dá certo, com a medida de uma xícara de café para não sobrar panela cheia.',
    prepMin: 5,
    cookMin: 20,
    difficulty: 'Fácil',
    encouragement: 'Quem sabe fazer arroz nunca mais passa fome. Você está aprendendo a base de tudo.',
    ingredients: [
      { id: 'arroz', qty: '½ xícara (chá)', name: 'arroz branco' },
      { id: 'agua', qty: '1 xícara (chá)', name: 'água quente', note: 'pode ser da chaleira' },
      { id: 'alho', qty: '1 dente', name: 'alho', note: 'bem picadinho' },
      { id: 'oleo', qty: '1 colher (sopa)', name: 'óleo ou azeite' },
      { id: 'sal', qty: '1 pitada', name: 'sal' },
    ],
    utensils: ['Panela pequena com tampa', 'Colher de pau ou garfo', 'Xícara medidora', 'Peneira (ou a própria tampa)'],
    steps: [
      {
        title: 'Lave o arroz',
        text: 'Coloque o arroz na peneira e passe por água corrente, mexendo com a mão, por cerca de 30 segundos. Escorra bem.',
        look: 'A água sai quase transparente, só um pouco turva. Não precisa ficar perfeita.',
        careful: 'Pular essa etapa deixa o arroz mais grudento.',
      },
      {
        title: 'Aqueça a água',
        text: 'Ferva a água na chaleira ou em outra panelinha. Deixe por perto, porque vai entrar rápido no passo 4.',
        look: 'Pequenas bolhas subindo e um pouco de vapor.',
      },
      {
        title: 'Doure o alho',
        text: 'Na panela, aqueça o óleo em fogo médio por 1 minuto. Junte o alho e mexa por 20 a 30 segundos.',
        look: 'O alho fica clarinho e cheiroso, sem escurecer. Se começou a ficar marrom, tire a panela do fogo por um instante.',
        careful: 'Alho queimado amarga o arroz inteiro. Prefira tirar cedo demais do que tarde demais.',
        timer: { seconds: 30, label: 'Alho no óleo' },
      },
      {
        title: 'Misture o arroz e a água',
        text: 'Coloque o arroz escorrido e mexa por 1 minuto para ele ficar com o gostinho do alho. Despeje a água quente e acrescente o sal.',
        look: 'Vai chiar bastante quando a água entrar. É normal.',
      },
      {
        title: 'Cozinhe com a panela tampada',
        text: 'Quando a água ferver, baixe o fogo para o mínimo, tampe a panela e deixe cozinhar sem abrir.',
        look: 'Você ouve um borbulhar fraquinho por baixo da tampa. Se o barulho for muito forte, abaixe mais o fogo.',
        careful: 'Abrir a tampa toda hora deixa escapar o vapor e o arroz fica cru.',
        timer: { seconds: 12 * 60, label: 'Arroz cozinhando' },
      },
      {
        title: 'Descanse e solte os grãos',
        text: 'Desligue o fogo e mantenha a panela tampada por mais 5 minutos. Depois, passe o garfo suavemente pelo arroz.',
        look: 'A superfície tem pequenos furinhos e os grãos estão inchados e separados.',
        timer: { seconds: 5 * 60, label: 'Descanso' },
      },
    ],
    mistakes: [
      { problem: 'Arroz grudento ou empapado', fix: 'Use a medida certa de água (o dobro do arroz) e não mexa depois que ferver.' },
      { problem: 'Arroz duro no meio', fix: 'Faltou água ou o fogo estava forte demais. Junte 3 colheres de água quente, tampe e cozinhe mais 3 minutos.' },
      { problem: 'Grudou no fundo', fix: 'O fogo estava alto. Da próxima vez, abaixe no mínimo assim que a água ferver.' },
    ],
    substitutions: [
      { from: 'Alho fresco', to: '¼ de colher (chá) de alho em pó, junto com o arroz' },
      { from: 'Óleo', to: 'Manteiga ou qualquer outro óleo vegetal' },
      { from: 'Água', to: 'Caldo de legumes sem sal, para um sabor mais forte' },
    ],
  },

  {
    id: 'macarrao-alho-e-oleo',
    photo: 'jL3X9oeQ3Ps',
    category: 'Jantar',
    onePot: true,
    title: 'Macarrão alho e óleo para 1',
    emoji: '🍝',
    tone: 'terracotta',
    mainIngredient: 'Massa',
    summary: 'Poucos ingredientes, pouca louça e um jeito de aprender a controlar o fogo com calma.',
    prepMin: 5,
    cookMin: 15,
    difficulty: 'Muito fácil',
    encouragement: 'Esta receita perdoa muito. Se algo sair diferente, ainda vai ficar gostoso.',
    ingredients: [
      { id: 'macarrao', qty: '100 g', name: 'espaguete', note: 'cerca de um punhado grosso' },
      { id: 'agua', qty: '1 litro', name: 'água' },
      { id: 'sal-agua', qty: '1 colher (chá)', name: 'sal', note: 'para a água do cozimento' },
      { id: 'alho', qty: '2 dentes', name: 'alho', note: 'em fatias finas' },
      { id: 'azeite', qty: '3 colheres (sopa)', name: 'azeite' },
      { id: 'pimenta', qty: '1 pitada', name: 'pimenta em flocos', note: 'opcional' },
      { id: 'salsinha', qty: '1 colher (sopa)', name: 'salsinha picada', note: 'opcional' },
    ],
    utensils: ['Panela média', 'Frigideira', 'Pegador ou garfo grande', 'Escorredor', 'Faca e tábua'],
    steps: [
      {
        title: 'Deixe tudo à mão',
        text: 'Fatie o alho, separe o azeite, a pimenta e a salsinha ao lado do fogão. Quando o macarrão estiver quase pronto, o alho precisa ser rápido.',
        look: 'Fatias finas, mais ou menos como uma moeda bem fininha.',
        careful: 'Cozinhar com tudo pronto evita correria e erros.',
      },
      {
        title: 'Ferva a água com sal',
        text: 'Leve a água ao fogo alto com o sal. Espere ferver forte.',
        look: 'Bolhas grandes e contínuas subindo do fundo.',
        timer: { seconds: 6 * 60, label: 'Água esquentando' },
      },
      {
        title: 'Cozinhe o macarrão',
        text: 'Coloque o macarrão e empurre com o garfo até afundar. Mexa na primeira vez e depois de 2 minutos. Siga o tempo da embalagem menos 1 minuto.',
        look: 'Ao morder um fio, ele está macio por fora e com um pontinho firme no centro.',
        careful: 'Antes de escorrer, reserve meia xícara da água do cozimento. Ela salva o prato depois.',
        timer: { seconds: 8 * 60, label: 'Macarrão cozinhando' },
      },
      {
        title: 'Doure o alho no azeite',
        text: 'Com o macarrão quase pronto, aqueça o azeite na frigideira em fogo baixo. Junte o alho e a pimenta e mexa por cerca de 1 minuto.',
        look: 'O alho fica dourado bem clarinho e o azeite perfumado.',
        careful: 'Fogo baixo. O alho passa do ponto muito rápido.',
        timer: { seconds: 60, label: 'Alho no azeite' },
      },
      {
        title: 'Junte tudo',
        text: 'Escorra o macarrão e passe para a frigideira. Acrescente 3 colheres da água reservada e mexa por 1 minuto em fogo baixo.',
        look: 'O macarrão fica brilhante e levemente cremoso, sem poças de azeite.',
      },
      {
        title: 'Sirva e finalize',
        text: 'Passe para um prato fundo e salpique a salsinha. Prove e, se quiser, ajuste o sal.',
        look: 'Prato quente, perfumado, com cara de restaurante simples.',
      },
    ],
    mistakes: [
      { problem: 'Macarrão colando um no outro', fix: 'Mexa nos primeiros minutos e use bastante água na panela.' },
      { problem: 'Alho amargo', fix: 'Fogo estava forte ou o alho ficou tempo demais. Recomece só com mais um dente, em fogo baixo.' },
      { problem: 'Prato seco', fix: 'Adicione mais uma colher da água reservada e mexa.' },
    ],
    substitutions: [
      { from: 'Espaguete', to: 'Qualquer massa comprida fina, como talharim ou fettuccine' },
      { from: 'Azeite', to: 'Óleo comum com um pouquinho de manteiga' },
      { from: 'Salsinha', to: 'Cebolinha verde ou orégano seco' },
    ],
  },

  {
    id: 'frango-grelhado-simples',
    photo: 'oPvhddPoS-E',
    category: 'Almoço',
    onePot: false,
    title: 'Frango grelhado simples',
    emoji: '🍗',
    tone: 'sage',
    mainIngredient: 'Frango',
    summary: 'Um filé suculento por fora dourado e por dentro macio, com um truque para não ressecar.',
    prepMin: 10,
    cookMin: 15,
    difficulty: 'Fácil',
    encouragement: 'Aprender a cozinhar frango abre portas para dezenas de refeições. Vale cada minuto de atenção.',
    ingredients: [
      { id: 'frango', qty: '1 filé', name: 'peito de frango', note: 'uns 150 g' },
      { id: 'limao', qty: '½', name: 'limão', note: 'só o suco' },
      { id: 'alho', qty: '1 dente', name: 'alho amassado' },
      { id: 'sal', qty: '1 pitada', name: 'sal' },
      { id: 'pimenta', qty: 'a gosto', name: 'pimenta-do-reino' },
      { id: 'oleo', qty: '1 colher (chá)', name: 'azeite ou óleo' },
    ],
    utensils: ['Frigideira antiaderente', 'Tábua e faca', 'Prato fundo', 'Pegador', 'Papel-toalha'],
    steps: [
      {
        title: 'Deixe o frango mais fino',
        text: 'Coloque o filé na tábua e corte ao meio na horizontal, como se abrisse um pão, para virar dois bifes finos. Se preferir, bata levemente com o fundo de uma panela.',
        look: 'Dois pedaços parecidos, com a mesma espessura, de uns 1,5 cm.',
        careful: 'Pedaço de espessuras diferentes cozinha de forma desigual.',
      },
      {
        title: 'Tempere e deixe descansar',
        text: 'Em um prato, misture o limão, o alho, o sal e a pimenta. Passe nos dois lados do frango e espere 10 minutos.',
        look: 'O frango fica úmido e perfumado.',
        timer: { seconds: 10 * 60, label: 'Tempero pegando' },
      },
      {
        title: 'Seque e aqueça a frigideira',
        text: 'Seque o frango com papel-toalha. Aqueça a frigideira em fogo médio por 2 minutos e passe o azeite.',
        look: 'Ao pingar uma gota de água, ela chia e some em poucos segundos.',
        careful: 'Frango molhado não dá dourado, cozinha no vapor.',
      },
      {
        title: 'Doure de um lado',
        text: 'Coloque os bifes sem encostar um no outro e deixe 4 minutos sem mexer.',
        look: 'A beirada fica esbranquiçada e a parte de baixo, dourada. Ele solta sozinho da frigideira.',
        careful: 'Se estiver grudando, espere mais um pouco. Quando está pronto, ele se solta.',
        timer: { seconds: 4 * 60, label: 'Primeiro lado' },
      },
      {
        title: 'Vire e termine',
        text: 'Vire com o pegador e cozinhe mais 3 a 4 minutos. Corte o pedaço mais grosso para conferir.',
        look: 'Por dentro, tudo branquinho, sem partes rosadas, e o suco sai claro.',
        careful: 'Se ainda estiver rosado, volte para a frigideira por mais 1 minuto.',
        timer: { seconds: 3.5 * 60, label: 'Segundo lado' },
      },
      {
        title: 'Deixe descansar',
        text: 'Passe para um prato e espere 2 minutos antes de comer. Isso mantém o suco dentro do frango.',
        look: 'Frango firme ao toque e sem líquido escorrendo ao cortar.',
        timer: { seconds: 2 * 60, label: 'Descanso' },
      },
    ],
    mistakes: [
      { problem: 'Frango seco', fix: 'Deixe mais fino, use fogo médio e não passe de 8 minutos no total.' },
      { problem: 'Frango sem cor', fix: 'Frigideira pouco quente ou frango molhado. Seque bem e aqueça antes.' },
      { problem: 'Dúvida se está cozido', fix: 'Corte o pedaço mais grosso. Se estiver todo branco por dentro, está pronto.' },
    ],
    substitutions: [
      { from: 'Limão', to: 'Vinagre branco (1 colher de chá) ou suco de laranja' },
      { from: 'Peito de frango', to: 'Sobrecoxa sem osso e sem pele, com 2 minutos a mais de cozimento' },
      { from: 'Pimenta-do-reino', to: 'Páprica ou orégano seco' },
    ],
  },

  {
    id: 'omelete-caprichado',
    photo: 'eWZJlxEIRN8',
    category: 'Jantar',
    onePot: false,
    title: 'Omelete caprichado',
    emoji: '🍳',
    tone: 'butter',
    mainIngredient: 'Ovo',
    summary: 'Um omelete macio e dobradinho em menos de 10 minutos, bom para qualquer hora do dia.',
    prepMin: 3,
    cookMin: 6,
    difficulty: 'Muito fácil',
    encouragement: 'Se rasgar ou desmanchar, vira ovo mexido. Também é um sucesso.',
    ingredients: [
      { id: 'ovos', qty: '2', name: 'ovos' },
      { id: 'leite', qty: '1 colher (sopa)', name: 'leite ou água' },
      { id: 'sal', qty: '1 pitada', name: 'sal' },
      { id: 'manteiga', qty: '1 colher (chá)', name: 'manteiga' },
      { id: 'queijo', qty: '2 fatias', name: 'queijo', note: 'ou um punhado ralado' },
      { id: 'tomate', qty: '3 fatias finas', name: 'tomate', note: 'opcional' },
    ],
    utensils: ['Frigideira pequena antiaderente', 'Tigela', 'Garfo', 'Espátula de silicone'],
    steps: [
      {
        title: 'Bata os ovos',
        text: 'Quebre os ovos na tigela, junte o leite e o sal. Bata com o garfo por cerca de 30 segundos.',
        look: 'Mistura uniforme, sem fios de clara soltos, com uma espuminha leve.',
        careful: 'Quebre cada ovo primeiro em um pires para pescar casquinha com facilidade.',
      },
      {
        title: 'Aqueça a frigideira',
        text: 'Em fogo médio-baixo, derreta a manteiga e espalhe pela frigideira.',
        look: 'A manteiga derrete e faz pequenas bolhas, sem escurecer.',
        careful: 'Manteiga marrom escura significa fogo forte demais.',
      },
      {
        title: 'Despeje e deixe firmar',
        text: 'Coloque a mistura na frigideira e espere 1 minuto sem mexer. Depois, com a espátula, empurre as bordas para o centro, inclinando a frigideira.',
        look: 'As bordas ficam firmes e o centro ainda um pouco molhadinho e brilhante.',
        timer: { seconds: 60, label: 'Ovo firmando' },
      },
      {
        title: 'Recheie',
        text: 'Distribua o queijo e o tomate sobre metade do omelete.',
        look: 'Recheio concentrado em um lado, deixando a outra metade livre para dobrar.',
      },
      {
        title: 'Dobre com delicadeza',
        text: 'Com a espátula, dobre a parte vazia sobre o recheio. Deixe mais 30 segundos e deslize para o prato.',
        look: 'Meia-lua amarelinha, com queijo derretendo por dentro.',
        timer: { seconds: 30, label: 'Queijo derretendo' },
      },
    ],
    mistakes: [
      { problem: 'Omelete duro e escuro', fix: 'O fogo estava forte. Mantenha médio-baixo e tire cedo, o ovo continua cozinhando no prato.' },
      { problem: 'Rasgou ao dobrar', fix: 'Tudo bem. Junte as partes com a espátula e sirva assim mesmo.' },
      { problem: 'Grudou na frigideira', fix: 'Use antiaderente e não deixe a manteiga faltar.' },
    ],
    substitutions: [
      { from: 'Manteiga', to: 'Um fio de óleo ou azeite' },
      { from: 'Queijo fatiado', to: 'Queijo ralado, requeijão ou pedacinhos de queijo minas' },
      { from: 'Tomate', to: 'Cebolinha, presunto picado ou folhas de espinafre' },
    ],
  },

  {
    id: 'legumes-assados',
    photo: 'btK6EUoh8Tc',
    category: 'Almoço',
    onePot: false,
    title: 'Legumes assados no forno',
    emoji: '🥕',
    tone: 'sage',
    mainIngredient: 'Legumes',
    summary: 'Corte, tempere e deixe o forno trabalhar. Sobra tempo para você descansar ou tomar banho.',
    prepMin: 10,
    cookMin: 30,
    difficulty: 'Fácil',
    encouragement: 'Metade do trabalho é do forno. Você só precisa começar.',
    ingredients: [
      { id: 'cenoura', qty: '1 média', name: 'cenoura' },
      { id: 'batata', qty: '1 pequena', name: 'batata' },
      { id: 'abobrinha', qty: '½', name: 'abobrinha' },
      { id: 'cebola', qty: '½', name: 'cebola' },
      { id: 'azeite', qty: '2 colheres (sopa)', name: 'azeite' },
      { id: 'sal', qty: '1 pitada', name: 'sal' },
      { id: 'ervas', qty: '1 colher (chá)', name: 'orégano ou ervas secas' },
    ],
    utensils: ['Forno', 'Assadeira ou travessa', 'Faca e tábua', 'Tigela grande', 'Colher'],
    steps: [
      {
        title: 'Ligue o forno',
        text: 'Ajuste o forno para 200 °C e deixe esquentar enquanto corta os legumes.',
        look: 'A luz do forno indica quando ele chegou na temperatura.',
        careful: 'Forno frio deixa os legumes murchos em vez de dourados.',
      },
      {
        title: 'Corte em pedaços parecidos',
        text: 'Corte a batata e a cenoura em cubos de 2 cm. A abobrinha e a cebola podem ficar um pouco maiores, pois cozinham mais rápido.',
        look: 'Pedaços mais ou menos do mesmo tamanho de uma uva.',
        careful: 'Pedaços de tamanhos muito diferentes ficam crus e queimados ao mesmo tempo.',
      },
      {
        title: 'Tempere em uma tigela',
        text: 'Misture tudo com azeite, sal e ervas até todos os pedaços ficarem brilhantes.',
        look: 'Nenhum pedaço seco, nenhuma poça de azeite no fundo.',
      },
      {
        title: 'Espalhe na assadeira',
        text: 'Distribua os legumes em uma única camada, sem empilhar.',
        look: 'Os pedaços quase não se tocam, cada um com um pouquinho de espaço.',
        careful: 'Assadeira lotada vira cozido, não assado.',
      },
      {
        title: 'Asse e vire na metade',
        text: 'Leve ao forno por 15 minutos, retire e mexa os legumes. Volte ao forno por mais 15 a 20 minutos.',
        look: 'Bordas douradas e tostadas, garfo entra sem esforço na batata.',
        careful: 'Use luvas ou pano seco ao tirar a assadeira.',
        timer: { seconds: 15 * 60, label: 'Primeira etapa' },
      },
      {
        title: 'Termine e sirva',
        text: 'Confira a maciez. Se faltar, deixe mais 5 minutos. Passe para o prato e prove para ajustar o sal.',
        look: 'Legumes macios por dentro e bem corados por fora.',
        timer: { seconds: 15 * 60, label: 'Segunda etapa' },
      },
    ],
    mistakes: [
      { problem: 'Legumes molengas', fix: 'Assadeira cheia ou forno morno. Use espaço e temperatura alta.' },
      { problem: 'Queimaram nas pontas', fix: 'Abaixe para 180 °C e cubra com papel-alumínio por 5 minutos.' },
      { problem: 'Sem sabor', fix: 'Sal na hora certa e uma pitada de limão no final fazem diferença.' },
    ],
    substitutions: [
      { from: 'Abobrinha', to: 'Berinjela, brócolis ou abóbora' },
      { from: 'Azeite', to: 'Óleo vegetal comum' },
      { from: 'Ervas secas', to: 'Páprica, alho em pó ou só sal e pimenta' },
    ],
  },

  {
    id: 'estrogonofe-simples',
    photo: 'EH6e_wM52is',
    category: 'Almoço',
    onePot: true,
    title: 'Estrogonofe simples para 1',
    emoji: '🥘',
    tone: 'terracotta',
    mainIngredient: 'Frango',
    summary: 'Cremoso, reconfortante e sem sobras demais. Um bom primeiro prato com molho.',
    prepMin: 10,
    cookMin: 20,
    difficulty: 'Um desafio leve',
    encouragement: 'Este prato tem mais etapas, mas cada uma é pequena. Vá no seu ritmo.',
    ingredients: [
      { id: 'frango', qty: '1 filé', name: 'peito de frango', note: 'cortado em cubos de 2 cm' },
      { id: 'cebola', qty: '¼', name: 'cebola', note: 'bem picadinha' },
      { id: 'alho', qty: '1 dente', name: 'alho picado' },
      { id: 'cogumelo', qty: '3 unidades', name: 'cogumelos', note: 'em fatias, opcional' },
      { id: 'molho', qty: '2 colheres (sopa)', name: 'molho de tomate' },
      { id: 'mostarda', qty: '1 colher (chá)', name: 'mostarda' },
      { id: 'creme', qty: '3 colheres (sopa)', name: 'creme de leite' },
      { id: 'oleo', qty: '1 colher (sopa)', name: 'óleo' },
      { id: 'sal', qty: '1 pitada', name: 'sal' },
    ],
    utensils: ['Frigideira funda ou panela pequena', 'Colher de pau', 'Faca e tábua', 'Colher medidora'],
    steps: [
      {
        title: 'Organize os ingredientes',
        text: 'Corte o frango, pique a cebola e o alho e fatie os cogumelos. Deixe o molho, a mostarda e o creme de leite separados.',
        look: 'Tudo em tigelinhas ou pratinhos, pronto para entrar rápido.',
      },
      {
        title: 'Doure o frango',
        text: 'Aqueça o óleo em fogo médio e junte o frango com o sal. Mexa de vez em quando por 4 a 5 minutos.',
        look: 'Os cubos ficam brancos por fora, com alguns pontos dourados.',
        careful: 'Não precisa estar cozido por dentro ainda.',
        timer: { seconds: 5 * 60, label: 'Frango dourando' },
      },
      {
        title: 'Refogue a cebola e o alho',
        text: 'Junte a cebola e mexa por 2 minutos. Acrescente o alho e os cogumelos e cozinhe mais 2 minutos.',
        look: 'A cebola fica transparente e os cogumelos soltam um pouco de água.',
        timer: { seconds: 4 * 60, label: 'Refogando' },
      },
      {
        title: 'Faça o molho',
        text: 'Adicione o molho de tomate e a mostarda e misture. Cozinhe por 3 minutos em fogo baixo, com a panela meio tampada.',
        look: 'Molho vermelho e uniforme, com cheiro adocicado.',
        careful: 'Se secar, junte 2 colheres de água.',
        timer: { seconds: 3 * 60, label: 'Molho encorpando' },
      },
      {
        title: 'Coloque o creme de leite',
        text: 'Desligue o fogo, junte o creme de leite e mexa devagar até incorporar.',
        look: 'Molho cor-de-rosa clarinho e cremoso, sem pedaços brancos soltos.',
        careful: 'Creme em fogo alto pode talhar. Por isso, desligue antes.',
      },
      {
        title: 'Prove e sirva',
        text: 'Prove e acerte o sal. Sirva com o arroz soltinho ou com batata palha.',
        look: 'Molho que cobre o dorso da colher sem escorrer rápido.',
      },
    ],
    mistakes: [
      { problem: 'Molho aguado', fix: 'Deixe mais 2 minutos no fogo baixo antes de colocar o creme.' },
      { problem: 'Molho talhado', fix: 'O fogo estava forte. Misture 1 colher de leite frio e mexa fora do fogo.' },
      { problem: 'Frango duro', fix: 'Cubos grandes ou fogo alto demais. Corte menor na próxima.' },
    ],
    substitutions: [
      { from: 'Creme de leite', to: 'Requeijão cremoso diluído em 2 colheres de leite' },
      { from: 'Cogumelos', to: 'Milho, ervilha ou nada' },
      { from: 'Mostarda', to: '1 colher (chá) de ketchup' },
    ],
  },
];

recipes.push(...extraRecipes);

export const mainIngredients = [...new Set(recipes.map((r) => r.mainIngredient))];

export const totalTime = (r) => r.prepMin + r.cookMin;

export const getRecipe = (id) => recipes.find((r) => r.id === id);
