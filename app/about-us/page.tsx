import Image from "next/image"
import { renderCloudJourney } from "../(components)/utils"

function AboutUs() {
    return (
        <section className="mt-[100px]">
            <div className="grid grid-cols-2 gap-x-[66px]">
                <div>
                    <h1 className="text-[50px] font-[700] leading-normal">About Us</h1>
                    <p className="mt-[19px]">
                        At EZDataMigration, we specialize in seamless and efficient data migration, ensuring your transition to the cloud is smooth, secure, and stress-free. With a proven track record of successful data migrations, we are your trusted partner in unlocking the power of cloud computing while safeguarding the integrity of your valuable data.
                        <br /><br />
                        <span className="text-[#120023] text-[22px] font-[600] leading-[26px]">Our Expertise</span><br />
                        Our comprehensive range of services is designed to cater to various data migration needs, encompassing both complex and straightforward scenarios. Whether you're transitioning from an older system to a new one or moving your data from on-premise to the cloud, EZDataMigration has the expertise to guide you through the process with precision and care.
                    </p>
                </div>
                <div>
                    <div className="relative h-[110%]">
                        <Image src="/about-us.png" alt="About Us" fill={true} />
                    </div>
                </div>
            </div>
            {renderCloudJourney()}
        </section>
    )
}

export default AboutUs