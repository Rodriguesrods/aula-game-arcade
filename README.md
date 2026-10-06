# Aula Arcade

Crie um site completo chamado "Museu dos Jogos", uma galeria digital de jogos criados por alunos durante aulas de programação.

O conceito do projeto é:

"Cada jogo daqui nasceu numa aula."

A ideia é funcionar como um pequeno museu/arcade digital onde os visitantes podem conhecer e jogar os projetos desenvolvidos pelos alunos. O site deve valorizar o trabalho dos estudantes e permitir que novos jogos sejam adicionados facilmente pelo professor.

IMPORTANTE:

Use a imagem de referência anexada nesta conversa como referência visual para a direção inicial do design, principalmente a estética escura, tipografia, espaçamento e cards. Porém, evolua essa ideia para um conceito mais sofisticado de "museu contemporâneo de jogos + arcade", sem simplesmente copiar a interface.

==================================================

IDENTIDADE VISUAL

==================================================

Estética:

- Dark mode como identidade principal.

- Visual de museu digital contemporâneo misturado com arcade.

- Minimalista, elegante e tecnológico.

- Não deixar com aparência infantil ou de site escolar tradicional.

- Pequenos detalhes inspirados em interfaces de videogames.

- Fundo quase preto/azul-marinho muito escuro.

- Cards com bordas sutis.

- Pequenos detalhes coloridos em amarelo, rosa, verde, azul e roxo.

- Glow extremamente sutil.

- Tipografia moderna e forte.

- Bastante espaço negativo.

- Microinterações suaves.

- Animações discretas ao passar o mouse.

- Evitar excesso de gradientes, neon exagerado ou elementos decorativos.

A sensação deve ser:

"um pequeno museu online onde os jogos dos alunos estão expostos."

==================================================

PÁGINA INICIAL

==================================================

Criar um header simples:

"Museu dos Jogos"

No lado direito:

"3 jogos publicados"

Menu:

- Jogos

- Sobre o projeto

Hero:

Pequeno texto:

"FEITO EM SALA, AULA A AULA"

Título grande:

"Cada jogo daqui

nasceu numa aula."

Texto:

"Um acervo de jogos criados pelos alunos enquanto aprendem lógica, programação e criatividade."

CTA:

"Explorar jogos →"

Adicionar uma pequena informação visual mostrando:

"MakeCode Arcade • HTML • CSS • JavaScript"

==================================================

GALERIA DE JOGOS

==================================================

Criar uma seção:

"Jogos em exposição"

Texto:

"Projetos criados pelos alunos e publicados para todo mundo jogar."

Criar uma grade responsiva de cards.

Cada card deve conter:

- pequena faixa colorida no topo

- nome do jogo

- autores

- descrição curta

- tecnologia

- botão "Jogar →"

- pequeno elemento visual indicando que é um jogo

Exemplo:

Detetive da Lógica

Equipe Pixel

"Resolva os desafios usando lógica e atenção."

MakeCode Arcade

Jogar →

Outro:

Fuga do Labirinto

João e Pedro

"Encontre a saída antes que o tempo acabe."

MakeCode Arcade

Jogar →

Os cards devem ter hover elegante:

- leve elevação

- borda ficando mais evidente

- pequena mudança de brilho

- seta se movimentando levemente

==================================================

PÁGINA / MODAL DO JOGO

==================================================

Ao clicar em "Jogar", abrir uma página individual para o jogo ou uma experiência de visualização dedicada.

Mostrar:

Nome do jogo

Autores

Descrição

Tecnologias

E principalmente:

O jogo incorporado diretamente na página através do link/embed do MakeCode Arcade quando possível.

Criar também um botão:

"Abrir no MakeCode ↗"

O visitante deve conseguir jogar sem sair do site quando o embed for suportado.

==================================================

SISTEMA DE JOGOS EDITÁVEL

==================================================

ESTA PARTE É MUITO IMPORTANTE.

Não codifique os jogos diretamente dentro dos componentes da interface.

Criar um arquivo separado para armazenar os dados dos jogos, por exemplo:

src/data/games.ts

Todos os cards e páginas devem ser gerados automaticamente a partir desse arquivo.

Estrutura:

export const games = [

  {

    id: "detetive-da-logica",

    title: "Detetive da Lógica",

    authors: "Nome dos alunos",

    description: "Descrição do jogo.",

    technology: "MakeCode Arcade",

    link: "LINK_DO_JOGO",

    embedUrl: "URL_DO_EMBED",

    featured: true,

    color: "yellow"

  }

];

Quando o professor quiser adicionar um novo jogo, ele deve precisar apenas adicionar um novo objeto nesse arquivo.

