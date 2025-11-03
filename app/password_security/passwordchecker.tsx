'use client'
import React, {useState} from 'react'
// @ts-ignore
import "../globals.css"
import {createHash} from 'crypto'

// API: https://api.pwnedpasswords.com/range/${prefix}

const checkPassword = async(password: string) => {
    const hashed = createHash('sha1').update(password).digest("hex").toUpperCase();
    const first5 = hashed.slice(0, 5);
    const following = hashed.slice(5);

    console.log(hashed)
    console.log(first5)
    console.log(following)

    const resp = await fetch(`https://api.pwnedpasswords.com/range/${first5}`);
    const data = await resp.text()

    const lines = data.split(/\r?\n/);

    for (const line of lines) {
        const [pass, num] = line.split(':');

        if (pass === following) {
            return parseInt(num)
        }
    }

    return 0
}

export default function PasswordChecker() {
    const vals = ["text", 'password']
    const [currnum, setCurrnum] = useState(1)
    const [ival, setIval] = useState('')
    const [breachedtimes, setbt] = useState(0)
    const [brcolor, setbrcolor] = useState("none")
    return (
        <>
        <div className="flex justify-center flex-row text-white border mx-auto rounded-sm w-120 h-10 pl-1 mb-4">
        <input className="border-0 w-105 focus:outline-none" type={vals[currnum]} value={ival} onChange={(e) => {setIval(e.target.value)}}></input>
        <button className="ml-3 hover:cursor-pointer" onClick={() => {setCurrnum(currnum === 0 ? 1 : 0)}}><i className="fa-solid fa-eye text-xl"></i></button>
        </div>
        <button className="bg-[#555555] w-40 h-12 block mx-auto hover:cursor-pointer text-2xl rounded-xl hover:bg-[#444444] hover:text-green-400 transition-colors duration-300" onClick={async() => {
            const temp = await checkPassword(ival)
            console.log(temp);
            setbt(temp);

            if (temp > 0) {
                setbrcolor("text-red-400")
            } else {
                setbrcolor("text-green-400")
            }

        }}>Check</button>
        <h1 className={`${brcolor} ${brcolor === "none" ? "opacity-0" : "opacity-100"} text-4xl w-fit mx-auto mt-6 transition-colors duration-300`}>Your password has been breached {breachedtimes} times</h1>

        <div className="mb-30"></div>
        </>
    )
}