---
title: "nth-of-type"
date: 2022-11-13T21:06:19-03:00
draft: false
type: "page"
layout: "post"
tags: ['css', 'nth-of-type', 'pseudo-class']
---

nth-of-type é uma [pseudo-classe] que identifica os elementos baseados em sua posição entre *irmãos* do mesmo tipo. (nome da tag)

### Syntaxe

`:nth-of-type( <an -plus- b> | even | odd )`

### Exemplo

```html
<div>
    <div>Essa div não conta.</div>
    <p>Primeiro paragrafo.</p>
    <p class="color">Segundo paragrafo.</p>
    <div>Essa não conta também.</div>
    <p class="color">Terceiro paragrafo.</p>
    <p>Ultimo paragrafo.</p>
</div>
```

```css
/* Paragrafos ímpares */

p:nth-of-type(2n+1) {
    color: red;
}

/* Paragrafos pares */

p:nth-of-type(2n) {
    color: blue;
}

/* Primeiro paragrafo */

p:nth-of-type(1) { 
    font-weight: bold;
}

/* Esse pega o terceiro paragrafo combinando com os elementos em 2n+1 e
com a classe 'color'.
O segundo paragrafo tem a classe 'color' mas não faz parte do 2n+1 */

p.color:nth-of-type(2n+1) {
    text-decoration: underline;
}
```

Exemplo no [codepen.](https://codepen.io/frrrnd/pen/MWXoazw)