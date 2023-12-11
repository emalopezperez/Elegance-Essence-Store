import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Search = () => {
  return (
    <a
      href="#"
      className="ml-6 hidden p-2 text-gray-400 hover:text-gray-500 lg:block">
      <span className="sr-only">Search</span>
      <MagnifyingGlassIcon
        className="h-6 w-6 text-[#44686f]"
        aria-hidden="true"
      />
    </a>
  );
};

export default Search;
