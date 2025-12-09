import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { SparklesCore } from "./ui/sparkles";
import { Button as MovingBorderButton } from "./ui/moving-border";

const Hero = () => {
    return (
        <div className="pb-20 pt-36">
            {/* Spotlight Effect */}
            <div>
                <Spotlight
                    className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
                    fill="white"
                />
                <Spotlight
                    className="top-10 left-full h-[80vh] w-[50vw]"
                    fill="purple"
                />
                <Spotlight
                    className="top-28 left-80 h-[80vh] w-[50vw]"
                    fill="blue"
                />
            </div>

            {/* Grid Background Removed for 3D Animation - Sparkles Added */}
            <div className="w-full absolute left-0 -top-20 h-screen">
                <SparklesCore
                    id="tsparticlesfullpage"
                    background="transparent"
                    minSize={0.6}
                    maxSize={1.4}
                    particleDensity={100}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                />
            </div>

            <div className="flex justify-center relative my-20 z-10">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                    <TextGenerateEffect
                        className="uppercase tracking-widest text-2xl text-center text-purple-500 max-w-80"
                        words="Front End Engineer"
                    />

                    <TextGenerateEffect
                        className="text-center text-[40px] md:text-5xl lg:text-6xl text-white"
                        words="Hi, I'm Vivan Singh"
                    />

                    <TextGenerateEffect
                        className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl mt-4 text-purple-400 font-normal"
                        words="Solving complex problems with efficient algorithms and scalable systems."
                    />

                    <a href="#projects">
                        <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                            View Work
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
