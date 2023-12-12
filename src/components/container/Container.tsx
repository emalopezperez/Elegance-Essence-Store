import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <main className="mx-auto max-w-[90%] mt-[16px] ">{children}</main>;
};

export default Container;
