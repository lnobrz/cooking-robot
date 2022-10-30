import { useState } from "react";

const MenuItems = () => {
  const items = [
    [
      {
        name: "Spaghetti À La Moidé",
        price: 89.99,
        category: "pastas",
        image: "/assets/images/pasta-1.webp",
        imageDescription: "pasta",
      },
      {
        name: "À La Tomatté",
        price: 104.25,
        category: "pastas",
        image: "/assets/images/pasta-2.webp",
        imageDescription: "pasta",
      },
      {
        name: "Di Veganni",
        price: 285.89,
        category: "pastas",
        image: "/assets/images/pasta-3.webp",
        imageDescription: "pasta",
      },
      {
        name: "Shoyu Showme",
        price: 107.48,
        category: "pastas",
        image: "/assets/images/pasta-5.webp",
        imageDescription: "pasta",
      },
      {
        name: "Frutti Di Marí",
        price: 37.25,
        category: "pastas",
        image: "/assets/images/pasta-6.webp",
        imageDescription: "pasta",
      },
      {
        name: "El Verdo",
        price: 455.87,
        category: "pastas",
        image: "/assets/images/pasta-7.webp",
        imageDescription: "pasta",
      },
      {
        name: "Lavaggio",
        price: 57.88,
        category: "pastas",
        image: "/assets/images/pasta-8.webp",
        imageDescription: "pasta",
      },
      {
        name: "Spratinno",
        price: 125.87,
        category: "pastas",
        image: "/assets/images/pasta-9.webp",
        imageDescription: "pasta",
      },
      {
        name: "Partittian A Pa Vue",
        price: 88.89,
        category: "pastas",
        image: "/assets/images/pasta-10.webp",
        imageDescription: "pasta",
      },
      {
        name: "Le Bruk",
        price: 83.27,
        category: "pastas",
        image: "/assets/images/pasta-11.webp",
        imageDescription: "pasta",
      },
      {
        name: "Tittomino",
        price: 325.89,
        category: "pastas",
        image: "/assets/images/pasta-12.webp",
        imageDescription: "pasta",
      },
    ],
  ];

  const [isMenuFullyOpen, setIsMenuFullyOpen] = useState(false);

  const handleClick = () => {
    const container = document.getElementById("menuItemsContainer");
    container.classList.toggle("h-full");
    setIsMenuFullyOpen(!isMenuFullyOpen);
  };

  return (
    <div className="flex flex-col justify-center items-center rounded-lg bg-softWhite mx-16 my-16">
      <div
        className="w-full flex justify-center h-534 overflow-hidden	items-start flex-wrap gap-7 mt-16"
        id="menuItemsContainer"
      >
        {items[0].map((item) => (
          <div className="w-72 h-60	grid grid-cols-12 grid-rows-6 gap-x-1">
            <img
              src={item.image}
              alt={item.imageDescription}
              className="w-72 h-48 max-w-full max-h-full bg-cover	col-span-full	row-start-1 row-end-5"
            />
            <p className="font-display font-black mt-1 col-span-full row-start-5 row-end-5">
              {item.name}
            </p>
            <p className="text-base font-display font-black text-brightRed col-start-1 col-end-3 row-start-6 row-end-6">
              ${item.price}
            </p>
            <div className="flex flex-row justify-between px-1 py-1 items-center w-11 h-7 border border-grey shadow-lg col-start-10 col-end-11 row-start-6 row-end-6">
              <button>-</button>
              <p>1</p>
              <button>+</button>
            </div>
            <button className="bg-brightRed p-1 h-7 w-full rounded-sm col-start-12 col-end-13 row-start-6 row-end-6 flex content-center items-center">
              <img
                src="/assets/icons/cart-icon-2.svg"
                alt="cart icon"
                className="w-7 h-7"
              />
            </button>
          </div>
        ))}
      </div>
      <button
        className="w-52 h-16 rounded-lg flex justify-center items-center bg-brightRed font-text font-black text-white mt-10 mb-16"
        onClick={handleClick}
      >
        {isMenuFullyOpen ? "view less" : "view more"}
      </button>
    </div>
  );
};

export default MenuItems;
