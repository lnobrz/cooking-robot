const Header = () => {
  return (
    <nav className="h-28 flex flex-row justify-between items-center bg-lightRed">
      <img
        src="/assets/images/logo.png"
        alt="cooking robot's logo"
        className="w-20 h-20 ml-16"
      />
      <img
        src="/assets/icons/cart-icon.svg"
        alt="shopping cart icon"
        className="w-8 h-8 mr-16"
      />
    </nav>
  );
};

export default Header;
