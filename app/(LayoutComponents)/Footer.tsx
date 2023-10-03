import Image from "next/image"

function Footer() {
    return (

        <footer className="grid grid-cols-2 py-[60px] px-[10%] bg-black mt-[83px]">
            <div>
                <div className="h-[43px] w-[258px] relative">
                    <Image src="/footer-logo.png" alt="logo" fill={true} />
                </div>
                <div className="flex gap-x-[22px] items-center mt-6">
                    <Image src="/facebook.svg" alt="facebook link" width={9.82} height={18} />
                    <Image src="/twitter.svg" alt="facebook link" width={18} height={14.6} />
                    <Image src="/instagram.svg" alt="facebook link" width={18} height={18} />
                    <Image src="/linkedin.svg" alt="facebook link" width={19} height={18} />
                    <Image src="/youtube.svg" alt="facebook link" width={21} height={15} />
                </div>
            </div>
            <div className="flex justify-between">
                <div>
                    <p className="mb-10 font-[700] text-white">Company</p>
                    <div className="flex [&>*]:text-white [&>*]:font-[400] flex-col gap-y-[18px]">
                        <p>About</p>
                        <p>Services</p>
                        <p>Features</p>
                        <p>FAQs</p>
                    </div>
                </div>
                <div>
                    <p className="mb-10 font-[700] text-white">Support</p>
                    <div className="flex [&>*]:text-white [&>*]:font-[400] flex-col gap-y-[18px]">
                        <p>Contact Us</p>
                        <p>Help center</p>
                        <p>Privacy Policy</p>
                        <p>Terms & Services</p>
                    </div>
                </div>
                <div>
                    <p className="mb-10 font-[700] text-white">Contacts</p>
                    <div className="flex [&>*]:text-white [&>*]:font-[400] flex-col gap-y-[18px]">
                        <div className="flex">

                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer