# Fontes Utilizadas no Projeto Addecondominios

##  Abordagem Atual: System Fonts (Feb 2025)

> **Por que?** GitHub Pages implementa CSP (\Content-Security-Policy: default-src 'none'\) que bloqueia **todas** as requisições HTTP externas, incluindo Google Fonts. Isso é uma limitação **server-side** que não pode ser contornada via código.

### Stack de Fontes
\\\css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', 'Roboto', sans-serif;
\\\

### Benefícios
 **Zero requisições HTTP** - Sem CSP violações  
 **Máxima performance** - Fontes já no SO do usuário  
 **Renderização imediata** - Sem FOUT/FOIT  
 **100% confiável** - Não depende de redes externas  

---

##  Histórico: Tentativas Anteriores

###  Google Fonts (Bloqueado por CSP)
Tentado: \@import url('https://fonts.googleapis.com/...')\  
**Resultado**: CSP bloqueia googleapis.com 

###  Fonte Local em /assets (Bloqueado por CSP)  
Tentado: \@font-face { src: url('/assets/JosefinSans-Regular.ttf'); }\  
**Resultado**: CSP bloqueia paths 

###  Base64 Embedding (Bloqueado por CSP)
Tentado: \@font-face { src: url('data:...;base64,...'); }\  
**Resultado**: CSP trata data URIs como external 

**Lição**: CSP é header HTTP **server-side** - não pode ser contornado via cliente.

---

##  Configuração Atual (src/index.css)

\\\css
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

:root {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', 'Roboto', sans-serif;
}
\\\

---

##  Se Precisar de Fonts Customizadas

### Opção: Migrar para Netlify ou Vercel
Ambos permitem custom CSP headers.
\\\
Content-Security-Policy: default-src 'self'; font-src 'self' https://fonts.googleapis.com;
\\\

---

##  Referências CSP
- [MDN: Content-Security-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
