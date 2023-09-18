import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

const NavBar = () => {
  const [open, setOpen] = useState(true);

  const routes = [
    { name: "Home", id: 1, path: "/" },
    { name: "About", id: 2, path: "/about" },
    { name: "Contact", id: 3, path: "/contact" },
    { name: "Products", id: 4, path: "/products" },
    { name: "Blog", id: 5, path: "/blog" },
  ];

  return (
    <nav className="">
      <div className="md:hidden" onClick={() => setOpen(!open)}>
        {open === true ? (
          <MdOutlineRestaurantMenu className="text-3xl"></MdOutlineRestaurantMenu>
        ) : (
          <BiMenu className="text-3xl"></BiMenu>
        )}
      </div>

      <ol
        className={` bg-gray-200 absolute  duration-1000 p-2 rounded-lg mt-2 md:static flex justify-around  ${
          open ? "top-10" : "-top-56"
        } `}
      >
        {routes.map((route) => (
          <li className="font-semibold" key={route.id}>
            <a href={route.path}>{route.name}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default NavBar;
