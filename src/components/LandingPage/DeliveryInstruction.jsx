const DeliveryInstruction = () => {
  const instructions = [
    {
      img: "#",
      title: "choose your coffe",
      descr: "there are 20+ coffe for you",
    },
    {
      img: "#",
      title: "we delivery it to you",
      descr: "Choose delivery service",
    },
    {
      img: "#",
      title: "Enjoy your coffee",
      descr: "Choose delivery service",
    },
  ];

  return (
    <div>
      <div>
        <p className="text-2xl font-semibold">
          How to use delivery <span className="underline">service</span>
        </p>
      </div>
      <div>
        {instructions.map((instr, id) => (
          <div key={id}>
            <div>
              <img src={instr.img} alt="a cup of coffe" />
              <div>
                <p>{instr.title}</p>
                <p>{instr.descr}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeliveryInstruction;
