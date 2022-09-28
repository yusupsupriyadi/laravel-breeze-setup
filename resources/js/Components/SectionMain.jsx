import { Player } from "@lottiefiles/react-lottie-player";
import React, { useEffect, useState } from "react";

export default function SectionMain() {
    const [classCard1, setClassCard1] = useState("scale-110");
    const [classCard2, setClassCard2] = useState("opacity-40");
    const [classCard3, setClassCard3] = useState("opacity-40");
    const [cardValue, setCardValue] = useState("card-1");

    const [classText1, setClassText1] = useState();
    const [classText2, setClassText2] = useState("hidden");
    const [classText3, setClassText3] = useState("hidden");
    const [textValue, setTextValue] = useState("classText1");

    const handleHover = (e) => {
        if (e === "card-1") {
            setCardValue("card-1");
            setClassCard1("scale-110 shadow-md")
            setClassCard2("opacity-40")
            setClassCard3("opacity-40")
            setTextValue("classText1")
            setClassText1("")
            setClassText2("hidden")
            setClassText3("hidden")
        } else if (e === "card-2") {
            setCardValue("card-2");
            setClassCard1("opacity-40")
            setClassCard2("scale-110 shadow-md")
            setClassCard3("opacity-40")
            setTextValue("classText2")
            setClassText1("hidden")
            setClassText2("")
            setClassText3("hidden")
        } else {
            setCardValue("card-3");
            setClassCard1("opacity-40")
            setClassCard2("opacity-40")
            setClassCard3("scale-110 shadow-md")
            setTextValue("classText3")
            setClassText1("hidden")
            setClassText2("hidden")
            setClassText3("")
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (cardValue === "card-1") {
                setCardValue("card-2");
                setClassCard1("opacity-40")
                setClassCard2("scale-110 shadow-md")
                setClassCard3("opacity-40")
                setTextValue("classText2")
                setClassText1("hidden")
                setClassText2("")
                setClassText3("hidden")
            } else if (cardValue === "card-2") {
                setCardValue("card-3");
                setClassCard1("opacity-40")
                setClassCard2("opacity-40")
                setClassCard3("scale-110 shadow-md")
                setTextValue("classText3")
                setClassText1("hidden")
                setClassText2("hidden")
                setClassText3("")
            } else {
                setCardValue("card-1");
                setClassCard1("scale-110 shadow-md")
                setClassCard2("opacity-40")
                setClassCard3("opacity-40")
                setTextValue("classText1")
                setClassText1("")
                setClassText2("hidden")
                setClassText3("hidden")
            }
        }, 4000);
        return () => clearInterval(interval);
    })


    return (
        <div>
            <div className="container mx-auto px-6 md:mt-20 lg:px-32">
                <div className="flex justify-between lg:mx-20">
                    <div>
                        <div className="text-4xl font-semibold">About</div>
                        <div className="my-10 flex items-center gap-4">
                            <div className={classCard1 + ` flex h-[125px] w-[130px] rounded-xl bg-white hover:scale-110 duration-300`} onMouseEnter={() => handleHover("card-1")}>
                                <div className="m-auto text-center">
                                    {/* <Image
                                        src="/images/image-icon.png"
                                        alt="image icon"
                                        width={50}
                                        height={50}
                                    /> */}
                                    <p className="text-[10px] font-bold">Start from <br /> scratch</p>
                                </div>
                            </div>
                            <div className={classCard2 + ` flex h-[125px] w-[130px] rounded-xl bg-white hover:scale-110 duration-300 hover:opacity-100`} onMouseEnter={() => handleHover("card-2")}>
                                <div className="m-auto text-center">
                                    {/* <Image
                                        src="/images/code-icon.webp"
                                        alt="image icon"
                                        width={50}
                                        height={50}
                                    /> */}
                                    <p className="text-[10px] font-bold">Design <br /> Convert</p>
                                </div>
                            </div>
                            <div className={classCard3 + ` flex h-[125px] w-[130px] rounded-xl bg-white hover:scale-110 duration-300 hover:opacity-100`} onMouseEnter={() => handleHover("card-3")}>
                                <div className="m-auto text-center">
                                    {/* <Image
                                        src="/images/web-icon.png"
                                        alt="image icon"
                                        width={50}
                                        height={50}
                                    /> */}
                                    <p className="text-[10px] font-bold">Certification</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-[400px] mt-10 flex items-start mr-10">
                            <div className="mr-4">
                                <i className="fa-solid fa-align-right text-xl"></i>
                            </div>
                            <div>
                                <p className={classText1 + ` text-md text-slate-600 duration-300 h-[50px]`}>Starting from the beginning, describe what website you want.</p>
                                <p className={classText2 + ` text-md text-slate-600 duration-300 h-[50px]`}>convert your design into a dynamic website, and can be accessed.</p>
                                <p className={classText3 + ` text-md text-slate-600 duration-300 h-[50px]`}>
                                    You got source:
                                    <ul className="list-disc ml-8">
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>Javascript</li>
                                        <li>Images</li>
                                    </ul>    
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="justify-self-end">
                    {/* <Player
                            className="w-[300px]"
                            autoplay
                            loop
                            mode={"bounce"}
                            src="https://assets9.lottiefiles.com/packages/lf20_tno6cg2w.json"
                        />   */}
                        {/* <button className="text-center py-3 mt-4 bg-sky-600 text-white font-semibold rounded-3xl">Order Now</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
