import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
  return (
    <header className="shadow-md bg-blue-600 h-24 md:h-18 sticky top-0 z-50 py-4 px-4">
      <div
        className="max-w-[1180px] relative my-0 mx-auto text-white
     
      "
      >
        <div className="absolute left-0 flex items-center md:top-3 space-x-4 md:relative">
          <MenuIcon />
          <img
            className="h-7 object-contain"
            src="./flipkart-logo.png"
            alt=""
          />
        </div>

        <div className="absolute flex items-center left-0 right-0 top-9 px-2 py-2 md:top-2 md:mx-52  bg-white flex-grow text-black ">
          <SearchIcon />
          <input
            className="w-full px-1 bg-transparent border-0 outline-none"
            type="text"
            placeholder="Search Product"
          />
        </div>

        <div className="absolute right-0 flex items-center space-x-6 md:top-3">
          <ShoppingCartIcon />
          <h3 className="md:bg-white md:text-blue-600 md:px-8 md:py-1 cursor-pointer">
            Login
          </h3>
        </div>
      </div>
    </header>
  );
}

export default Header;
