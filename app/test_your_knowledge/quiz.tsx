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
                <div className={`choice w-full rounded-sm bg-gray-800 transition-colors p-1 duration-500 ${selected === i ? (parseInt(ans) - 1 === i ? "text-green-600" : "text-red-400") : "text-white"}`} id={`container-${id}-${i}`}>
                    <input type="radio" name={id} onChange={() => {setsel(i)}}/>
                    <label className="w-full ml-[2vw]" id={`label-${id}-${i}`}>{el}</label>
                </div>
            )
            )}
        </div>
    )
}