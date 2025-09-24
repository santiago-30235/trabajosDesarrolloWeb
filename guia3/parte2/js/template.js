const template = document.getElementById("card-template");
  const contenedor = document.getElementById("contenedor");

  const productos = [
    {
      titulo: "Laptop",
      desc: "16GB RAM",
  imagen: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80",
      price: "$7000000"
    },
    {
      titulo: "Mouse",
      desc: "Inalámbrico",
  imagen: "https://panamericana.vtexassets.com/arquivos/ids/490889/mouse-negro-inalambrico-gaming-con-luz-ms959w-6939119040840.jpg?v=638175177429270000",
      price: "$2500000"
    },
    {
      titulo: "Teclado",
      desc: "Mecánico RGB",
  imagen: "https://www.kalley.com.co/medias/7705946478533-001-1400Wx1400H?context=bWFzdGVyfGltYWdlc3w0NzMzNnxpbWFnZS93ZWJwfGFEQTVMMmd4TkM4eE5ETTJOakV5T1RVMU16UXpPQzgzTnpBMU9UUTJORGM0TlRNelh6QXdNVjh4TkRBd1YzZ3hOREF3U0F8OTUwOTg1N2IwNjcxZWZiNzBhZTc1ZmZhNTU0M2JlMDRiMGIyN2VkYzFiY2FiYzA4YzMyZWUyMGZjMzU3YTRkMQ",
      price: "$1000000"
    },
    {
      titulo: "Monitor",
      desc: "27'' 4K UHD",
  imagen: "https://images.philips.com/is/image/philipsconsumer/3b0fe009e2ce4883b552b0220060489c?wid=700&hei=700&$pnglarge$",
      price: "$3900000"
    },
    {
      titulo: "Audífonos",
      desc: "Bluetooth, cancelación de ruido",
  imagen: "https://images.philips.com/is/image/philipsconsumer/62d18834ece747c9a7ccb0c90074bd58?wid=700&hei=700&$pnglarge$",
      price: "$80000"
    }
  ];

  productos.forEach(p => {
    const clon = template.content.cloneNode(true);
    clon.querySelector(".title").textContent = p.titulo;
    clon.querySelector(".desc").textContent = p.desc;
    clon.querySelector(".product-image").src = p.imagen;
    clon.querySelector(".product-image").alt = p.titulo;
    clon.querySelector(".price").textContent = p.price;
    contenedor.appendChild(clon);
  });