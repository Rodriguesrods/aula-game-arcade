


## 📖 Sobre o projeto

O **Museu dos Jogos** é um acervo online que reúne os jogos e projetos feitos pelos alunos enquanto aprendem lógica de programação, criatividade e trabalho em equipe. Em vez de os trabalhos ficarem esquecidos em um computador da sala, cada projeto vira uma "peça de museu": tem número de acervo, equipe, tecnologia usada, ano e um botão para jogar direto no navegador.

O site foi pensado para ser divulgado para a escola inteira (alunos, pais, professores e direção), então precisa ser:

- **Simples de abrir**, principalmente pelo celular (muita gente chega pelo WhatsApp);
- **Fácil de manter**, para o professor adicionar um jogo novo em poucos minutos;
- **Seguro**, já que os autores são menores de idade: o site não coleta dados dos visitantes.

### A ideia pedagógica

Todo jogo do acervo passa pelo mesmo caminho, que também aparece no site:

| Etapa | Pergunta |
|-------|----------|
| 01 · Ideia | O que queremos criar? |
| 02 · Lógica | Como o jogo vai funcionar? |
| 03 · Código | Como transformar a ideia em comandos? |
| 04 · Teste | Jogando, errando e ajustando. |
| 05 · Publicado | Compartilhando o resultado. |

---

## 🎮 Acervo atual (coleção 2026)

| Nº | Jogo | Equipe | Tecnologia |
|----|------|--------|------------|
| 001 | Detetive da Lógica | Equipe Pixel | MakeCode Arcade |
| 002 | Fuga do Labirinto | João e Pedro | MakeCode Arcade |
| 003 | Chuva de Pixels | Turma da tarde | MakeCode Arcade |

> 🔔 Esta tabela é atualizada manualmente quando um jogo novo entra no acervo.

---

## ✨ Funcionalidades

### Já existentes

- Página inicial com apresentação, acervo e seção "Como nasceu";
- Página **Sobre o projeto**;
- Página individual para cada jogo (`/games/<slug>`);
- Cards do acervo com título, descrição curta, equipe, tecnologia e ano;
- Seção de tecnologias usadas (MakeCode Arcade, JavaScript, HTML e CSS);
- Meta tags básicas para compartilhamento.

### Em refinamento

- Dados de todos os jogos centralizados em um único arquivo;
- Jogo embutido na página (iframe) quando a plataforma permitir;
- Blocos "Como jogar" e "Como foi feito" em cada jogo;
- Filtros por turma e tecnologia, e busca por texto;
- Botão de compartilhar (copiar link e WhatsApp) e navegação entre jogos;
- Página `/qr` com QR code pronto para imprimir em cartaz;
- Seção "Como participar / enviar um jogo";
- Página 404 temática ("Peça não encontrada no acervo");
- Revisão de acessibilidade e de uso no celular.

---

## 🧱 Tecnologias do site