Exemplo:

{

  id: "novo-jogo",

  title: "Novo Jogo",

  authors: "Ana e Pedro",

  description: "Descrição do novo jogo.",

  technology: "MakeCode Arcade",

  link: "LINK_DO_JOGO",

  embedUrl: "URL_DO_EMBED",

  featured: false,

  color: "green"

}

O site deve automaticamente:

- criar o novo card

- atualizar a quantidade de jogos publicados

- disponibilizar a página do jogo

- mostrar o jogo na galeria

Não duplicar código para cada jogo.

==================================================

ÁREA DE CONFIGURAÇÃO

==================================================

Criar também um arquivo central de configuração:

src/config/site.ts

Nele devem ficar informações fáceis de alterar pelo professor:

- nome do projeto

- subtítulo

- descrição

- nome da escola/projeto, se houver

- ano

- quantidade de jogos deve ser calculada automaticamente, não digitada manualmente

Exemplo:

export const siteConfig = {

  title: "Museu dos Jogos",

  subtitle: "Cada jogo daqui nasceu numa aula.",

  year: 2026

};

==================================================

SEÇÃO "SOBRE O PROJETO"

==================================================

Criar uma seção explicando:

"Como esse museu nasceu"

Texto curto:

"Durante as aulas, os alunos aprendem programação colocando ideias em prática. Cada jogo representa uma experiência, uma tentativa, um problema resolvido e uma nova habilidade aprendida."

Mostrar uma pequena linha do processo:

IDEIA → LÓGICA → CÓDIGO → TESTE → JOGO PUBLICADO

Usar uma apresentação visual elegante.

==================================================

HALL DA FAMA

==================================================

Criar uma seção opcional chamada:

"Em destaque"

Mostrar os jogos que possuem:

featured: true

Esses jogos devem aparecer com um tratamento visual um pouco diferente.

Não criar conteúdo fictício demais. Usar os três jogos de exemplo apenas como dados demonstrativos.

==================================================

TECNOLOGIAS

==================================================

Criar uma pequena seção:

"Feito para aprender."

Mostrar tecnologias utilizadas no projeto/aula:

MakeCode Arcade

JavaScript

HTML

CSS

A apresentação deve ser visual e minimalista.

==================================================

RODAPÉ

==================================================

Rodapé simples:

"Museu dos Jogos"

"Projetos criados em sala de aula."

2026

Adicionar espaço para:

"Projeto desenvolvido durante as aulas de programação."

==================================================

RESPONSIVIDADE

==================================================

O site deve ser totalmente responsivo.

Desktop:

- galeria em 3 colunas

- hero amplo

- bastante espaço negativo

Tablet:

- 2 colunas

Mobile:

- 1 coluna

- header adaptado

- tipografia reduzida proporcionalmente

- cards ocupando quase toda a largura

- jogo incorporado adaptado à tela

==================================================

TECNOLOGIA

==================================================

Utilize:

- React

- TypeScript

- Vite

- CSS moderno ou Tailwind

- componentes reutilizáveis

Estruture o projeto de forma limpa.

Sugestão:

src/

  components/

    Header

    Hero

    GameCard

    GameGrid

    FeaturedGames

    About

    Footer

  data/

    games.ts

  config/

    site.ts

  pages/

    Home

    Game

Não colocar toda a aplicação em um único arquivo.

==================================================

EXPERIÊNCIA

==================================================

Priorize:

- performance

- acessibilidade

- navegação simples

- boa hierarquia visual

- animações suaves

- código organizado

- facilidade de manutenção

Adicionar estados para:

- nenhum jogo cadastrado

- jogo não encontrado

- link do jogo indisponível

Não criar login, banco de dados ou painel administrativo nesta primeira versão.

A prioridade é criar uma primeira versão bonita, funcional e fácil de atualizar manualmente pelo arquivo games.ts.

==================================================

RESULTADO ESPERADO

==================================================

O resultado deve parecer uma mistura de:

MUSEU DIGITAL

+

ARCADE

+

PORTFÓLIO DE ALUNOS

+

GALERIA DE PROJETOS

O site deve transmitir a sensação de que cada jogo é uma pequena peça exposta em um acervo criado durante as aulas.

Evite:

- visual infantil

- excesso de elementos

- excesso de neon

- emojis espalhados pela interface

- aparência de template genérico

- textos enormes

- cards excessivamente arredondados

Quero um design sofisticado, moderno, tecnológico e divertido na medida certa.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://aula-game-arcade.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/377928b8-8bbb-4283-a525-e016b4aafa62).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
