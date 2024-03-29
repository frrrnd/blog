---
title: "Breakpoints em mixin com Sass"
date: 2017-03-24T20:04:43-03:00
draft: false
type: "post"
layout: "post"
tags: ['css', 'sass', 'responsivo']
---
Fazer sites responsivos não é uma tarefa fácil, a organização as vezes acaba sendo um inimigo para o desenvolvimento e a manutenção. Por isso, o desenvolvedor sempre procura um método ou técnica pra facilitar esses serviços. Trago aqui uma dica pra quem se perde em meio a media queries e ajustes responsivos.

Criaremos 1 mixin com 3 condições em SASS para ser usado no elemento que for necessário: small para smartphones, medium para tablets, e large para computadores (os valores podem ser alterados como você achar melhor).

Veja o mixin a seguir:

```css
@mixin breakpoint($name) {
    @if $name == small {
        @media (max-width: 767px) {
            @content;
        }
    }

    @else if $name == medium {
        @media (max-width: 1024px) {
            @content;
        }
    }

    @else if $name == large {
        @media (min-width: 1025px) {
            @content;
        }
    }
}
```

Tá bem fácil de entender.

“Mas como eu aplico esse mixin para os meus componentes?”

A aplicação do mixin é simples:

```css
.elemento {
    @include breakpoint(small) {
        width: 100%;
    }

    @include breakpoint(medium) {
        width: 80%;
    }
    
    @include breakpoint(large) {
        width: 50%;
    }
}

```

Esse código será compilado para:

```css
    @media (max-width: 767px) { 
	   .elemento { 
	     width: 100%; 
	   } 
	} 

	@media (max-width: 1024px) { 
	   .elemento { 
	     width: 80%; 
	   } 
	}
	 
	@media (min-width: 1025px) { 
	   .elemento { 
	     width: 50%; 
	   } 
	} 
```

Dependendo do seu layout, você não vai precisar aplicar as 3 condições para um elemento.

Esse mixin facilita na hora de você fazer um ajuste, ele concentra os estilos do elemento em um lugar só e deixa tudo organizado. Ideal pra quem usa o Atomic Design como metodologia.