O projeto foi criado no [Lovable](https://lovable.dev). Confira o `package.json` para as versões exatas; a stack padrão do Lovable é:

- **React** + **TypeScript**
- **Vite**
- **Tailwind CSS**
- **shadcn/ui**

Os **jogos** em si são feitos com:

- [MakeCode Arcade](https://arcade.makecode.com/) (blocos e JavaScript)
- HTML, CSS e JavaScript puros (para exercícios feitos em sala, como a calculadora)

---

## 🗂️ Estrutura do projeto

> Ajuste os caminhos abaixo se a estrutura gerada no seu projeto for diferente.

```
.
├── public/                 # Imagens estáticas, favicon, capas dos jogos
├── src/
│   ├── data/
│   │   └── games.ts        # ⭐ Lista de todos os jogos do acervo
│   ├── components/         # Cards, cabeçalho, rodapé, filtros etc.
│   ├── pages/ (ou routes/) # Home, Sobre, página de cada jogo, 404
│   └── ...
├── package.json
└── README.md
```

O arquivo mais importante para o dia a dia é o `games.ts`: **é só ele que você edita para colocar um jogo novo no ar.**

---

## ➕ Como adicionar um jogo ao acervo

### 1. Publique o jogo e pegue o link

**MakeCode Arcade**

1. Abra o projeto do aluno no MakeCode Arcade.
2. Clique em **Compartilhar** (ícone no topo).
3. Clique em **Publicar projeto** e copie o link gerado (formato `https://arcade.makecode.com/_xxxxxxxx`).
4. Para o jogo rodar na própria página, use o link de **incorporar** (embed) que o MakeCode oferece na tela de compartilhamento.

> ⚠️ Não use `https://arcade.makecode.com/` (a página inicial). Ela abre o editor, não o jogo.

**Projetos HTML/CSS/JS**

Hospede o projeto (por exemplo, GitHub Pages) e use o link da página publicada.

### 2. Tire uma capa

Print ou GIF curto do jogo rodando. Prefira uma proporção fixa (por exemplo, 16:9) e coloque o arquivo em `public/covers/<slug>.png`.

### 3. Adicione o item em `src/data/games.ts`

```ts
{
  slug: "nome-do-jogo",              // usado na URL: /games/nome-do-jogo
  titulo: "Nome do Jogo",
  descricaoCurta: "Uma frase que resume o jogo.",
  descricaoLonga: "Parágrafo explicando a ideia e o objetivo.",
  equipe: "Equipe Exemplo",          // primeiro nome, apelido ou nome de equipe
  turma: "Turma da manhã",
  tecnologia: "MakeCode Arcade",
  ano: 2026,
  link: "https://arcade.makecode.com/_xxxxxxxx",
  abertura: "embed",                 // "embed" (roda na página) ou "externo" (abre nova aba)
  capa: "/covers/nome-do-jogo.png",
  controles: "Setas para mover · A para pular",
  objetivo: "Chegue até o final sem perder todas as vidas.",
  comoFoiFeito: "Frase curta do aluno sobre o que aprendeu.",
  destaque: false,
}
```

### 4. Publique

Salve, faça o commit e publique pelo Lovable (ou pelo fluxo de deploy que você usar). O contador do acervo, os cards e a página do jogo devem se atualizar a partir da lista.

---

## 🔒 Privacidade (projeto com menores de idade)

- Exiba **apenas primeiro nome, apelido ou nome de equipe**. Nunca nome completo, turma específica com horário ou qualquer dado que identifique o aluno fora da escola.
- Combine com alunos e responsáveis, **antes** de publicar, como o nome vai aparecer.
- O site **não tem login, formulário de cadastro, comentários públicos nem rastreamento** de visitantes. Se for adicionar algo desse tipo no futuro, avalie antes as regras da escola e a LGPD.
- Jogos hospedados em plataformas externas (como o MakeCode) seguem as regras e a política de privacidade dessas plataformas.

---

## 🛠️ Rodando localmente

Pré-requisitos: [Node.js](https://nodejs.org/) (versão LTS) e npm.

```bash
# 1. Clone o repositório
git clone <URL_DO_REPOSITORIO>
cd <NOME_DA_PASTA>

# 2. Instale as dependências
npm install

# 3. Rode em modo de desenvolvimento
npm run dev
```

O site abre em `http://localhost:5173` (porta padrão do Vite).

### Outros comandos úteis

```bash
npm run build     # Gera a versão de produção
npm run preview   # Visualiza a versão de produção localmente
```

---

## 🚀 Publicação

- **Atual:** publicado pelo Lovable em `aula-game-arcade.lovable.app`.
- **Domínio próprio (opcional):** vale a pena usar um endereço mais curto e fácil de lembrar, principalmente para cartazes e QR code. O Lovable permite conectar um domínio personalizado nas configurações do projeto.
- **Alternativa:** como a build gera arquivos estáticos, também é possível hospedar em GitHub Pages, Vercel ou Netlify.

---

## 📣 Divulgação na escola

Checklist antes de anunciar:

- [ ] Todos os botões "Jogar agora" levam ao **jogo certo** (não à home do MakeCode)
- [ ] Todos os cards têm **capa**
- [ ] Nomes dos alunos conferidos e **autorizados**
- [ ] Testado em **celular** (Android e iPhone) e em computador
- [ ] Imagem de prévia (Open Graph) aparece bem ao colar o link no WhatsApp
- [ ] Página `/qr` impressa em cartaz
- [ ] Nome da escola e do professor no rodapé e na página Sobre

---

## 🗺️ Roadmap

- [ ] Concluir a centralização dos dados em `games.ts`
- [ ] Jogos embutidos na página com botão de tela cheia
- [ ] Filtros e busca quando o acervo passar de ~6 jogos
- [ ] Selo "Novo" para jogos recentes
- [ ] Seção "Jogo da semana"
- [ ] Recorde da turma por jogo (editável manualmente)
- [ ] Domínio próprio
- [ ] Coleção 2027

---

## 🎁 Peça especial: o jogo de despedida

Está nos planos um jogo feito pelo professor para se despedir da turma, a ser exposto como **Acervo nº 000**, a peça de abertura do museu. A ideia é que seja curto (3 a 5 minutos), personalizado com a turma, com fases ligadas aos conceitos vistos em aula e uma tela final com uma mensagem.

---

## 👥 Créditos

- **Idealização, aulas e manutenção do site:** _[seu nome]_
- **Escola:** _[nome da escola]_
- **Jogos:** criados pelos alunos, com os créditos indicados em cada peça.
- **Ferramentas:** MakeCode Arcade, Lovable.

---

## 📄 Licença

Defina a licença do projeto antes de abrir o repositório ao público. Sugestões:

- **Código do site:** MIT, caso queira permitir que outros professores reutilizem o modelo.
- **Jogos dos alunos:** os direitos pertencem aos autores; combine com eles e com os responsáveis como o material pode ser usado.

---

<p align="center"><i>Projeto desenvolvido durante as aulas de programação · 2026</i></p>
