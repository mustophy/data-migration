import Image from "next/image"
import { ActionButton } from "../(components)/Button"

function AboutUs() {
    return (
        <section className="grid grid-cols-5 items-center gap-x-[176px] mt-[106px]">
            <div className=" col-span-2 h-[552px] relative">
                <Image src="/about.png" alt="about us" fill={true} />
            </div>
            <div className="col-span-3">
                <p className="gradient-text">ABOUT US</p>
                <h2 className="section-title mt-[9px]">What We Do</h2>
                <p className="mb-[45px] mt-5">
                    At EZDataMigration, we specialize in seamless and efficient data migration, ensuring your transition to the cloud is smooth, secure, and stress-free. With a proven track record of successful data migrations, we are your trusted partner in unlocking the power of cloud computing while safeguarding the integrity of your valuable data.
                </p>
                <ActionButton>MORE ABOUT US</ActionButton>
            </div>
        </section>
    )
}

export default AboutUs