# PratoFacil — documento de produto

## Resumo do produto
**PratoFacil** é um app web responsivo (mobile-first) de receitas para uma pessoa só, com foco em iniciantes. Seu diferencial é o **modo cozinhar**: tela cheia, uma etapa por vez, timers e a seção "Como deve ficar" que mostra o que a pessoa deve ver, ouvir e sentir. Todo o conteúdo (receitas, dicas, microcopy) é original e em português do Brasil.

## Público e dores
| Perfil | Dor | Resposta do produto |
|---|---|---|
| Mora sozinho(a) | Receitas vêm para 4 pessoas e sobra comida | Todas as receitas são para 1 porção |
| Não sabe o que cozinhar | Paralisia de escolha | Botão "Não sei o que cozinhar", atalhos por humor, filtros |
| Erra com frequência | Medo de estragar | "Como deve ficar", "Cuidado" por passo, erros comuns com solução |
| Iniciante | Termos técnicos | Dicionário rápido e linguagem simples |
| Mãos sujas, celular na bancada | Rolar texto longo é ruim | Um passo por tela, botões grandes, tela sempre acesa |

## Arquitetura da informação
- **Início**: hero, "Continue de onde parou", atalhos por humor, receitas em destaque, como funciona, dica do dia
- **Receitas** (`#/receitas`): filtros de tempo, dificuldade e ingrediente principal
  - **Receita** (`#/receita/:id`): resumo, ingredientes (checklist), utensílios, trocas, prévia dos passos, erros comuns
    - **Modo cozinhar** (`#/cozinhar/:id`): tela cheia, sem menus
- **Dicas** (`#/dicas`): acordeões por tema + dicionário rápido
- **Favoritas** (`#/favoritas`)

## Fluxos principais
1. **Descoberta**: Início → "Não sei o que cozinhar" → receita sugerida → começar.
2. **Escolha guiada**: Início → atalho por humor → lista já filtrada → receita.
3. **Cozinhar**: Receita → marcar ingredientes → "Começar a cozinhar" → passos com timers → "Terminei!" → celebração → próxima receita.
4. **Retomar**: fechar o app no passo 3 → Início mostra "Continue de onde parou".
5. **Voltar sempre**: favoritar uma receita → Favoritas.

## Design system
- **Cores**: creme `#FBF6EF` (fundo), terracota `#C9633C` (ação), sálvia `#6F8F72` (progresso/sucesso), manteiga `#F1C566` (atenção suave), tinta `#3A2E28` (texto).
- **Tipografia**: Fraunces (títulos, calorosa) + Nunito Sans (corpo, legível). Corpo de 17px; texto do modo cozinhar com 1.3rem.
- **Forma**: cantos de 18–26px, sombras suaves, cartões brancos sobre fundo quente.
- **Toque**: alvo mínimo de 44–58px; ações primárias na zona do polegar.
- **Acessibilidade**: foco visível, `aria-pressed`, `aria-expanded`, `progressbar`, `prefers-reduced-motion`, contraste de texto ≥ 4.5:1 nas combinações principais.
- **Tom**: calmo, concreto e sem julgamento. Erros são "normais"; sucesso é "mais um passo".

## Componentes
`Layout` (barra superior + navegação inferior), `RecipeCard`, `FavoriteButton`, `Chips`, `IngredientChecklist`, `ProgressBar`, `StepTimer`, `Accordion`, `Encouragement`, `Toast`.
Páginas: `Home`, `Recipes` (também usada em Favoritas), `RecipeDetail`, `Cook`, `Tips`, `NotFound`.
Hooks: `useAppState` (favoritos, checklist, progresso), `useLocalStorage`, `useHashRoute`, `useTimers`, `useWakeLock`.

## Exemplos de microcopy
- Botão principal: "Começar a cozinhar" / "Continuar no passo 3"
- Vazio: "Ainda não tem favoritas — Toque no coração de uma receita para guardá-la aqui."
- Filtro sem resultado: "Nada com esses filtros. Tente tirar um filtro."
- Incentivo: "Muito bem! Um passo a menos." / "Respire e siga em frente."
- Erro 404: "Não achamos essa página. Acontece."
- Final: "Você cozinhou. Isso é de verdade. 🎉"

## Receitas de exemplo
Arroz soltinho para 1 · Macarrão alho e óleo para 1 · Frango grelhado simples · Omelete caprichado · Legumes assados no forno · Estrogonofe simples para 1 — em `src/data/recipes.js`. Todas escritas do zero, com passos, sinais visuais, erros comuns e trocas.

## Notas de implementação
- React 18 + Vite, sem outras dependências. Roteamento por hash: funciona em qualquer hospedagem estática.
- Estado salvo em `localStorage` (falha silenciosa se bloqueado). Para contas e sincronização, troque o `useAppState` por uma API.
- Timers usam horário final, então não "atrasam" com a aba em segundo plano; avisam com som e vibração.
- Wake Lock mantém a tela acesa no modo cozinhar quando suportado.
- Adicionar receita = adicionar um objeto em `recipes.js`.
- Próximos passos: fotos reais, lista de compras, escalar porções, PWA offline, busca por ingredientes que a pessoa tem em casa.

## Racional
Simplicidade primeiro: poucas telas, um objetivo por tela. O modo cozinhar existe separado da página da receita porque ler e cozinhar são tarefas diferentes. "Como deve ficar" ataca o maior medo do iniciante, que é não saber se está certo. Emojis sobre cores suaves entregam personalidade sem depender de fotos, e podem ser trocados por imagens depois.
