import React from 'react'
import Navbar from './navbar'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Navbar></Navbar>
    <h1 className="w-fit mx-auto text-3xl color-green my-18 cygreen spread">Cyber Security</h1>
    <h1 className="info-text">One of the bigger problems amongst the usual users of the internet is malicious software. The developer of the software tends to utilize our computer for their own benefit. The most popular strands of cyber threats are phishing, malware infections and social engineering attacks. The consequences for falling for one of these tricks can be severe. They go from losing access to the files of your computer, all the way to giving the hackers access to your online bank accounts. I will perform research on high schoolers. This essay will cover phishing attacks, malware and weak passwords.</h1>
    <hr></hr>
    <h1 className="info-text">Phishing is a fraudulent attempt by hackers who try to obtain sensitive personal data via email or SMS, usually by impersonating trusted organizations, people we know or just offering an advantageous offer. The cybercriminals usually use the victims' trust to take over accounts, deploy ransomware attacks, etc.</h1>
    <Link className='godeeper hover:text-green-400 hover:bg-gray-400 duration-300' href="./phishing">Go deeper</Link>
    <img className="mx-auto" src="https://i.ibb.co/HLHjx4cX/diagram-phishing-attack.png" alt="https://www.cloudflare.com/learning/access-management/phishing-attack/"></img>
    <h1 className="info-text">Malware is a software that strives to damage computer systems, networks, etc. Its usual functionality is to steal or encrypt the users data and get full access to your computer. Cybercriminals developed multiple types of malware and use it for different purposes.</h1>
    <Link className='godeeper hover:text-green-400 hover:bg-gray-400 duration-300' href="./malware">Go deeper</Link>
    <img className="mx-auto" src="https://i.ibb.co/39b0nGXF/image-removebg-preview-2.png" alt="https://www.csoonline.com/article/548570/security-your-quick-guide-to-malware-types.html"></img>
    <h1 className="info-text">Weak passwords cause the most damage in the community. Many people use predictable and commonly used passwords such as “1234567”, “querty”... Nowadays, computers can break through these passwords in a matter of minutes. Damages caused by weak passwords can be huge. Hackers can infiltrate into your accounts, enabling them to steal your identity, take over your websites, damage your reputation, breach data, etc.</h1>
    <Link className='godeeper hover:text-green-400 hover:bg-gray-400 duration-300' href="./password_security">Go deeper</Link>
    <img className="mx-auto" src="https://i.ibb.co/JF7WgTYv/image.png" alt="https://www.keepersecurity.com/blog/2024/02/29/how-weak-passwords-lead-to-ransomware-attacks/"></img>
    <Link className="flex mx-auto my-10 bg-black text-white w-full h-16 items-center justify-center border-2 rounded-xl text-2xl hover:text-green-400 duration-300" id="testk" href="./test_your_knowledge">Test Your Knowledge</Link>
    </>
  );
}
