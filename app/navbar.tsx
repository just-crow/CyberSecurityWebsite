import React from 'react'
import Link from 'next/link'
import NBContainer from './nbcontainer'
import NavbarSM from './navbarsm'
// @ts-ignore
import './globals.css'



export default function Navbar() {
    return (
        <>
            <NBContainer id="large" cs="text-white w-full h-25 bg-linear-to-b from-[#19c90b]/30 fixed top-0 hover:from-[#19c90b]/50 transition-colors duration-300 z-50 pb-5 NB">
                <Link href="." className="hover:text-[#19c90b] transition-colors duration-300"><i className="fa-solid fa-house"></i>Home</Link>
                <Link href="./phishing" className="hover:text-[#19c90b] transition-colors duration-300"><i className="fa-solid fa-fishing-rod"></i>PhishingBIG</Link>
                <Link href="./malware" className="hover:text-[#19c90b] transition-colors duration-300">Malware</Link>
                <Link href="./password_security" className="hover:text-[#19c90b] transition-colors duration-300">Passwords</Link>
                <Link href="./test_your_knowledge" className="hover:text-[#19c90b] transition-colors duration-300">Test Your Knowledge</Link>
            </NBContainer>

            <NavbarSM />
        </>
    )
}