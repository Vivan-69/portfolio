"use client";
import React, { useState } from "react";
import { supabase } from "@/lib/supabase";

export const ContactForm = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
        "idle"
    );
    const [emailValid, setEmailValid] = useState<boolean | null>(null);

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newEmail = e.target.value;
        setEmail(newEmail);

        if (newEmail.length > 0) {
            setEmailValid(validateEmail(newEmail));
        } else {
            setEmailValid(null);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        if (!supabase) {
            setStatus("error");
            alert("Supabase credentials are missing. Check .env.local file.");
            return;
        }

        if (!validateEmail(email)) {
            setStatus("error");
            setEmailValid(false);
            return;
        }

        try {
            const { error } = await supabase
                .from("messages")
                .insert([{ email, message }]);

            if (error) throw error;

            setStatus("success");
            setEmail("");
            setMessage("");
            setEmailValid(null);
        } catch (error) {
            console.error("Error submitting message:", error);
            setStatus("error");
        }
    };

    return (
        <form className="flex flex-col gap-4 max-w-md mx-auto w-full mt-10 z-10 relative" onSubmit={handleSubmit}>
            <div className="relative">
                <input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={handleEmailChange}
                    className={`rounded-lg border w-full relative z-10 mt-4 bg-neutral-950 placeholder:text-neutral-700 text-neutral-300 px-4 py-3 focus:ring-2 ${emailValid === true
                        ? "border-green-500 focus:ring-green-500"
                        : emailValid === false
                            ? "border-red-500 focus:ring-red-500"
                            : "border-neutral-800 focus:ring-teal-500"
                        }`}
                    required
                />
                {emailValid === false && (
                    <p className="text-red-500 text-xs mt-1 ml-1">
                        Please enter a valid email address
                    </p>
                )}
                {emailValid === true && (
                    <p className="text-green-500 text-xs mt-1 ml-1">
                        ✓ Valid email
                    </p>
                )}
            </div>
            <textarea
                placeholder="Your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full relative z-10 bg-neutral-950 placeholder:text-neutral-700 text-neutral-300 px-4 py-3 min-h-[120px]"
                required
            />
            <button
                type="submit"
                disabled={status === "loading" || status === "success" || emailValid === false}
                className="px-8 py-2 rounded-lg bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {status === "loading"
                    ? "Sending..."
                    : status === "success"
                        ? "Message Sent!"
                        : "Send Message"}
            </button>
            {status === "error" && (
                <p className="text-red-500 text-center text-sm">
                    Something went wrong. Please try again.
                </p>
            )}
        </form>
    );
};
