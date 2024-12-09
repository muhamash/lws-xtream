"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

export default function Modal({ children }) {
    const [isVisible, setIsVisible] = useState(true);
    const overlay = useRef(null);
    const wrapper = useRef(null);
    const router = useRouter();  

    const onDismiss = useCallback(() => {
        setIsVisible(false); 
        router.push('/');  
    }, [router]);

    const onClick = useCallback(
        (e) => {
            if (e.target === overlay.current || e.target === wrapper.current) {
                if (onDismiss) onDismiss();
            }
        },
        [onDismiss, overlay, wrapper]
    );

    const onKeyDown = useCallback(
        (e) => {
            if (e.key === "Escape") onDismiss();
        },
        [onDismiss]
    );

    useEffect(() => {
        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, [onKeyDown]);

    const handleClose = useCallback( () =>
    {
        setIsVisible( false );
        window.location.href = '/';
    }, [] );

    if ( !isVisible ) return null;  
    
    return (
        <div
            ref={overlay}
            className="fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/50 p-2 md:p-5 backdrop-blur-sm w-screen"
            onClick={onClick}
        >
            <div
                ref={wrapper}
                className="mx-auto w-[90%] md:w-8/12 p-2 md:p-6"
            >
                <button
                    onClick={handleClose}
                    className="text-red-700 font-extrabold font-lg py-2 px-4 bg-white rounded-md mb-2"
                >
                    X
                </button>
                {children}
            </div>
        </div>
    );
}