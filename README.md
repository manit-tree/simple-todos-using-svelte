# Simple Todos App using Svelte

Mini project for learning how to use Svelte

### App.svelte

```svelte
<script>
    let counter = 0;
    let input;

    let items = $state([
        {id: counter++, title:'Read a Book'},
        {id: counter++, title:'Hang out with friends'},
        {id: counter++, title:'Go to shopping'}
    ])

    function add_item(evt) {
        if (evt.key == 'Enter') {
            let text = input.value.trim();

            if (text) {
                items.push({
                    id: counter++,
                    title: text
                })
                
                input.value = '';
            }
        }
    }

    function remove_item(evt) {
        evt.preventDefault();

        let li = evt.target.closest('li');
        let id = li.getAttribute('data-id');

        items =  items.filter(item => {
            return item.id != id;
        })
    }

    $effect(() => {
        console.log('effect executed!');       

        input.focus();
    })
</script>

<main>
    <h1>Todos</h1>
    <input type="text" onkeydown={add_item} bind:this={input}/>
    <ul>        
        {#each items as item}
        <li data-id="{item.id}"><span>{item.title}</span><a href={'#'} onclick={remove_item}>x</a></li>
        {/each}
    </ul>
</main>

<style>
main {
    width: 440px;
    display: flex;
    flex-direction: column;
    gap: 1em;

    h1 {
        align-self: center;
    }

    input[type="text"] {
        width: 100%;
        padding: 0.5em 1em;
        outline: 0;
        border: 0;
        border-radius: 14px;
        box-sizing: border-box;
    }

    ul {
        list-style: none;
        padding: 0;

        li {
            border-bottom: 1px solid var(--divider-color);
            padding: 0.5em 0;
            display: flex;
            justify-content: space-between;
        
            &:last-child {
                border-bottom: 0;
            }

            a {
                color: red;
                text-decoration: none;
            }
        }
    }
}
</style>
```

### package.json

```json
{
  "name": "todos",
  "description": "This is a simple todos app using svelte",
  "version": "1.0.0",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build"
  },
  "keywords": [],
  "author": "",
  "license": "MIT",
  "devDependencies": {
    "@sveltejs/vite-plugin-svelte": "^4.0.0",
    "svelte": "^5.0.5",
    "vite": "^5.4.8",
    "lightningcss": "^1.25.1",
    "vite-plugin-css-injected-by-js": "^3.4.0"
  }
}
```

### vite.config.js

```.js
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  plugins: [
    cssInjectedByJsPlugin(),
    svelte()
  ],
  css: {
    transformer: 'lightningcss',
  },
  build: {
    outDir: './dist',
    minify: true,
    sourcemap: false,
    emptyOutDir: true,   
  }
})
```
