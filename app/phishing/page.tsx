import React from 'react'
import Navbar from '../navbar'

export default function PhishingPage() {
    return (
        <>
            <Navbar></Navbar>
            
            <div className="flex flex-row gap-150 items-center min-h-screen h-fit">
                <div>
                    <h1 className="w-fit mx-auto title-resp color-green cygreen spread">Phishing</h1>

                    <h1 className="info-text max-w-[35vw] break-text">Phishing is a fraudulent attempt by hackers who try to obtain sensitive personal data via email or SMS, usually by impersonating trusted organizations, people we know or just offering an advantageous offer. The cybercriminals usually use the victims' trust to take over accounts, deploy ransomware attacks, etc. Here are the tactics used to make the scams look eligible:</h1>
                    
                    <hr className="text-gray-600 mx-5"/>

                    <ul className="info-text max-w-[35vw] break-text">
                        <li className="pre">Accessing personal data linked to the online identity of the impacted user.</li>
                        <li className="pre">Cloning websites and apps to mimic the legitimate platforms</li>
                        <li className="pre">Using artificial intelligence to generate professional and formal messages.</li>
                        <li className="pre">Applying techniques like <code>email spoofing</code> or <code>domain spoofing</code> to make messages appear legitimate. etc.</li>
                    </ul>
                </div>

                <div className="grid grid-cols-1 content-between h-[190%] absolute right-[3vw] top-[20vw] sm:top-[8.5vw] sm:h-fit sm:gap-4 sm:grid-cols-2">
                    <div className="phimage-container">
                        <img className="phimage" src="/images/phishing/img1.png" alt="img1" />
                    </div>

                    <div className="phimage-container">
                        <img className="phimage" src="/images/phishing/img2.jpg" alt="img2" />
                    </div>

                    <div className="phimage-container">
                        <img className="phimage" src="/images/phishing/img3.png" alt="img3" />
                    </div>

                    <div className="phimage-container">
                        <img className="phimage" src="/images/phishing/img4.png" alt="img4" />
                    </div>
                </div>
            </div>

            <h1 className="info-text">Over 90% of cyberattacks start with a phishing email, but they are not impossible to recognize. Your email account usually filters the unwanted messages, but if they are sending them through a trusted infrastructure it can pass checks and end up in your inbox. Here are a few ways you can spot a phishing email:</h1>
            <hr className="text-gray-600 width-[80%] my-5"/>
            <ul className="ml-20 text-white mb-15 text-[21px]">
                <li className="pre">The sender’s email does not match the name of the official company. For example, The official address of the company Netflix is <code>“info@members.netflix.com”</code>, but you received an email from <code>“info@members.netfIix.com”</code>. This subtle difference can be difficult to detect. If you take a closer look, the letter <code>“l”</code> in the word <code>“netflix”</code> is replaced with a capital <code>“I (i)”</code>. Falling for a mistake as such can result in hackers obtaining your credit card information or your passwords and important data.</li>
                <li className="pre">There are many grammatical errors.</li>
                <li className="pre">Rather than your real name, a generic greeting is used (Customer, dear, account holder, etc.)</li>
                <li className="pre">If they send you a website link, check the URL scheme. If it is not <code>“https”</code>, you should avoid trusting them.</li>
                <li className="pre">The “company” sending you the email has a public domain (e.g. @gmail.com).</li>
            </ul>
        </>
    )
}