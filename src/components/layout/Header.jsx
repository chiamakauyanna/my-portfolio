import Logo from "../common/Logo";
import NavBar from "../common/NavBar";
import Button from "../common/Button";

const Header = () => {
  return (
    <header className="font-inter flex justify-around px-4 items-center bg-primary py-4 text-textColor fixed w-screen z-10">
      <Logo />
      <NavBar />
      <a href="#contact">
        <Button
          text="Contact me"
          className="btn-secondary"
        />
      </a>
    </header>
  );
};

export default Header;
