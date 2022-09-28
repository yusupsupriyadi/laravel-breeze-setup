import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";

export default function FooterHeader() {
    return (
        <div>
            <div className="container mx-auto px-6 lg:px-32 lg:py-10 lg:mt-20">
                <div className="relative mt-10 h-96 rounded-3xl bg-gradient-to-b from-sky-500 to-blue-400 border-[#3d4b7b] border-2 drop-shadow-md md:h-[400px] lg:mx-20 lg:mt-20 flex flex-col">
                    <div className="absolute -top-32 inset-x-0 flex flex-col items-center">
                        <Player
                            src="json/lottieRocket.json"
                            autoplay
                            loop
                            className="lg:w-[300px]"
                        />
                        <h1 className="text-white text-3xl font-medium lg:mt-4">Get Website Now!</h1>
                        <a className="text-center block bg-yellow-400 py-2 px-4 w-32 text-md text-black font-semibold rounded-full border-[#3d4b7b] border-2 lg:mt-4 drop-shadow-lg">Contact Us</a>
                    </div>
                    <div className="mt-[350px] px-10 flex justify-between items-center">
                        <div id="social-media">
                            <i className="fa-brands fa-instagram text-white/70 text-xl mr-2"></i>
                        </div>
                        <div className="text-xs text-white">
                            Copyright @ystudio 2022 <span className="text-black/40">Power by: Vercel</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
