const Nav = () => {
  return (
    <nav className="flex items-center justify-between">
      <img src="/logo.svg" alt="logo" />
      <ul className="flex gap-10">
        <li>
          <a href="" className="hover:text-amber-500">
            About Us
          </a>
        </li>
        <li>
          <a href="" className="hover:text-amber-500">
            Our Products
          </a>
        </li>

        <li>
          <a href="" className="hover:text-amber-500">
            Delivery
          </a>
        </li>
      </ul>
      <a href="">
        <img src="" alt="cart" />
      </a>
    </nav>
  );
};

export default Nav;
