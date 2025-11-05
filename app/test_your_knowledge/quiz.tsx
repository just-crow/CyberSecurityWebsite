'use client'

import React, {useState} from 'react'

interface P {
    q: string
    ans: string
    choices: string[]
    id: string
}

export default function Quiz({q, ans, choices, id}: P) {
    const [selected, setsel] = useState(-1);

    return (
        <div className="w-fit mx-auto">
            <h1 className="text-white title-resp">{q}</h1>

            {choices.map((el, i) => (
                <div onClick={() => {setsel(i)}} className={`flex flex-row items-center choice w-full rounded-sm bg-gray-800 hover:cursor-pointer transition-colors p-1 duration-500 ${selected === i ? (parseInt(ans) - 1 === i ? "text-green-600" : "text-red-400") : "text-white"}`} id={`container-${id}-${i}`}>
                    <input type="radio" checked={selected===i} className="border hover:cursor-pointer" name={id}/>
                    <label className="w-full w-max-[100vw] ml-[1vw] hover:cursor-pointer" id={`label-${id}-${i}`}>{el}</label>
                </div>
            )
            )}
        </div>
    )
}