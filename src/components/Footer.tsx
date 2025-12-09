import React from "react";
import { IconBrandGithub, IconBrandLinkedin, IconMail, IconPhone } from "@tabler/icons-react";
import { ContactForm } from "./ContactForm";

const Footer = () => {
    return (
        <footer className="w-full pt-20 pb-10" id="contact">
            <div className="w-full absolute left-0 -bottom-72 min-h-96">
                <img
                    src="/footer-grid.svg"
                    alt="grid"
                    className="w-full h-full opacity-50 "
                />
            </div>
            <div className="flex flex-col items-center">
                <h1 className="heading lg:max-w-[45vw] text-3xl md:text-4xl font-bold text-center text-white">
                    Ready to take <span className="text-purple-500">your</span> digital
                    presence to the next level?
                </h1>
                <p className="text-white-200 md:mt-10 my-5 text-center text-neutral-300">
                    Reach out to me today and let&apos;s discuss how I can help you
                    achieve your goals.
                </p>
                <ContactForm />
            </div>
            <div className="flex mt-16 md:flex-row flex-col justify-between items-center max-w-7xl mx-auto w-full gap-4">
                <p className="md:text-base text-sm md:font-normal font-light text-neutral-300">
                    Copyright © 2025 Vivan Singh
                </p>
                <div className="flex items-center md:gap-3 gap-6">
                    <a href="https://github.com/Vivan-69" target="_blank" className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:bg-neutral-800 transition">
                        <IconBrandGithub width={20} height={20} className="text-white" />
                    </a>
                    <a href="https://linkedin.com/in/vivan-singh07" target="_blank" className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:bg-neutral-800 transition">
                        <IconBrandLinkedin width={20} height={20} className="text-white" />
                    </a>
                    <a href="tel:+919121236257" className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:bg-neutral-800 transition">
                        <IconPhone width={20} height={20} className="text-white" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
