"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Image from "next/image";

const RecentProjects = () => {
    return (
        <section id="projects" className="py-20">
            <h2 className="text-4xl font-bold text-center mb-10 text-white font-crazy">
                My <span className="text-purple-500">Projects</span>
            </h2>
            <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
                <CardContainer className="inter-var">
                    <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                        <CardItem
                            translateZ="50"
                            className="text-xl font-bold text-neutral-600 dark:text-white"
                        >
                            Smart Dustbin
                        </CardItem>
                        <CardItem
                            as="p"
                            translateZ="60"
                            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                        >
                            Automated waste segregation system using IoT sensors.
                        </CardItem>
                        <CardItem
                            translateZ="100"
                            className="w-full mt-4"
                        >
                            <Image
                                src="/smart-dustbin.png"
                                height="1000"
                                width="1000"
                                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                alt="thumbnail"
                            />
                        </CardItem>
                        <div className="flex justify-between items-center mt-20">
                            <CardItem
                                translateZ={20}
                                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                            >
                                Team Leader
                            </CardItem>
                            <CardItem
                                translateZ={20}
                                as="button"
                                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                            >
                                View Project
                            </CardItem>
                        </div>
                    </CardBody>
                </CardContainer>
            </div>
        </section>
    );
};

export default RecentProjects;
