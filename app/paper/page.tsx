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
                    <h3>About</h3>
                    <p>大阪大学大学院 情報科学研究科 情報システム工学専攻 M1</p>
                    <h3>History</h3>
                    <h3>Contact</h3>
                    <h3>Works</h3>
                </div>
            </main>
            <footer className={'py-8'}>
                anya © {new Date().getFullYear()}
            </footer>
        </div>
    )
}
