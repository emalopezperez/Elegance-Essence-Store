import { ShoppingBagIcon } from "@heroicons/react/24/outline";

interface Props {
  setopenCart: (value: boolean) => void;
}

const CountCart: React.FC<Props> = ({ setopenCart }) => {
  return (
    <button
      onClick={() => setopenCart(true)}
      className="group -m-2 flex items-center p-2">
      <ShoppingBagIcon
        className="h-6 w-6 flex-shrink-0 text-[#44686f]"
        aria-hidden="true"
      />
      <span className="ml-2 text-sm font-medium text-[#44686f]">0</span>
      <span className="sr-only">items in cart, view bag</span>
    </button>
  );
};

export default CountCart;
