# Roteiro de Apresentação: Health Sync (15 minutos)

**Membros do Grupo:** Douglas (Você), Joshua, João, Guizão, Falaschi, Matheusão
**Tempo estimado:** ~2.5 minutos por integrante
**Dica para todos:** Falem com calma, demonstrem a página durante a fala e apontem para partes específicas do código caso o professor questione.

---

## 1. Douglas (0:00 - 2:30) - Introdução e Visão Geral
* **Foco:** Apresentar a ideia do projeto, o problema que resolvemos e o impacto visual da "Hero Section".
* **O que abordar e explicar:**
  - **Apresentação do Projeto:** "Bom dia/boa noite a todos. Nós somos o grupo Health Sync e hoje viemos apresentar a landing page do nosso produto. O Health Sync nasceu da necessidade de centralizar o histórico médico dos pacientes."
  - **Diferencial:** "Além da centralização, nosso grande diferencial é a Inteligência Artificial integrada."
  - **Demonstração do Código:** Abra o arquivo `index.html` e mostre a partir da **linha 48**. "Aqui temos a estrutura da nossa 'Hero Section'. Usamos a tag semântica `<section class="hero">` para envolver a parte principal da página. Entre as linhas **57 e 62**, estruturamos os títulos `<h1>` e parágrafos `<p>` de forma limpa, garantindo a acessibilidade."
  - **Conclusão da parte:** "Como podem ver, o HTML é apenas o esqueleto, mas o deixamos bem documentado com comentários, como na linha 48, para facilitar a manutenção."

---

## 2. Joshua (2:30 - 5:00) - Estrutura HTML e Semântica
* **Foco:** Explicar a organização do documento, tags semânticas e boas práticas de estruturação.
* **O que abordar e explicar:**
  - **Visão Geral:** "Meu papel foi garantir que a base do projeto fosse sólida seguindo os padrões do HTML5."
  - **Acessibilidade e SEO:** Abra o `index.html` e mostre o topo (linhas **1 a 15**). "Aqui no `<head>`, configuramos as tags `<meta>` e o atributo `lang="pt-BR"` para SEO. Além disso, optamos por usar ícones Phosphor via CDN (linha 16), mas mantivemos as fontes padrão do sistema para maior velocidade de carregamento."
  - **Semântica:** Desça para a **linha 14**. "Aqui inicia nossa área de cabeçalho. No lugar de encher o código de `<div>` sem sentido, usamos `<nav>` para os links (linha 22) e `<footer>` no final da página (linha 177). Tudo isso é fundamental para leitores de tela e motores de busca."

---

## 3. Falaschi (5:00 - 7:30) - Estilização com CSS (Design System)
* **Foco:** Explicar como a página ficou bonita. Variáveis CSS, layout com Grid/Flexbox e paleta de cores.
* **O que abordar e explicar:**
  - **Variáveis Globais:** Abra o arquivo `style.css` na **linha 1**. "Para dar essa aparência premium (Dark Mode), nós concentramos todas as cores e fontes principais no pseudo-seletor `:root` (linhas **4 a 23**). Isso significa que se precisarmos mudar o tom principal do site, alteramos só a linha 12 e o projeto inteiro se atualiza."
  - **CSS Grid:** Desça para perto da **linha 390** (`.features`). "Na seção de funcionalidades, evitamos métodos antigos e usamos o moderno CSS Grid. Na linha 418 (`grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))`), nós fizemos uma mágica onde os cards se ajustam sozinhos dependendo do tamanho da tela, dispensando várias linhas de código."
  - **Glassmorphism:** Vá para a **linha 308** (`.glass-card`). "Nos cards e mockups, usamos o efeito de vidro (Glassmorphism), aplicando a propriedade `backdrop-filter: blur(20px)` (linha 311). Fica muito elegante e sutil."

---

