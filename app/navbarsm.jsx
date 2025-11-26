'use client'
import React, {useState} from 'react'
import Link from 'next/link'
import NBContainer from './nbcontainer'
// @ts-ignore
import './globals.css'



export default function NavbarSM() {
    const [h, setH] = useState("h-25");

    return (
        <NBContainer id="small" cs={`text-white w-full ${h} flex-col bg-linear-to-b from-red-800 fixed top-0 to-red-800/80 transition-all duration-300 z-50 pb-5 NB`}>
            <div className="flex justify-around w-full">
            <Link href="." className="hover:text-[#19c90b] transition-colors duration-300 mt-7"><i className="fa-solid fa-house"></i>Home</Link>
            <button className="hover:text-[#19c90b] transition-colors duration-1400 mt-7" onClick={() => {setH(h == "h-25" ? "h-60" : "h-25")}}><i className="fa-solid fa-bars"></i></button>
            </div>

            <div className="flex flex-col mx-auto text-center">
                <Link href="./phishing" className={`${h == "h-25" ? "hide" : "show"} text-white hblink`}>Phishing</Link>
                <Link href="./malware" className={`${h == "h-25" ? "hide" : "show"} text-white hblink`}>Malware</Link>
                <Link href="./password_security" className={`${h == "h-25" ? "hide" : "show"} text-white hblink`}>Passwords</Link>
                <Link href="./test_your_knowledge" className={`${h == "h-25" ? "hide" : "show"} text-white hblink`}>Test Your Knowledge</Link>
            </div>
        </NBContainer>
    )
}