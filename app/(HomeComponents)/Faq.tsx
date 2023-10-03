"use client";

import Image from "next/image";
import { useState } from "react";

function Faq(){
    const [activeFaq, setActiveFaq] = useState("")
    const changeActiveFaq = (value : string)  => {
        if(activeFaq === value) return setActiveFaq("")
        setActiveFaq(value)
    }
    return (
        <section className="mt-[160px]">
            <p className="gradient-text text-center mb-[9px]">FAQS</p>
            <h2 className="section-title text-center">Frequently Asked Questions</h2>
            <div className="grid gap-y-[29px] mt-[63px]">
                {faqData.map(({ question, answer }) => {
                    let imgUrl = 'chevron_down.svg'
                    if(question === activeFaq) imgUrl = '/chevron_down.png'
                    else imgUrl = '/chevron_right.png'
                    return (
                        <div onClick={() => changeActiveFaq(question)} className="pl-14 pr-11 py-[32px] flex gap-x-20 justify-between rounded-[18px] card-shadow">
                            <div>
                                <p className="text-[#170F49] font-[500]">{question}</p>
                                {activeFaq !== question
                                    ? null
                                    : <p className="font-[400] leading-[26px] mt-1 text-[#6F6C90]">{answer}</p>
                                }
                            </div>
                            <div>
                                <Image src={imgUrl} alt="" width={50} height={50} />
                            </div>
                        </div>
                    )
                })

                }
            </div>
        </section>
    )
}

export default Faq

const faqData : { question: string; answer: string}[] = [
    {
        question: 'What is cloud data migration?',
        answer: 'Cloud data migration refers to the process of transferring data from one location or system to another within a cloud computing environment. It involves migrating data between on-premise systems and cloud platforms, or between different cloud services.'
    },
    {
        question: 'Why do I need professional data migration service?',
        answer: 'Cloud data migration refers to the process of transferring data from one location or system to another within a cloud computing environment. It involves migrating data between on-premise systems and cloud platforms, or between different cloud services.'
    },
    {
        question: 'Why do I need professional data migration service?',
        answer: 'Cloud data migration refers to the process of transferring data from one location or system to another within a cloud computing environment. It involves migrating data between on-premise systems and cloud platforms, or between different cloud services.'
    },
    {
        question: 'Why do I need professional data migration service?',
        answer: 'Cloud data migration refers to the process of transferring data from one location or system to another within a cloud computing environment. It involves migrating data between on-premise systems and cloud platforms, or between different cloud services.'
    },
    {
        question: 'Why do I need professional data migration service?',
        answer: 'Cloud data migration refers to the process of transferring data from one location or system to another within a cloud computing environment. It involves migrating data between on-premise systems and cloud platforms, or between different cloud services.'
    },
]