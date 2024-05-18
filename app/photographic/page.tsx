import "@/app/photographic/photographic.css"
import Image from "next/image";
import CherryBlossom from "@/assets/photographic/cherry.png";
import myhistory from"@/assets/myhistory.png"
import Nemophila from "@/assets/photographic/nemophila.jpg";
import {Section} from "@/app/photographic/_components/section";

export default function Page() {
    return (
        <>
            <header className={'px-16 py-8 bg-photo-surface'}>
                <h1 className={'text-[1.75rem] leading-loose'}>My experiences</h1>
                <p>Currently living in Japan / Antevasin</p>
            </header>
            <main>
                <Image src={CherryBlossom} alt={'cherry-blossom'} className={'w-8/12 h-96 object-cover'}/>
                <section className={'mt-8'}>
                    <Image src={myhistory} alt={"myhistory"}  width={1600} height={1200} className={'w-full h-auto my-8'}/>
                </section>
                <Image src={Nemophila} alt={'nemophila'} className={'w-8/12 h-96 object-cover ml-auto'}/>
            </main>
            <footer className={'py-8 item-center'}>
                anya © {new Date().getFullYear()}
            </footer>
        </>
    )
}
