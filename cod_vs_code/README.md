# 🗂️ Portfólio Pessoal

Site de portfólio pessoal desenvolvido com **HTML5**, **CSS3 puro** e **JavaScript vanilla** — sem frameworks.

## 📁 Estrutura de arquivos

```
portfolio/
├── index.html        → redireciona para sobre.html
├── sobre.html        → Página "Sobre Mim"
├── formacao.html     → Página "Formação"
├── portfolio.html    → Página "Portfólio" (com filtro JS)
├── contato.html      → Página "Contato" (com validação JS)
├── style.css         → Estilos compartilhados (CSS3 puro)
├── script.js         → JavaScript compartilhado (vanilla)
└── README.md
```

## ✅ Tecnologias utilizadas

- **HTML5** — estrutura semântica (`<nav>`, `<main>`, `<article>`, `<footer>`)
- **CSS3** — variáveis CSS, Grid, Flexbox, animações, media queries, sem frameworks
- **JavaScript** — DOM puro, validação de formulário, filtro de projetos, máscara de telefone

## 🚀 Como publicar no GitHub Pages

### Passo 1 — Crie o repositório
1. Acesse [github.com](https://github.com) e faça login
2. Clique em **New repository**
3. Nome sugerido: `portfolio` ou `seuusuario.github.io`
4. Marque como **Public**
5. Clique em **Create repository**

### Passo 2 — Envie os arquivos
```bash
# No terminal, dentro da pasta do projeto:
git init
git add .
git commit -m "feat: portfólio inicial"
git branch -M main
git remote add origin https://github.com/SEUSUSUARIO/SEUREPOSITORIO.git
git push -u origin main
```

### Passo 3 — Ative o GitHub Pages
1. No repositório, clique em **Settings**
2. Menu lateral → **Pages**
3. Em "Source", selecione **Deploy from a branch**
4. Branch: **main** · Pasta: **/ (root)**
5. Clique em **Save**

### Passo 4 — Acesse seu site
Após alguns minutos, seu site estará em:
```
https://SEUSUSUARIO.github.io/SEUREPOSITORIO/
```

## ✏️ Como personalizar

| O que alterar | Onde |
|---|---|
| Seu nome | `sobre.html` → `<h1>` e todos os `<footer>` |
| Foto | `sobre.html` → substitua `.avatar-placeholder` por `<img>` |
| Habilidades | `sobre.html` → `.skills-strip` |
| Formação / cursos | `formacao.html` → `.timeline` e `.cert-grid` |
| Projetos | `portfolio.html` → `.projects-grid` |
| E-mail / redes | `contato.html` → `.contact-list` |
| Cores / fontes | `style.css` → `:root { --accent: ... }` |

## 📱 Responsividade

O layout é responsivo com breakpoints em **768px** e **480px**.
No mobile, o menu colapsa em hamburguer (☰) animado.
