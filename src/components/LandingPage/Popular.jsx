import Card from "./Card";

const Popular = () => {
  const products = [
    {
      name: "Vanilla Latte",
      ratings: "21 K",
      img: "/card-coffe.png",
      rating: "4.8",
      choice: ["Hot", "Cold"],
    },
    {
      name: "Espresso",
      ratings: "12 K",
      img: "/card-coffe.png",
      rating: "4.8",
      choice: ["Hot", "Cold"],
    },
    {
      name: "Hazelnut Latte",
      ratings: "23 K",
      img: "/card-coffe.png",
      rating: "4.8",
      choice: ["Hot", "Cold"],
    },
  ];

  return (
    <div className="mt-64 flex flex-col gap-6">
      <div>
        <p className="text-2xl font-semibold">
          Popular <span className="underline">Now</span>
        </p>
      </div>
      <div className="grid grid-cols-3">
        {products.map((prod, id) => (
          <Card key={id} prod={prod} />
        ))}
      </div>
    </div>
  );
};

export default Popular;
