import Link from "next/link";
import {githubLink, linkedinLink, twitterLink, yourName} from "@/app/property";
import LinkedIn from "@/assets/linkedin_logo.png"
import GitHub from "@/assets/github_logo.png"
import Gmail from"@/assets/gmail_logo.png"

export default function Home() {
  return (
      <main className={'w-screen h-screen p-20 bg-slate-50 flex flex-row gap-4'}>
          <Link href={'/orange'}>
              History
          </Link>
          <Link href={'/paper'}>
              Skill
          </Link>
          <Link href={'/photographic'}>
              About me
          </Link>
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
      </main>
  );
}
