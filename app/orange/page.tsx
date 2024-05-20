import "@/app/photographic/photographic.css"
import Image from "next/image";
import CherryBlossom from "@/assets/photographic/cherry.png";
import Nemophila from "@/assets/photographic/nemophila.jpg";
import Jazz1 from "@/assets/orange/jazz1.png";
import Jazz2 from "@/assets/orange/jazz2.png";
import Food1 from "@/assets/food1.png";
import Food2 from "@/assets/food2.png";

export default function Page() {
    return (
        <>
            <header className={'px-16 py-8 bg-photo-surface'}>
                <h1 className={'text-[1.75rem] leading-loose'}>I Love</h1>
            </header>
            <main>
                <Image src={Jazz2} alt={'jazz2'} className={'w-full h-96 object-cover'}/>
                    <section className={'bg-photo-surface h-48 flex flex-col justify-center items-center gap-2'}>
                    <h2 className={'font-semibold'}>Jazz</h2>
                    <p>Ella Fitzgerald, Frank Sinatra, Chet Baker and many other</p>
                </section>
                <Image src={Jazz1} alt={'jazz1'} className={'w-full h-96 object-cover ml-auto'}/>
                <Image src={Food2} alt={'food2'} className={'w-full h-96 object-cover'}/>
                <section className={'bg-photo-surface h-48 flex flex-col justify-center items-center gap-2'}>
                    <h2 className={'font-semibold'}>Foods</h2>
                    <p>I love to cook, bake and eat since I was 8 years old</p>
                </section>
                <Image src={Food1} alt={'food1'} className={'w-full h-96 object-cover ml-auto'}/>
                <Image src={CherryBlossom} alt={'cherry-blossom'} className={'w-8/12 h-96 object-cover'}/>
                <section className={'bg-photo-surface h-48 flex flex-col justify-center items-center gap-2'}>
                    <h2 className={'font-semibold'}>People</h2>
                    <p>When people being people!</p>
                </section>
                <Image src={Nemophila} alt={'nemophila'} className={'w-8/12 h-96 object-cover ml-auto'}/>
            </main>
            <footer className={'py-8'}>
                Lee GaYeon (KaHo) © {new Date().getFullYear()}
            </footer>
        </>
    )
}
