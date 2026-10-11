# Receitas sem foto

Só uma receita ainda mostra o emoji no lugar da foto:

| Receita | Buscar no Unsplash |
|---|---|
| Farofa de ovo na manteiga (`farofa-de-ovo`) | https://unsplash.com/s/photos/farofa |

Para colocar uma foto:

1. Abra o link de busca acima e escolha uma foto gratuita (evite as marcadas com **+**, que são pagas).
2. Abra a foto e copie o link da página dela (algo como `https://unsplash.com/photos/nome-da-foto-AbCdEfGhIjK`).
3. Cole o link no campo `photo` da receita (em `src/data/recipes*.js`), no lugar de `null`. O site extrai o ID sozinho.

## Fotos que valem trocar se aparecer coisa melhor

Estas combinam só em parte com o prato (foto do ingrediente ou de um prato parecido):

- `mandioca-cozida-manteiga`: mandioca crua cortada, não cozida.
- `bolo-de-caneca`: fatia de bolo de chocolate, sem a caneca.
- `batata-doce-recheada`: batata assada com queijo, não é batata-doce.
- `cuscuz-com-ovo`: ovos com fubá cru, não o cuscuz pronto.
- `mousse-de-limao`: creme amarelo com colher.
- `bolinho-de-chuva`, `vinagrete-simples`, `salada-de-frutas-suco-laranja`: conferir se agradam.
