import Image from "next/image";
import Link from "next/link";
import { ActionButton } from "../(components)/Button";

function Navbar() {
    return (
        <nav className="flex items-center pt-[18px] pb-6 px-[10%]">
            <div className="w-[258px] h-[43px] relative">
                <Image src="/logo.png" fill={true} alt="logo" />
            </div>
            <ul className="flex ml-auto mr-[140px] gap-x-9 items-center text-sm leading-[14px]">
                <Link href="/">
                    <li>HOME</li>
                </Link>
                <Link href="/about-us">
                    <li>ABOUT US</li>
                </Link>
                <Link href="/services">
                    <li>SERVICES</li>
                </Link>
            </ul>
            <ActionButton>Contact Us</ActionButton>
        </nav>
    );
};

export default Navbar;