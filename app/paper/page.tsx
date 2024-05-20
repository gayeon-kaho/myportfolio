import Link from "next/link";
import '@/app/paper/paper.css'
import {orizontlink, ogatalablink, uranishilablink} from "@/app/property";

export default function Page() {
    return (
        //<div className="bg-paper-background w-screen min-h-screen text-center">
          //  <header className="absolute w-screen px-12 py-6 flex gap-8 justify-end">
            //    <a>About</a>
            //    <Link href="/photographic">I&apos;ve Done</Link>
          //  </header>
            <main className={'inline-block mx-auto'}>
                <div className={'paper'}>
                    <h1>My Skills</h1>
                    <h3>Education</h3>
                    <p>Master&apos; degree) Osaka University, Information Science and Technology</p>
                    <p><a href={uranishilablink} target={'_blank'} rel={'noopener noreferrer'}
                       className={'inline'}>[Click here to see my lab!]</a></p>
                    <p>Bachelor&apos;s degree) Kumamoto University, Electronic Engineering</p>
                    <a href={ogatalablink} target={'_blank'} rel={'noopener noreferrer'}
                       className={'inline'}>[Click here to see my lab!]</a>
                    <p>Highschool) Liceul Teoretic Orizont</p>
                    <a href={orizontlink} target={'_blank'} rel={'noopener noreferrer'}
                       className={'inline'}>[Click here to see my school!]</a>
                    <h3>Languages</h3>
                    <p>Korean (Native language)</p>
                    <p>Japanese (JLPT N1)</p>
                    <p>English (TOEIC score 950)</p>
                    <p>Romanian (Moldovan Bacalaureat)</p>
                    <h3>Certificate</h3>
                    <p>Microosft Certificate: Azure Fundamentals (AZ-900)</p>
                    <p>IPA: Fundamental Information Technology Engineer Examination (基本情報処理技術者)</p>
                    <p>IPA: Information Technology Passport Examination (ITパスポート)</p>
                    <p>Second-Class Land Special Radio Operator (第二級陸上特殊無線技士)</p>
                    <h3>Programming</h3>
                    <p>Python</p>
                    <p>C / C++ / C#</p>
                    <p>JavaScript</p>
                    <h3>Activity/Internship</h3>
                    <p>Osaka University GDSC (Google Developer Student Club): Event team Lead (2024)</p>
                    <p>Microsoft Japan: Azure PaaS Developer Technical Support Engineer Intern (2022)</p>
                    <p>Kumamoto University Aviation Club: Captain (2022) &amp;Accountant (2021) <p/>
                    <p>Kumamoto University Athletic association headquarters: Director of general affairs (2022)</p>
                </div>
            </main>
            <footer className={'py-8'}>
                Lee GaYeon (KaHo) © {new Date().getFullYear()}
            </footer>
      //  </div>
    )
}
