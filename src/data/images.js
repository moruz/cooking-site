// Fotos reais do Unsplash (licença Unsplash, uso livre). Nenhuma imagem é gerada.
// Se uma foto sair do ar, o componente Photo cai para o emoji da receita.
// Para trocar uma foto, basta mudar o ID aqui.
export const unsplash = (id, w = 800) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=70`;

export const photos = {
  hero: '1414235077428-338989a2e8c0',
  mesa: '1490645935967-10de6ba17061',
  ambiente1: '1517248135467-4c7edcad34c4',
  ambiente2: '1555396273-367ea4eb4db5',
  ambiente3: '1495474472287-4d71bcdd2085',
  cafe: '1493770348161-369560ae357d',
};

export const categories = [
  { id: 'Almoço', emoji: '🍽️', photo: '1546069901-ba9599a7e63c', hint: 'Prato feito na medida' },
  { id: 'Jantar', emoji: '🌙', photo: '1473093295043-cdd812d0e601', hint: 'Leve e rápido' },
  { id: 'Café e lanche', emoji: '🥞', photo: '1567620905732-2d1ec7ab7445', hint: 'Manhã e tarde' },
  { id: 'Sobremesa', emoji: '🍫', photo: '1563729784474-d77dbb933a9e', hint: 'Um docinho só seu' },
  { id: 'Bebida', emoji: '🍋', photo: '1544145945-f90425340c7e', hint: 'Geladinhas e quentinhas' },
];
