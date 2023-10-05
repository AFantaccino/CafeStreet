import Card from "./Card";

const Popular = () => {
	const products = [
		{
			name: "Vanilla Latte",
			ratings: "21 K",
			img: "#",
			rating: "4.8",
			choice: ["hot", "cold"]
		},
		{
			name: "Espresso",
			ratings: "12 K",
			img: "#",
			rating: "4.8",
			choice: ["hot", "cold"]
		},
		{
			name: "Hazelnut Latte",
			ratings: "23 K",
			img: "#",
			rating: "4.8",
			choice: ["hot", "cold"]
		}
	];

	return (
		<div>
			<div>
				<h2>Popular Now</h2>
			</div>
			<div>
				{products.map((prod, id) => (
					<Card key={id} prod={prod} />
				))}
			</div>
		</div>
	);
};

export default Popular;
