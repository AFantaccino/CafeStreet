import Card from "./Card";

const Menu = () => {
  const products = [
    {
      name: "Vanilla Latte",
      ratings: "21 K",
      img: "/card-coffe.png",
      rating: "4.8",
      descr: "Coffe with ice cream vanilla",
    },
    {
      name: "Vanilla Latte",
      ratings: "21 K",
      img: "/card-coffe.png",
      rating: "4.8",
      descr: "Coffe with ice cream vanilla",
    },
    {
      name: "Vanilla Latte",
      ratings: "21 K",
      img: "/card-coffe.png",
      rating: "4.8",
      descr: "Coffe with ice cream vanilla",
    },
    {
      name: "Vanilla Latte",
      ratings: "21 K",
      img: "/card-coffe.png",
      rating: "4.8",
      descr: "Coffe with ice cream vanilla",
    },
    {
      name: "Vanilla Latte",
      ratings: "21 K",
      img: "/card-coffe.png",
      rating: "4.8",
      descr: "Coffe with ice cream vanilla",
    },
    {
      name: "Vanilla Latte",
      ratings: "21 K",
      img: "/card-coffe.png",
      rating: "4.8",
      descr: "Coffe with ice cream vanilla",
    },
  ];

  return (
    <div>
      <div>
        <h2>Special menu for you</h2>
      </div>
      <div className="grid grid-cols-3">
        {products.map((prod, id) => (
          <Card key={id} prod={prod} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
