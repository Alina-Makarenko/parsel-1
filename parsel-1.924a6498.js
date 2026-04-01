var e,a={};a=JSON.parse('[{"name":"Leonardo da Vinci","country":"Italy","born":1452,"died":1519,"style":"Renaissance","famousWorks":["Mona Lisa","The Last Supper","Vitruvian Man"]},{"name":"Vincent van Gogh","country":"Netherlands","born":1853,"died":1890,"style":"Post-Impressionism","famousWorks":["Starry Night","Sunflowers","Cafe Terrace at Night"]},{"name":"Pablo Picasso","country":"Spain","born":1881,"died":1973,"style":"Cubism","famousWorks":["Guernica","Les Demoiselles d\'Avignon","The Weeping Woman"]},{"name":"Claude Monet","country":"France","born":1840,"died":1926,"style":"Impressionism","famousWorks":["Water Lilies","Impression, Sunrise","Woman with a Parasol"]},{"name":"Frida Kahlo","country":"Mexico","born":1907,"died":1954,"style":"Surrealism","famousWorks":["The Two Fridas","Self-Portrait with Thorn Necklace","The Broken Column"]}]');let n=(e=21)=>{let a="",n=crypto.getRandomValues(new Uint8Array(e|=0));for(;e--;)a+="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict"[63&n[e]];return a};model.id=n(),document.querySelector("list").innerHTML=((e=a)&&e.__esModule?e.default:e).map(({name:e,country:a,born:o,died:r})=>`<li class="item" id="${n(5)}">
    <h2 class="title">${e}</h2>
    <h3>${a}</h3>
    <p>${r}</p>
    <p>${o}</p>
    <p></p>
</li>`).join("");
//# sourceMappingURL=parsel-1.924a6498.js.map
