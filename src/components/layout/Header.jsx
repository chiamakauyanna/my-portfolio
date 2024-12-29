import React from "react";
import Logo from "../common/Logo";
import NavBar from "../common/NavBar";
import Button from "../common/Button";

const Header = () => {
    return (
        <header className="font-inter flex justify-around px-4 items-center bg-primary py-4 text-text fixed w-full">
            <Logo />
            <NavBar />
            <Button
                text="Contact me"
                className="bg-transparent border border-accent text-accent py-2 px-4 rounded"
            />
        </header>
    );
};

export default Header;
