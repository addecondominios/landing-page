# SPA Routing Guide

## Produção (GitHub Pages)

O site usa **clean URLs** em produção com redirecionamento automático via `404.html`:

- ✅ `https://addecondominios.com.br/privacy` → redireciona para `/#/privacy`
- ✅ `https://addecondominios.com.br/terms` → redireciona para `/#/terms`

**Como funciona:**
1. GitHub Pages tenta servir a URL `https://addecondominios.com.br/privacy`
2. Como `/privacy` não é um arquivo real, GitHub Pages retorna 404
3. GitHub Pages serve `docs/404.html` automaticamente
4. Script em `404.html` detecta o pathname e redireciona para hash route (`/#/privacy`)

> **Importante:** Espere 2-3 minutos após fazer push para GitHub Pages sincronizar os arquivos.

---

## Desenvolvimento Local

### Opção 1: Usar Hash Routes (rápido)

```bash
npm run dev
# Abrir: http://localhost:8084/#/privacy
```

### Opção 2: Testar com Clean URLs (como em produção)

Após fazer alterações:

```bash
npm run build      # Compila e garante 404.html
npm run serve      # Inicia servidor com SPA routing
# Abrir: http://localhost:8080/privacy (sem /#/)
```

O comando `npm run serve` usa `http-server` com a flag `--spa` que automaticamente serve `404.html` para rotas não encontradas.

---

## Troubleshooting

**P: Links não funcionam no localhost com `npm run dev`**
- R: No dev server do Vite, use hash routes: `http://localhost:8084/#/privacy`

**P: Em produção, continua mostrando /#/**
- R: Limpe o cache do navegador ou abra em uma aba anônima
- Verifique se `docs/404.html` existe: `Test-Path "docs/404.html"`
- Espere 5 minutos para GitHub Pages sincronizar

**P: `npm run build` retorna erro**
- R: Certifique-se de que `public/404.html` existe
- Verifique se não há arquivos corrompidos em `public/`

---

## Estrutura de Arquivos

```
landing-page/
├── public/
│   ├── 404.html          ← Source file (vite copia para docs/)
│   ├── fonts...
│   └── ...
├── docs/                 ← GitHub Pages output (substitui public/404.html)
│   ├── 404.html          ← Gerado automaticamente (não editar diretamente)
│   ├── index.html
│   ├── CNAME
│   └── assets/
├── package.json
└── viyte.config.ts       ← Configura outDir: "docs"
```

> **Nota:** Não edite `docs/404.html` diretamente. Sempre edite `public/404.html` e deixe o script pós-build sincronizar.
