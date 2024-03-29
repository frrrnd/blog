---
title: "Tipografia com PX, EM e REM"
date: 2022-11-29T13:29:45-03:00
draft: false
type: "post"
layout: "post"
tags: ['css', 'tipografia']
---

As unidades de medidas pra definir a tipografia em css podem ser classificadas em dois grupos: **Relativas** e **Absolutas**.

O mais conhecido, sem dúvidas, é o px. Mas em um mundo onde temos vários dispositivos de tamanhos e telas diferentes, o ideal é não trabalhar com valores absolutos, ou seja, nossas medidas devem ser flexíveis pra funcionar da melhor forma possível em qualquer tamanho de tela. Aí é onde entram as unidades relativas “em” e “rem”.

## PX

Pixels são unidades fixas no documento. Não são relativas a nenhum outro elemento e não dependem de nenhuma outra unidade ou variação. Vai ser sempre do tamanho definido.

```css
.heading {
	font-size: 22px;
}
```

Nesse caso, nosso `.heading` vai ter o font-size de 22px independente do tamanho da tela, do elemento pai ou do documento, já que está usando uma unidade **absoluta**.

> A maioria dos navegadores modernos têm como padrão 16px para o tamanho do font-size.
> 

## REM

São as unidades relativas ao elemento raiz do documento html, que é a tag `<html>`.

Sabendo que o valor padrão do nosso elemento raiz é 16px (se não for alterado), podemos trabalhar com a ideia de que 1rem = 16px.

Nosso `.heading` ficaria assim:

```css
.heading {
	font-size: 2rem ; /* 2 * 16px = 32px */
}

/* Outro valor */
.heading {
	font-size: 1.5rem; /* 1.5 * 16px = 24px */
}
```

Pra não ter que ficar calculando os valores de REM toda hora, existe um hackzinho que facilita muito no uso dele.

```css
html {
	font-size: 62.5%; /* Muda o default de 16px pra 10px */
}

body {
	font-size: 1.4rem; /* 14px */
}

h1 {
	font-size: 1.6rem; /* 16px */
}
```

Existem ferramentas pra ajudar na conversão, como essa <a target="_blank" href="https://nekocalc.com/px-to-rem-converter">calculadora</a> e até uma <a target="_blank" href="https://marketplace.visualstudio.com/items?itemName=sainoba.px-to-rem">extensão</a> para VS Code.

## EM

Unidade também relativa, mas nesse caso, ao elemento **pai** e não ao elemento raíz.

```html
<article>
	<h1>Heading</h1> <!-- 2 * 28px = 56px -->

	<section>
		<h1>Subheading</h1> <!-- 2 * 22px = 44px -->
	</section>

</article>

<style>

/* Elementos pais */
article {
	font-size: 28px;
}

section {
	font-size: 22px;
}

/* Elemento filho */
h1 {
	font-size: 2em;
}

</style>
```

Se tivéssemos mais elementos agrupados um dentro do outro, o elemento filho segue o pai do level acima. Aqui fica mais confuso, por isso **em** é mais fácil de se perder.

## Acessibilidade

Se o usuário der zoom no navegador, os elementos com REM e PX continuarão do mesmo tamanho.

Agora, se o usuário alterar as configurações do navegador e mudar o tamanho padrão dele de 16px pra qualquer outro valor, o elemento que for definido com REM começa com o padrão que o usuário definiu e irá mudar proporcionalmente conforme o zoom que ele der, e o elemento que estiver com px só irá mudar quando ele der o zoom.

## Concluindo

Use REM para interfaces escaláveis. REM e PX escalam o zoom da mesma forma, mas o REM se baseia nas preferências do usuário primeiro. Use EM somente quando um elemento deve ser escalado conforme o seu pai. REM é **acessibilidade**. **✨**