import { FaAngleUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="h-full w-screen py-6 flex justify-between px-14 gap-4 bg-secondary text-textColor">
      <p className=" lg:text-base md:text-md text-xs">&copy;2023 Chiamaka Uyanna, All Rights Reserved</p>
      <a href="#home">
        <div className="p-2 rounded-full bg-accent flex items-center text-primary">
          {" "}
          <FaAngleUp />
        </div>{" "}
      </a>
    </footer>
  );
};

export default Footer;
