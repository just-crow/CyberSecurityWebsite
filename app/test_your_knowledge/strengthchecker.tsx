'use client'
import React, {useState} from 'react'

export default function StrengthChecker() {
    const [val, setval] = useState("")
    const [cons, setcons] = useState<string[]>([])
    return (
        <>
            <h1 className="text-center text-white title-resp mb-[1vw]">Test your password making skills and try developing it according to the rules</h1>
            <div className="text-white border mx-auto rounded-sm w-120 max-w-[100vw] h-10 pl-1 mb-4">
                <input className="border-0 w-full h-full focus:outline-none" onChange={(e) => {setval(e.target.value)}}></input>
            </div>
            <button className="bg-[#555555] w-40 h-12 block mx-auto hover:cursor-pointer text-2xl rounded-xl mb-16 hover:bg-[#444444] hover:text-green-400 transition-colors duration-300" onClick={() => {
                const chars = val.split("")

                let uppercase = false
                let lowercase = false
                let numbers = false
                let symbols = false

                for (const char of chars) {
                    const ac = char.charCodeAt(0);

                    // symbol 33-47 58-64 91-96 123-126
                    uppercase = uppercase || (ac >= 65 && ac <= 90)
                    lowercase = lowercase || (ac >= 97 && ac <= 122)
                    numbers = numbers || (ac >= 48 && ac <= 57)
                    symbols = symbols || ((ac >= 33 && ac <= 47) || (ac >= 58 && ac <= 64) || (ac >= 91 && ac <= 96) || (ac >= 123 && ac <= 126))
                }

                let cs = []

                if (!uppercase || !lowercase) {
                    cs.push("The password should contain both uppercase and lowercase letters");
                }

                if (!numbers) {
                    cs.push("The password should contain numbers")
                }

                if (!symbols) {
                    cs.push("The password should contain symbols")
                }

                if (val.length < 12) {
                    cs.push("The password should contain at least 12 characters")
                }

                if (cs.length === 0) {
                    cs.push("Your password is strong")
                }

                setcons(cs);
            }}>Check</button>

            <ul className="text-resp mx-auto w-fit mb-[12vw]">
                {cons.map((el) => (<li className={`pre transition-all ${el=="Your password is strong" ? "text-green-400" : "text-red-600"}`}>{el}</li>))}
            </ul>
        </>
    )
}