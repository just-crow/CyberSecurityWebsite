'use client'
import React, {useState, useEffect} from 'react'
import Link from 'next/link'

interface NP {
    id: string;
    cs: string;
    children: React.ReactNode;
}

export default function NBContainer({id, cs, children} : NP) {
    const [pos, setpos] = useState(0);

    useEffect(() => {
        addEventListener("scroll", () => {setpos(window.scrollY)});
    }, [])

    return (
        <div id={id} className={pos === 0 ? cs : `NB text-[#19c90b] w-full bg-linear-to-b from-red-800 fixed top-0 hover:from-red-600/80 to-red-800/20 transition-colors duration-300 z-50 pb-5 ${cs.match(/\b(h-\d+)\b/g)}`}>{children}</div>
    )
}