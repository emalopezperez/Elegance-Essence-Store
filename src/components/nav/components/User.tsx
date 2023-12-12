import { UserIcon } from "@heroicons/react/24/outline";

const User = () => {
  return (
    <a href="#" className="p-2 text-gray-400 hover:text-gray-500 lg:ml-4">
      <span className="sr-only">Account</span>
      <UserIcon className="h-6 w-6 text-[#44686f]" aria-hidden="true" />
    </a>
  );
};

export default User;
