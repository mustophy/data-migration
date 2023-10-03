import Image from "next/image";

function Features(){
    return (
        <section className="mt-[147px]">
            <p className="gradient-text text-center">OUR FEATURES</p>
            <h2 className="section-title text-center mb-[78px]">Why Choose EZDataMigration</h2>

            <div className="grid grid-cols-2 gap-x-10 items-center">
                <div className="grid gap-y-[15px]">
                    {featuresData.map(({ content, title }, index) => (
                        <div style={{ boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.15)'}} className="rounded-md flex px-8 py-[22px] gap-x-[17px]">
                            <div className="rounded-[50%] shrink-0 gradient-bg h-[35px] w-[35px] flex items-center justify-center">
                                <p className="text-white font-[700]">{index + 1}</p>
                            </div>
                            <div>
                                <p className="text-black font-[700] mb-[3px] text-[20px]">{title}</p>
                                <p className="font-[400] text-[14px] leading-[18px] text-black/60">{content}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="h-[500px] relative">
                    <Image src="/features.png" alt="features" fill={true} />
                </div>
            </div>
        </section>
    )
}

export default Features

const featuresData: { title: string; content: string}[] = [
    {
        title: 'Unmatched Expertise',
        content: 'Our team comprises seasoned professionals with deep expertise in cloud migration, database management, and data security. We stay updated with the latest industry trends to provide you with cutting-edge solutions.'
    },
    {
        title: 'Tailored Solutions',
        content: 'We recognize that no two businesses are the same. Our approach revolves around understanding your unique requirements and crafting solutions that align with your specific needs, ensuring a seamless migration journey.'
    },
    {
        title: 'Data Security First',
        content: 'We understand the paramount importance of data security. Our stringent security measures and protocols ensure that your sensitive information remains protected throughout the migration process.'
    },
    {
        title: 'Focus on Minimizing Disruption',
        content: 'We know that time is money. Our methodologies are designed to minimize downtime and disruption to your operations, allowing you to maintain business continuity during the migration process.'
    },
    {
        title: 'Holistic Support',
        content: "From the initial consultation to post-migration support, our team is dedicated to providing comprehensive assistance. We're here to answer your questions, address your concerns, and guide you at every step."
    },
]