## 4. Guizão (7:30 - 10:00) - Animações e Responsividade (Mobile)
* **Foco:** Mostrar a página no celular (DevTools) e explicar os efeitos visuais (Hover e CSS Keyframes).
* **O que abordar e explicar:**
  - **Efeitos de Hover:** Com o `style.css` aberto, mostre perto da **linha 430** (`.feature-card:hover`). "Nós queríamos que a página parecesse viva. Usamos pseudo-classes como o `:hover` junto com `transform: translateY(-5px)` para que os cards 'saltem' levemente quando o mouse passa por cima."
  - **Animações (Keyframes):** Vá para a **linha 570** (`.floating-element`). "Na seção 'Como Funciona', criamos pequenos cards que flutuam. Isso é feito puramente via CSS com a propriedade `animation: float 6s infinite`. A lógica desse movimento de subir e descer está detalhada nas linhas **590 a 594** no `@keyframes float`."
  - **Responsividade (Mobile-first):** Mostre a **linha 687**. "Hoje a maior parte do acesso é pelo celular. Usamos *Media Queries* como `@media (max-width: 992px)` e `@media (max-width: 768px)` (linha 725) para transformar os grids em coluna única e ativar o menu hambúrguer."

---

## 5. João (10:00 - 12:30) - Interatividade com JavaScript
* **Foco:** Mostrar que a página tem vida através de scripts. Menu mobile e scroll suave.
* **O que abordar e explicar:**
  - **Navbar Inteligente:** Abra o `main.js` na **linha 3**. "Aqui criamos a lógica do Header. Adicionamos um 'escutador' de scroll (`window.addEventListener('scroll')` na linha 6). Quando a tela desce mais de 50 pixels, aplicamos a classe CSS `.scrolled`, deixando a barra com o fundo translúcido."
  - **Menu Mobile:** Mostre da **linha 14 à 35**. "Quando estamos na versão mobile, esse script pega o clique no botão do menu (`menuToggle.addEventListener('click')` na linha 20) e adiciona a classe `.active`. Também travamos o scroll da página (`document.body.style.overflow = 'hidden'`) para o usuário não ficar rolando a página de fundo acidentalmente."
  - **Scroll Suave:** Vá para a **linha 66**. "Para a navegação interna, interceptamos os cliques nos links com âncoras (linha 68) e usamos a função `window.scrollTo()` com o comportamento `smooth`. Além disso, compensamos a altura fixa do header na linha 78 (`headerOffset = 80`) para o título não ficar escondido debaixo dele."

---

## 6. Matheusão (12:30 - 15:00) - Intersection Observer e Conclusão
* **Foco:** Fechamento de ouro. Explicar o efeito dos elementos surgindo na tela e finalizar a apresentação.
* **O que abordar e explicar:**
  - **Animações ao Rolar (Intersection Observer):** Mantenha o `main.js` aberto na **linha 37**. "Um dos grandes destaques do nosso código é que os elementos 'nascem' na tela conforme rolamos para baixo. Em vez de entupir o site com bibliotecas gigantescas do jQuery, usamos a API nativa do JavaScript chamada *Intersection Observer*."
  - **A Lógica:** "Na linha 45 instanciamos o Observer. Ele verifica (`!entry.isIntersecting` na linha 47) se o elemento apareceu na tela. Se sim, ele entra no bloco `else` (linha 49) e adiciona a classe CSS `.active` que criamos para isso."
  - **Conexão com CSS:** "O CSS faz o resto do trabalho. No arquivo `style.css` (perto da **linha 662**), criamos as classes de animação (`.reveal-up`, `.reveal-left`) com opacidade zero. Quando o JS aplica a classe `.active` (linha 682), a opacidade vira 1 e o elemento desliza suavemente para a posição original."
  - **Encerramento:** "Concluindo, criamos um projeto completo e profissional sem depender de frameworks pesados, provando que dominar o básico bem feito — HTML semântico, CSS avançado com variáveis/grid e JavaScript nativo — gera um resultado incrível. Obrigado e estamos abertos a perguntas!"
