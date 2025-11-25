'use client'
import React, {useState} from 'react'
import Link from 'next/link'
import NBContainer from './nbcontainer'
// @ts-ignore
import './globals.css'



export default function NavbarSM() {
    const [h, setH] = useState("h-25");

    return (
        <NBContainer id="small" cs={`text-white w-full ${h} bg-linear-to-b from-[#19c90b]/30 fixed top-0 hover:from-[#19c90b]/50 transition-all duration-300 z-50 pb-5 NB`}>
            <Link href="." className="hover:text-[#19c90b] transition-colors duration-300 mt-7"><i className="fa-solid fa-house"></i>Home</Link>
            <button className="hover:text-[#19c90b] transition-colors duration-1400 mt-7" onClick={() => {setH(h == "h-25" ? "h-50" : "h-25")}}><i className="fa-solid fa-bars"></i></button>
        </NBContainer>
    )
}