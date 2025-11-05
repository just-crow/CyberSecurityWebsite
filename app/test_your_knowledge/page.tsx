import React from 'react'
import Navbar from '../navbar'
import Quiz from './quiz'

export default function QuizPage() {
    return (
        <>
            <Navbar/>
            <h1 className="w-fit mx-auto text-3xl color-green my-26 cygreen spread">Test Your Knowledge</h1>
            <Quiz q="Hello how are you are" choices={["Hello", "Hello", "Hello", "Hello"]} ans="1" id="1"/>
        </>
    )
}