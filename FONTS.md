# Fontes Utilizadas no Projeto Addecondominios

## 🔗 Links das Fontes

### Google Fonts - Josefin Sans
**URL**: `https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap`

**Pesos suportados**:
- 100 (Thin)
- 200 (Extra Light)
- 300 (Light)
- 400 (Regular)
- 500 (Medium)
- 600 (Semi Bold)
- 700 (Bold)

**Estilos**: Normal e Itálico

**Nome da Fonte**: `Josefin Sans`

**Caso de Uso**: Fonte principal do corpo do texto e headings

---

### Font Local - Arbotek Light Rounded
**Arquivo**: `fonnts.com-Arbotek_Light_Rounded.otf`

**Caminho no Projeto**: `/src/assets/fonnts.com-Arbotek_Light_Rounded.otf`

**Caminho em Produção**: `/assets/fonnts.com-Arbotek_Light_Rounded.otf`

**Nome da Fonte**: `Arbotek`

**Formato**: OpenType (.otf)

**Pesos**: 100-900

**Caso de Uso**: Fonte decorativa/complementar

---

## 📝 Configuração

### No CSS (src/index.css)
```css
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');

@font-face {
  font-family: 'Arbotek';
  src: url('/assets/fonnts.com-Arbotek_Light_Rounded.otf') format('opentype');
  font-weight: 100 900;
  font-style: normal;
}
```

### No Tailwind Config (tailwind.config.ts)
```typescript
extend: {
  fontFamily: {
    montserrat: ["Josefin Sans", "sans-serif"],
  },
}
```

---

## ✅ Verificação de Fontes

Para testar se as fontes são carregadas corretamente:

1. **Abra o DevTools** (F12)
2. **Vá para aba "Network"**
3. **Procure por**: 
   - `fonts.googleapis.com` - Deve retornar **200 OK**
   - `fonnts.com-Arbotek_Light_Rounded.otf` - Deve retornar **200 OK**
4. **Vá para aba "Console"** - Não deve haver erros 404 relacionados a fontes

---

## 🔍 Solução de Problemas

### Se aparecer erro 404 da Arbotek:
- Verificar se o arquivo existe em `/src/assets/`
- Confirmar que o build está gerando em `/docs/assets/`
- Executar: `npm run build && npm run preview`

### Se aparecer erro 404 do Google Fonts:
- Verificar conexão com internet
- Confirmar URL está correta em `src/index.css`
- Pode ser bloqueado por CSP (veja AUDITORIA.md)

### Fallback de Fontes:
Se as fontes externas não carregarem:
```css
font-family: "Josefin Sans", system-ui, -apple-system, sans-serif;
```
