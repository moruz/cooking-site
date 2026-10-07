# PratoFacil

Receitas para uma pessoa só, com passo a passo calmo para quem está começando a cozinhar.

## O que tem

- **19 receitas originais** (almoço, jantar, café e lanche, sobremesa, bebida e opções de uma panela só) para 1 porção, com ingredientes, utensílios, trocas fáceis e erros comuns.
- **Modo cozinhar:** tela cheia, um passo por vez, timers e a seção "Como deve ficar".
- **Descoberta:** filtros por tempo, dificuldade e ingrediente principal, favoritas e o botão "Não sei o que cozinhar".
- **Dicas para iniciantes** e dicionário rápido.
- Interface 100% em português, pensada primeiro para o celular.

## Como rodar

Requer Node.js 18 ou mais recente.

```bash
npm install
npm run dev      # desenvolvimento em http://localhost:5173
npm run build    # gera a versão de produção em dist/
npm run preview  # serve a pasta dist/ localmente
```

## Estrutura

```
src/
  components/   peças reutilizáveis (RecipeCard, StepTimer, Chips, ...)
  pages/        telas (Home, Recipes, RecipeDetail, Cook, Tips)
  hooks/        estado (favoritos, progresso), timers, rota, tela acesa
  data/         receitas e textos em português
  styles/       design system em CSS
docs/PRODUTO.md  produto, fluxos, design system e racional
```

## Como adicionar uma receita

Inclua um objeto novo no array de `src/data/recipes.js`, seguindo o formato das receitas existentes. Cada passo aceita `look` ("Como deve ficar"), `careful` (aviso) e `timer` (opcional).

## Notas

- Favoritas, checklist e progresso ficam no `localStorage` do navegador, sem conta.
- O roteamento é por hash (`#/receitas`), então funciona em qualquer hospedagem estática.
- Todo o conteúdo das receitas é original.
- As fotos são externas (Unsplash) e centralizadas em `src/data/images.js` e no campo `photo` de cada receita; se uma foto falhar, o card mostra o emoji da receita.

Mais detalhes em [docs/PRODUTO.md](docs/PRODUTO.md).
