import Image from "next/image";
import { ActionButton } from "../(components)/Button";

function Hero() {
    return (
        <section className="grid grid-cols-7 items-center">
            <div className="col-span-3">
                <h2 className="text-[50px] font-[700] leading-normal">Best Cloud Data Migration Company For Your Business</h2>
                <p className="mt-5 mb-[46px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</p>
                <ActionButton>Get started</ActionButton>
            </div>
            <div className="col-span-4 relative h-[605px]">
                <Image src="/hero.png" alt="data migration" fill={true} />
            </div>
        </section>
    )
}

export default Hero;