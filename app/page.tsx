import Header from "@/app/orange/_components/header";
import Footer from "@/app/orange/_components/footer";
import {githubLink, linkedinLink} from "@/app/property";
import "@/app/orange/_components/header.css";
import Image from "next/image";
import LinkedIn from "@/assets/linkedin_logo.png"
import GitHub from "@/assets/github_logo.png"
import thumbnail from "@/assets/thumbnail.jpg"

export default function Home() {
  return (
      <main className={'w-screen h-screen p-20 bg-slate-50 flex justify-center items-center'}>
        <div className={'relative w-full max-w-screen-lg flex flex-col items-center'}>
          
          <div className="z-10 text-center">
            <Header/>
          </div>
          
          <div classname="relative w-full">
            <Image src={thumbnail} alt={"thumbnail"} width={360} height={540} className="absolute top-16 left-1/2 transform -translate-x-1/2 -z-10"/>
          </div>

          <div className="z-10 text-center">
            <h1 className={"py-32 line"}>
              <p className={'inline text-6xl font-semibold pr-6'}>Hello, I&apos;m GaYeon/KaHo!</p>
            </h1>
          </div>
          
            <div className={'relative w-full  h-[36rem] z-10'}>
              <section className={'bg-orange-container-a rounded-[1rem] p-12 leading-loose ' +
                        'absolute top-12'} style={{ right: '-16rem' }}>
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
        </div>
      </main>
  );
}
