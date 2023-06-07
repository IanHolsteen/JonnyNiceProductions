import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Hero({ heading, message }) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIsMobile = () => {
            const userAgent = window.navigator.userAgent;
            setIsMobile(/iPhone|iPad|iPod|Android/i.test(userAgent));
        };

        checkIsMobile();

        window.addEventListener("resize", checkIsMobile);

        return () => {
            window.removeEventListener("resize", checkIsMobile);
        };
    }, []);

    return (
        <div className={`${isMobile ? 'h-screen bg-beats bg-cover bg-no-repeat flex items-center justify-center' : 'h-screen bg-beats bg-cover bg-no-repeat flex items-center justify-center'}`}>
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 z-[2]"/>
            <div className="text-white z-[2] text-center">
                <h2 className={`text-6xl font-bold ${isMobile ? 'mobile-heading' : ''}`}>{heading}</h2>
                <p className={`py-5 text-xl ${isMobile ? 'mobile-message' : ''}`}>{message}</p>
                <div className={`pt-40 flex justify-center ${isMobile ? 'gap-20' : 'gap-40'}`}>
                    <Link className={`bg-black text-white rounded-full py-3 text-center justify-center ${isMobile ? 'px-1' : 'px-6'}`} href="/instrumentals">Browse Beats</Link>
                    <Link className={`bg-black text-white rounded-full py-3 text-center justify-center ${isMobile ? 'px-1' : 'px-6'}`} href="https://youtube.com/c/jonnynice">Youtube</Link>
                    <Link className={`bg-black text-white rounded-full py-3 text-center justify-center ${isMobile ? 'px-1' : 'px-6'}`} href="/contact">Contact Me</Link>
                </div>
            </div>
        </div>
    );
}