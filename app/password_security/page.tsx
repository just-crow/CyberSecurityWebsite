import React from 'react'
import Link from 'next/link'
import Navbar from '../navbar'
import PasswordChecker from './passwordchecker'

export default function () {
    return (
        <>
        <Navbar/>
        <h1 className="w-fit mx-auto text-3xl color-green my-18 cygreen spread">Password Security</h1>
        <h1 className="info-text">Out of all threats that were discussed in this essay, weak passwords cause significant damage. Many people still use predictable and commonly used passwords such as <code>“1234567”</code>, <code>“querty”</code>, etc. Nowadays, computers can break through these passwords in just a few minutes.</h1>
        <hr/>
        <h1 className="info-text">Damages caused by weak passwords can be huge. Hackers can infiltrate your accounts, enabling them to steal your identity, take over your websites, damage your reputation, or access sensitive data. Cybercriminals can, with just one weak password, masquerade as the user to withdraw assets or breach all computers in the same network, leaking confidential information.</h1>
        <hr/>
        <h1 className="info-text">Statistics show that weak passwords cause <code>30%</code> of global data breaches and <code>81%</code> of company breaches. Over <code>75%</code> of people do not follow the recommended rules. Many users set passwords to their birthday, pet’s name, child’s name, etc.

One of the largest password exposures was the Yahoo data breach in 2013. Hackers exploited a vulnerability in Yahoo’s software, exposing personal account data. The company reported 3 billion accounts affected. Hackers stole names, emails, phone numbers, birth dates, and encrypted passwords. The outdated <code>MD5</code> encryption allowed hackers to crack the passwords using brute-force attacks.</h1>

        <div className="flex justify-around">
            <div className="pass-img-container"><img className="password-image" src="https://i.ibb.co/Vc5jrMNX/image.png" alt="https://bluelance.com/blog-posts/active-directory-security-mistakes"></img></div>
            <ul className="space-y-1">
                <h1 className="text-green-400 w-full text-center">Secure</h1>
                <li className="text-white w-full text-center">H7v$9qZ!xLp3</li>
                <li className="text-white w-full text-center">rT4@bV6k#Fq8</li>
                <li className="text-white w-full text-center">M!n8uX2%pJs9</li>
                <li className="text-white w-full text-center">wQ3&yE7*Vz5R</li>
                <li className="text-white w-full text-center">cD9#kF2!mRt6</li>
                <li className="text-white w-full text-center">P4v*Lz8@hQj1</li>
                <li className="text-white w-full text-center">xR2$wJ7!nVt9</li>
                <li className="text-white w-full text-center">bG5@pM6#sQk4</li>
                <li className="text-white w-full text-center">T!k9qF3&vHx8</li>
                <li className="text-white w-full text-center">nV7#xR2$wYp5</li>
            </ul>
            <ul className="space-y-1">
                <h1 className="text-red-600 w-full text-center">Not Secure</h1>
                <li className="text-white w-full text-center">123456</li>
                <li className="text-white w-full text-center">password</li>
                <li className="text-white w-full text-center">qwerty</li>
                <li className="text-white w-full text-center">111111</li>
                <li className="text-white w-full text-center">letmein</li>
                <li className="text-white w-full text-center">abc123</li>
                <li className="text-white w-full text-center">admin</li>
                <li className="text-white w-full text-center">welcome</li>
                <li className="text-white w-full text-center">monkey</li>
                <li className="text-white w-full text-center">1234abcd</li>
            </ul>
            <div className="pass-img-container"><img className="password-image" src="https://i.ibb.co/fVjB9kRD/image.png" alt="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ezmsp.com%2Fblog%2Fit-s-time-to-stop-using-weak-passwords-period&psig=AOvVaw164S8nz6dcCstiT32EMltd&ust=1762271486684000&source=images&cd=vfe&opi=89978449&ved=0CBgQjhxqFwoTCJDy0ZCr1pADFQAAAAAdAAAAABAL"></img></div>
        </div>
        <hr/>
        <h1 className="info-text">There are certain rules that build an uncrackable password. It should contain at least 12 characters, with a combination of lowercase letters, uppercase letters, numbers and symbols. It is recommended to use a memorable phrase that would be easy for you to remember, but hard for others to guess, for example “BlueTiger!Sun23”.</h1>
        <h1 className="info-text">It is crucial to check the security of your password. That can be done through the site called <a className="text-blue-400" href="https://haveibeenpwned.com/." target="_blank">“HaveIBeenPwned“</a>, or accesing the integrated tool below</h1>
        <h1 className="w-fit mx-auto text-2xl text-white mb-3">Password Integrity Checker</h1>
        <PasswordChecker/> 
        </>
    )
}