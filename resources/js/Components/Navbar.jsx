import React from "react";

export default function Navbar() {
    return (
        <div>
            <nav>
                <div className="container mx-auto px-8 lg:px-32">
                    <div className="flex items-center justify-between pt-6 lg:pb-6">
                        <a
                            href="#"
                            className="flex items-center text-lg font-bold text-slate-600"
                        >
                            {/* <Image
                                className="shadow-xl"
                                src="/images/ystudio.png"
                                alt="Ystudio"
                                width={30}
                                height={30}
                            /> */}
                            <img src="images/ystudio.png" alt="" />
                            <div className="ml-1 drop-shadow-sm">studio</div>
                        </a>
                        <div className="flex gap-8">
                            <div id="nav-list" className="hidden md:block">
                                <ul className="flex gap-8 text-sm">
                                    <li>
                                        <a
                                            className="font-medium text-slate-600 hover:text-sky-600"
                                            href="/about"
                                        >
                                            Aboutaaaaa
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="font-medium text-slate-600 hover:text-sky-600"
                                            href="#"
                                        >
                                            Template
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="font-medium text-slate-600 hover:text-sky-600"
                                            href="#"
                                        >
                                            Serviceaaa
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="active:scale-75 duration-500">
                                <a
                                    href="#"
                                    className="rounded-full bg-sky-600 py-2 px-4 text-sm font-semibold text-white drop-shadow-md duration-300 hover:bg-gradient-to-r hover:from-sky-600 hover:to-sky-700"
                                >
                                    Get Started
                                </a>
                            </div>
                            <div className="block md:hidden">bars</div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
