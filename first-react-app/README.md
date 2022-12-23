## 23-12-22

### Esercizi
- Creare una nuova app, che all'interno abbia una `todo list`;
- Avremo un componente `<TodoList>` che all'interno avrà:
    - <ul> che contiene una lista di 6 elementi statici; ```[{label: 'a'},...]```;
    - Ogni elemento statico verrà renderizzato con un `items.map(...)`;
    - Per ogni elemento avremo un bottone per impostare l'item a [done];
    - Cliccando sul button lo imposteremo a done;
L'importante non sarà avere un state con tutto incorporato, ma che visivamente funzioni e che avremo almeno uno state per ogni elemento della lista.

Suggerimento di svolgimento:
```jsx

function TodoItem ({ label }){
    const isDone = useState(false);

    return // ....
}

function TodoList (){
    const items = [...];

    return ( item.map(item => <TodoItem ... />) )
}

```

### Riferimenti

- Localstorage/Session/Cookie


## 22-12-22

### Esercizi
- Creare un componente `<Header />` e un comp. `<Footer />`; 
- Nel componennte `<Header />` stampare una lista di link, partendo da un array statico; (tip: array.map)
- Creare un componente `<Layout>` che abbia al proprio interno: 
 - Header (comp);
 - <main> (html puro) al cui interno proiettiamo {children};
 - Footer (comp);
- All'interno di App usare il componente Layout per riuscire a nascondere elementi che ci servirebbero in tutto il sito (header, footer, ...);


### Riferimenti

SASS:
- Learn: https://sass-lang.com/guide
- Come aggiungerlo in CRA: https://create-react-app.dev/docs/adding-a-sass-stylesheet/ 

TailwindCSS
- Tailwind: https://tailwindcss.com/ 
- Libreria componenti tailwindcss: https://www.hyperui.dev/ 

CSS functions:
- min/max/clamp: https://developer.mozilla.org/en-US/docs/Web/CSS/clamp 

Rimuovere node_modules facilmente: 
- Da terminale `npx npkill`: https://www.npmjs.com/package/npkill

----

## 21-12-22

### Esercizi:
- Modificare il componente Button in modo da gestire diversi stili passati da un prop `variant`;
- Aggiungere 2/3 diversi bottoni in `App.js` e per ognuno al click mostrare qualcosa di diverso in `console`;
- Creare un componente `Text` che tramite una prop `as` possa renderizzare diversi elementi (`polimorfico`);


### Riferimenti

Fondamentali:
- HTML dataset: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset
- JS falsy: https://developer.mozilla.org/en-US/docs/Glossary/Falsy

Librerie:
- Libreria utile per gestire le classsi dinamiche: https://www.npmjs.com/package/classnames

Miscellaneus:
- Tool per conoscere il peso di una libreria: https://bundlephobia.com/

Siti per mettere online il nostro codice:
- Vercel: https://vercel.com/
- Render: https://render.com/
- Netlify: https://www.netlify.com/

----

## 20-12-22

### Esercizi:
- Creare una mini applicazione che stampi a video "Hello World" e che sia eseguibile
- Creare un componente Button.jsx che stampi a console "Hello World" quando viene cliccato
- Aggiungere Button.jsx al componente App.jsx e renderizzarlo a video

### Spunti della lezione:

Bundlers: Webpack, Rollup, Vite, Parcel, Snowpack
- Webpack: https://webpack.js.org/
- Rollup: https://rollupjs.org/guide/en/
- Vite: https://vitejs.dev/
- Parcel: https://parceljs.org/
- Snowpack: https://www.snowpack.dev/

Strutturare un progetto, pattern e convenzioni:
- Pattern 7-1 per gli stili: https://www.learnhowtoprogram.com/user-interfaces/building-layouts-preprocessors/7-1-sass-architecture
- Atomic design: https://bradfrost.com/blog/post/atomic-web-design/

Accessibilità:
- WCAG https://www.w3.org/WAI/standards-guidelines/wcag/

Unità di misura in CSS
- px, em, rem, vh, vw, vmin, vmax, ...: https://www.w3schools.com/cssref/css_units.asp



