const tshirts = [
  {
    title: 'Blue T-Shirt',
    image: 'images/blue-t-shirt.jpg',
    price: 7.99,
    stock: 4,
    quantity: 1
  },
  {
    title: 'Bright Purple T-Shirt',
    image: 'images/bright-purple-t-shirt.jpg',
    price: 5.99,
    stock: 1,
    quantity: 1
  },
  {
    title: 'Cobalt Blue T-Shirt',
    image: 'images/cobalt-blue-t-shirt.jpg',
    price: 9.99,
    stock: 5,
    quantity: 1
  },
  {
    title: 'Green T-Shirt',
    image: 'images/green-t-shirt.jpg',
    price: 6.99,
    stock: 0,
    quantity: 1
  },
  {
    title: 'Grey T-Shirt',
    image: 'images/blue-t-shirt.jpg',
    price: 4.99,
    stock: 2,
    quantity: 1
  },
  {
    title: 'Light Green T-Shirt',
    image: 'images/light-green-t-shirt.jpg',
    price: 7.99,
    stock: 4,
    quantity: 1
  },
  {
    title: 'Purple T-Shirt',
    image: 'images/purple-t-shirt.jpg',
    price: 7.99,
    stock: 0,
    quantity: 1
  },
  {
    title: 'Red T-Shirt',
    image: 'images/red-t-shirt.jpg',
    price: 6.99,
    stock: 3,
    quantity: 1
  },
  {
    title: 'Teal T-Shirt',
    image: 'images/teal-t-shirt.jpg',
    price: 7.99,
    stock: 2,
    quantity: 1
  }
]


const container = document.getElementById("tshirt-container");

tshirts.forEach((shirt) => {
  const card = document.createElement("div");
  card.className = "card";

  const img = document.createElement("img");
  img.src = shirt.image;
  img.alt = shirt.title;

  const title = document.createElement("h3");
  title.textContent = shirt.title;

  const price = document.createElement("p");
  price.textContent = `$ ${shirt.price.toFixed(2)}`;

  const stock = document.createElement("p");
  if (shirt.stock > 0) {
    stock.textContent = shirt.stock + " left!";
  } else {
    stock.textContent = "Out of Stock";
  }

  card.appendChild(img);
  card.appendChild(title);
  card.appendChild(price);
  card.appendChild(stock);

  if (shirt.stock > 0) {
    const select = document.createElement("select");
    for (let i = 1; i <= shirt.stock; i++) {
      const option = document.createElement("option");
      option.value = i;
      option.textContent = i;
      select.appendChild(option);
    }

    const button = document.createElement("button");
    button.textContent = "Buy";

    

    button.onclick = function() {
       const qty = parseInt(select.value);

      if (qty <= shirt.stock) {
        shirt.stock -= qty;

        if (shirt.stock > 0) {
          stock.textContent = shirt.stock + " left!";

          select.innerHTML = "";
          for ( let j = 1; j <= shirt.stock; j++) {
            const option = document.createElement("option");
            option.value = j;
            option.textContent = j;
            select.appendChild(option);
          }
        } else {
          stock.textContent = "Out of Stock";
          select.remove();
          button.remove();
        }
      }
    };

    card.appendChild(select);
    card.appendChild(button);
  }

   container.appendChild(card);
});