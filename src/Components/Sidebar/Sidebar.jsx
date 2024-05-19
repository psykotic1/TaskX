import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import NavList from "./NavList";
import { mainNavItems } from "./navData";

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`${
        isOpen ? "w-72 bg-colorB2" : "lg:w-24 w-0"
      } lg:bg-colorB2 flex flex-col ${
        isOpen ? "justify-center lg:justify-between" : "justify-center"
      } h-screen p-10 relative duration-300`}
    >
      <button
        className={`absolute -right-3 top-9 w-8 cursor-pointer ${
          !isOpen && "rotate-180"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <FontAwesomeIcon
          icon={faBarsStaggered}
          className="w-5 h-5 text-colorA1 hover:text-colorB3 transition-all duration-500"
        />
      </button>

      <div className="flex flex-col justify-center gap-10 items-center text-center h-full">
        {isOpen && (
          <h1 className="text-center transition-all text-xl tracking-widest font-semibold text-colorA1 cursor-pointer duration-500">
            TaskX
          </h1>
        )}

        <nav className="mx-auto">
          <NavList navItems={mainNavItems} isOpen={isOpen} />
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
