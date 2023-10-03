import Image from "next/image"
import { ActionButton } from "../(components)/Button"

const Services = () => {
    return (
        <section className="grid grid-cols-5 gap-x-[15px] gap-y-[17px] mt-[90px]">
            <div className="col-span-3">
                <h3 className="gradient-text">OUR SERVICES</h3>
                <h2 className="mt-[15px] mb-[35px] font-[700] capitalize text-[43px] leading-normal">Our Comprehensive Range Of Services Is Designed To Cater To Various Data Migration Needs</h2>
                <ActionButton>Read More</ActionButton>
            </div>
            {servicesData.map(({ title, description, imageUrl }) => (
                <div style={{ boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.15)'}} className="text-center flex flex-col justify-end pb-[35px] px-7 h-[292px] rounded-md">
                    <div className="w-[72px] h-[63px] mx-auto relative">
                        <Image src={imageUrl} alt={title} fill={true}/>
                    </div>
                    <h3 className="font-[700] mt-[18px] text-[20px] leading-7">{title}</h3>
                    <p className="my-[18px] text-[14px] leading-[18px]">{description}</p>
                    <p className="text-black text-xs leading-3 font-[600] capitalize">READ MORE</p>
                </div>
            ))}
        </section>
    )
}

export default Services

const servicesData: { title: string, description: string, imageUrl: string }[] = [
    {
        title: 'Data Migration',
        description: 'We specialize in migrating your data from your old system to a new one.',
        imageUrl: '/data-migration.png'
    },
    {
        title: 'Side by Side Data Synchronization: ',
        description: 'Transitioning from on-premise to the cloud? Our side-by-side data ',
        imageUrl: '/synchronization.png'
    },
    {
        title: 'Database Migration',
        description: 'Migrating data from PostgreSQL or MySQL to Amazon Redshift?',
        imageUrl: '/database-migration.png'
    },
    {
        title: 'RDS to Aurora Migration',
        description: 'Upgrade from Amazon RDS to Aurora for enhanced performance and scalability',
        imageUrl: '/aurora-migration.png'
    },
    {
        title: 'EC2/On-premise to RDS Migration',
        description: 'Moving from EC2 instances or on-premise servers to Amazon RDS? ',
        imageUrl: '/ec2-rds-migration.png'
    },
    {
        title: 'Aurora Setup from Scratch',
        description: 'Leverage the power of Amazon Aurora with our setup- from-scratch ',
        imageUrl: '/aurora-setup.png'
    },
    {
        title: 'Table Partitioning for PostgreSQL',
        description: 'Enhance the performance of your PostgreSQL database with our table ',
        imageUrl: '/postgresql.png'
    },

]