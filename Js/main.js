const productos=`[
    
    {
        "titulo":"pantalon jean",
      "url":"./img/imgcatalogo/jeans1.png",
      "categoria": "pantalon"
    },

    {
        "titulo": "pantalon oxford",
        "url": "./img/imgcatalogo/jeans2.png",
        "categoria": "pantalon"
    },

    {
        "titulo":"pantalon mommy",
        "url":"./img/imgcatalogo/jeans3.png",
        "categoria": "pantalon"

    },
    {
        "titulo":"pantalon rosa",
        "url":"./img/imgcatalogo/jeans4.png",
        "categoria": "pantalon"
    },
    {
        "titulo":"pantalon blanco",
        "url":"./img/imgcatalogo/jeans5.png",
        "categoria": "pantalon"
    },
    {
        "titulo":"pantalon celeste",
        "url":"./img/imgcatalogo/jeans6.png",
        "categoria": "pantalon"
    },
    {
        "titulo":"pantalon c/ rotura",
        "url":"./img/imgcatalogo/jeans7.png",
        "categoria": "pantalon"
    },
    {
        "titulo":"pantalon negro",
        "url":"./img/imgcatalogo/jeans8.png",
        "categoria": "pantalon"
    },
    {
        "titulo":"pantalon gris c/rotura",
        "url":"./img/imgcatalogo/jeans9.png",
        "categoria": "pantalon"
    },
    {
        "titulo":"pantalon celeste c/rotura",
        "url":"./img/imgcatalogo/jeans10.png",
        "categoria": "pantalon"
    },
    {
        "titulo":"pantalon mom",
        "url":"./img/imgcatalogo/jeans11.png",
        "categoria": "pantalon"
    },
    {
        "titulo":"pantalon mom ",
        "url":"./img/imgcatalogo/jeans12.png",
        "categoria": "pantalon"
    },
    
    {
        "titulo":"pantalon mommy gris",
        "url":"./img/imgcatalogo/jeans13.png",
        "categoria": "pantalon"
    },
    {
        "titulo":"pantalon mom blanco",
        "url":"./img/imgcatalogo/jeans14.png",
        "categoria": "pantalon"
    },
    {
        "titulo":"pantalon blanco",
        "url":"./img/imgcatalogo/jeans15.png",
        "categoria": "pantalon"
    },
    {
        "titulo":"top1",
        "url":"./img/imgcatalogo/remeras1.png",
        "categoria": "remerasytop"
    },
    {
        "titulo":"top2",
        "url":"./img/imgcatalogo/top2.png",
        "categoria": "remerasytop"
    },
    {
        "titulo":"top3",
        "url":"./img/imgcatalogo/top3.png",
        "categoria": "remerasytop"
    },
    {
        "titulo":"top4",
        "url":"./img/imgcatalogo/top4.png",
        "categoria": "remerasytop"
    },
    {
        "titulo":"top5",
        "url":"./img/imgcatalogo/top5.png",
        "categoria": "remerasytop"
    },
    {
        "titulo":"top6",
        "url":"./img/imgcatalogo/top6.png",
        "categoria": "remerasytop"
    },
    {
        "titulo":"top7",
        "url":"./img/imgcatalogo/top7.png",
        "categoria": "remerasytop"
    },
    {
        "titulo":"top2",
        "url":"./img/imgcatalogo/top8.png",
        "categoria":"remerasytop"
    }

]`

console.log(JSON.parse(productos))

const object= JSON.parse(productos)

const aspx = document.getElementById("cards");


object.forEach((res) =>{
    aspx.insertAdjacentHTML("beforeend",
    `
   
        <div class="card  m-4 "  style="width: 18rem;">
        <img src=${res.url}  width="100px" height="450px" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 id="titulo" class="card-title">${res.titulo}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <div id="liveAlertPlaceholder">
        <a href="#" class="btn btn-primary" id="liveAlertBtn">Agregar al carrito</a>
        </div>
   
    `)
});