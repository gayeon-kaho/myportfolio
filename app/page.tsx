import Header from "@/app/orange/_components/header";
import Footer from "@/app/orange/_components/footer";
import {githubLink, linkedinLink} from "@/app/property";
import Image from "next/image";
import LinkedIn from "@/assets/linkedin_logo.png"
import GitHub from "@/assets/github_logo.png"

export default function Home() {
  return (
      <main className={'w-screen h-screen p-20 bg-slate-50 flex flex-row gap-4'}>
          <div className={'max-w-screen-lg flex flex-col items-center mx-auto px-12 z-10'}>
            <Header/>
            <h1 className={"py-32 line"}>
              <p className={'inline text-6xl font-semibold pr-6'}>Hello, I'm GaYeon/KaHo!</p>
            </h1>
            <div className={'relative w-full  h-[36rem]'}>
              <section className={'bg-orange-container-a rounded-[1rem] p-12 leading-loose ' +
                        'absolute top-12'} style={{ left: '-17rem' }}>
                <ul className={'flex flex-col gap-4'}>
                  <li>
                    <Image src={LinkedIn} alt={'linkedin'}
                      width={30} height={30} className={'inline mr-3'}/>
                    <a href={linkedinLink} target={'_blank'} rel={'noopener noreferrer'}
                       className={'inline'}>LinkedIn</a>
                  </li>
                  <li>
                    <Image src={GitHub} alt={'github'}
                      width={30} height={30} className={'inline mr-3'}/>
                    <a href={githubLink} target={'_blank'} rel={'noopener noreferrer'}
                      className={'inline'}>GitHub</a>
                  </li>
                </ul>
              </section>
            </div>
            <Footer/>
          </div>
      </main>
  );
}
