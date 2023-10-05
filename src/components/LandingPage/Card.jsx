/* eslint-disable react/prop-types */
const Card = ({ prod }) => {
	const addToCart = e => {
		e.preventDefault();
	};

	return (
		<div>
			<form onSubmit={({ target }) => addToCart(target)}>
				<div>
					<p>{prod.rating}</p>
					<img src={prod.img} alt="a cup of coffe" />
				</div>
				<div>
					<p>{prod.name}</p>
					<p>{prod.ratings}</p>
				</div>
				<div>
					{prod.choice && (
						<>
							{prod.choice.map((option, id) => (
								<input
									key={id}
									type="radio"
									name="temperature"
									id={option}
								/>
							))}
						</>
					)}
					{prod.descr && (
						<>
							<p>{prod.descr}</p>
						</>
					)}
					<button type="submit">
						<img src="" alt="cart" />
					</button>
				</div>
			</form>
		</div>
	);
};

export default Card;
