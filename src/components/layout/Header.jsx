import Logo from "../common/Logo";
import NavBar from "../common/NavBar";
import Button from "../common/Button";
import { saveAs } from "file-saver";
import resume from "../../../src/assets/Resume/ChiamakaUyanna.pdf";

const Header = () => {
  const DownloadCV = () => {
    saveAs(resume, "Chiamaka_Uyanna_CV.pdf");
  };

  return (
    <header className="font-inter flex justify-around px-4 items-center bg-primary py-4 text-textColor fixed w-screen z-10">
      <Logo />
      <NavBar />
      <Button
            text="Download CV"
            className="btn-secondary"
            onClick={DownloadCV}
          />
    </header>
  );
};

export default Header;
