import { ActionButton } from "./Button";

export function renderCloudJourney(){
    return (
        <div className="rounded-[40px] mt-[200px] py-[97px] px-[15%] gradient-bg flex flex-col items-center justify-center">
            <h2 className="text-white font-[700] text-[38px] leading-[45px]">Let's Begin Your Cloud Journey</h2>
            <p className="mt-[17px] mb-[25px] text-white text-justify leading-[26px] font-[400] text-[18px]">Embrace the future of data management with EZDataMigration Cloud Data Migration Services. Whether you're looking to migrate, synchronize, or optimize, we have the expertise to make your transition smooth and successful. Contact us today to learn more about how we can assist you on your cloud data journey.</p>
            <ActionButton>GET STARTED</ActionButton>
        </div>
    )
}