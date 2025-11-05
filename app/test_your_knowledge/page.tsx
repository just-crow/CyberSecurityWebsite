import React from 'react'
import Navbar from '../navbar'
import Quiz from './quiz'
import StrengthChecker from './strengthchecker'

export default function QuizPage() {
    return (
        <>
            <Navbar/>
            <h1 className="w-fit mx-auto text-4xl color-green my-26 cygreen spread">Test Your Knowledge</h1>
            <Quiz q="What is the primary goal of phishing attacks?" choices={["To install games on your computer", "To obtain sensitive personal data from users", "To update your software automatically", "To improve internet speed"]} ans="2" id="1"/>
            <Quiz q="Which of the following is NOT a common indicator of a phishing email?" choices={["Grammatical errors in the message", "Sender email doesn’t match the official company domain", 'Generic greetings like "Dear Customer"', "Email contains your correct name and official company logo"]} ans="4" id="2"/>
            <Quiz q="HTML smuggling is primarily used to:" choices={["Improve website load times", "Deliver ransomware or malware directly to the user’s computer", "Send newsletters automatically", "Enhance browser security"]} ans="2" id="3"/>
            <Quiz q="Which type of malware encrypts your files and demands payment to restore access?" choices={["Adware", "Trojan", "Ransomware", "Spyware"]} ans="3" id="4"/>
            <StrengthChecker/>
        </>
    )
}