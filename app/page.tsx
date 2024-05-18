import Header from "@/app/orange/_components/header";
import Footer from "@/app/orange/_components/footer";
import Link from "next/link";
import {githubLink, linkedinLink, gmailLink, yourName} from "@/app/property";
import Image from "next/image";
import LinkedIn from "@/assets/linkedin_logo.png"
import GitHub from "@/assets/github_logo.png"
import Gmail from"@/assets/gmail_logo.png"
import myhistory from"@/assets/myhistory.png"

export default function Home() {
  return (
      <main className={'w-screen h-screen p-20 bg-slate-50 flex flex-row gap-4'}>
          <div className={'max-w-screen-lg flex flex-col items-center mx-auto px-12 z-10'}>
            <Header/>
            <h1 className={"py-32 line"}>
              <p className={'inline text-6xl font-semibold pr-6'}>{yourName}</p>
            </h1>
            <div className={'relative w-full  h-[36rem]'}>
              <section className={'bg-orange-container-a rounded-[3rem] p-12 leading-loose ' +
                        'absolute right-12 top-12'}>
                <ul className={'flex flex-col gap-4'}>
                  <li>
                    <Image src={Gmail} alt={'gmail'}
                      width={30} height={30} className={'inline mr-3'}/>
                    <a href={gmailLink} target={'_blank'} rel={'noopener noreferrer'}
                      className={'inline'}>Gmail</a>
                  </li>
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
            <div>
              <Image src={myhistory} alt={"myhistory"}  width={1600} height={1200} className={'items-center absolute top-[800px] right-0'}/>
            </div>
            <Footer/>
          </div>
      </main>
  );
}
