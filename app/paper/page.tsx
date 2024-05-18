import '@/app/paper/paper.css'

export default function Page() {
    return (
        <div className={'bg-paper-background w-screen min-h-screen text-center'}>
            <header className={'absolute w-screen px-12 py-6 flex gap-8 justify-end'}>
                <a>About</a>
                <a>Works</a>
            </header>
            <main className={'inline-block mx-auto'}>
                <div className={'paper'}>
                    <h1>Lee GaYeon (KaHo)</h1>
                    <h2>イ ガヨン (かほ)</h2>
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
                    <h3>IT skills</h3>
                    <p>Python</p>
                    <p>C / C++ / C#</p>
                    <p>JavaScript</p>
                    <h3>Experience/Internship</h3>
                    <p>Microsoft Azure PaaS Developer Technical Support Engineer (Intern)</p>
                    <p>Osaka University GDSC (Google Developer Student Club) Event team Lead</p>
                </div>
            </main>
            <footer className={'py-8'}>
                Lee GaYeon (KaHo) © {new Date().getFullYear()}
            </footer>
        </div>
    )
}
