// Fotos reais do Unsplash (licença Unsplash, uso livre), referenciadas pelo ID da página da foto.
// Se uma foto sair do ar, o componente Photo cai para o emoji da receita.
// Para trocar uma foto, basta mudar o ID aqui.
// Aceita o ID da foto (11 caracteres) ou o link completo da página dela no Unsplash.
export const photoId = (value) => {
  if (!value) return null;
  const last = String(value).split('?')[0].replace(/\/+$/, '').split('/').pop();
  return last.length > 11 ? last.slice(-11) : last;
};

export const unsplash = (id, w = 800) =>
  `https://unsplash.com/photos/${photoId(id)}/download?force=true&w=${w}`;

export const photos = {
  hero: '6jVutqtcgQs',
  ambiente1: 'Wzo_34cS5bA',
  ambiente2: 'YnXvyvHVKjs',
  ambiente3: '0i5clWZBit0',
};

export const categories = [
  { id: 'Almoço', emoji: '🍽️', photo: 'oPvhddPoS-E', hint: 'Prato feito na medida' },
  { id: 'Jantar', emoji: '🌙', photo: 'jL3X9oeQ3Ps', hint: 'Leve e rápido' },
  { id: 'Café e lanche', emoji: '🥞', photo: '7hlOjB5VVb0', hint: 'Manhã e tarde' },
  { id: 'Sobremesa', emoji: '🍫', photo: 'XBPWay6Kqxc', hint: 'Um docinho só seu' },
  { id: 'Bebida', emoji: '🍋', photo: 'Z3z1O7hqyC4', hint: 'Geladinhas e quentinhas' },
];
