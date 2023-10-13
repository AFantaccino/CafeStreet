/* eslint-disable react/prop-types */
const Card = ({ prod }) => {
  const addToCart = (e) => {
    e.preventDefault();
    console.log(e.target.temperature.value);
  };

  return (
    <div className="h-96 w-80 justify-self-center rounded-xl bg-white p-5">
      <form onSubmit={addToCart}>
        <div className="relative flex">
          <p className="absolute left-2 top-2 rounded-full bg-white p-1 font-semibold text-amber-950">
            {prod.rating} <img src="/star.svg" alt="" className="inline w-3" />
          </p>
          <img src={prod.img} alt="a cup of coffe" />
        </div>
        <div className="flex justify-between py-3">
          <p className="text-xl font-semibold text-amber-950">{prod.name}</p>
          <p className="text-2xl font-bold text-amber-950">{prod.ratings}</p>
        </div>
        <div className="flex justify-between">
          {prod.choice && (
            <div className="flex gap-3">
              {prod.choice.map((option, id) => (
                <label key={id} htmlFor={`${prod.name} ${option}`}>
                  <input
                    type="radio"
                    name="temperature"
                    id={`${prod.name} ${option}`}
                    value={`${prod.name} ${option}`}
                    className="hidden"
                  />
                  <p className="rounded-md border px-3 py-1">{option}</p>
                </label>
              ))}
            </div>
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
