import BurgerIcon from "../assets/tsx-svg-icon/BurgerIcon";

export function SearchBar() {
  return (
    <div className={"flex items-center flex-stretch h-16 w-full"}>
      <span className="w-1/6 h-full flex align-middle justify-center items-center">
        <BurgerIcon />
      </span>
      <span className="flex-grow-1 items-center h-10 w-5/6 pr-8">
        <input
          className="w-full h-full px-3 rounded-md bg-gray-600 focus:outline-none focus:ring ring-gray-600"
          placeholder={"Search"}
        />
      </span>
    </div>
  );
}
