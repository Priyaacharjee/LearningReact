const productList = [
    {
      id: 1,
      img: "data:image/jpeg;base64,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",
      name: "Wireless Headphones",
      rating:"4.7",
      price: "$49.99",
      description: "Noise-cancelling over-ear wireless headphones with long battery life."
    },
    {
      id: 2,
      img: "https://via.placeholder.com/150",
      name: "Smart Watch",
      rating:"4.5",
      price: "$99.99",
      description: "Fitness tracker with heart rate monitor and GPS."
    },
    {
      id: 3,
      img: "https://via.placeholder.com/150",
      name: "Bluetooth Speaker",
      rating:"4.2",
      price: "$29.99",
      description: "Portable speaker with deep bass and 10-hour playtime."
    },
    {
      id: 4,
      img: "https://via.placeholder.com/150",
      name: "Gaming Mouse",
      rating:"3.7",
      price: "$39.99",
      description: "Ergonomic design with customizable RGB lighting."
    },
    {
      id: 5,
      img: "https://via.placeholder.com/150",
      name: "Laptop Stand",
      rating:"4.6",
      price: "$19.99",
      description: "Aluminum adjustable stand for laptops up to 17 inches."
    }
  ];
  
  export default productList;
  