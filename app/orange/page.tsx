import "@/app/photographic/photographic.css"
import Image from "next/image";
import Food1 from "@/assets/food1.png";
import Food2 from "@/assets/food2.png";
import {Section} from "@/app/photographic/_components/section";

export default function Page() {
    return (
        <>
            <header className={'px-16 py-8 bg-photo-surface'}>
                <h1 className={'text-[1.75rem] leading-loose'}>I Love</h1>
            </header>
            <main>
                <Image src={CherryBlossom} alt={'cherry-blossom'} className={'w-8/12 h-96 object-cover'}/>
                <Section>
                    <h2>Jazz</h2>
                    <p> </p>
                </Section>
                <Image src={Nemophila} alt={'nemophila'} className={'w-8/12 h-96 object-cover ml-auto'}/>
                <Image src={Food2} alt={'food2'} className={'w-8/12 h-96 object-cover'}/>
                <Section>
                    <h2>Foods</h2>
                    <p>I love to cook, bake and eat</p>
                </Section>
                <Image src={Food1} alt={'food1'} className={'w-8/12 h-96 object-cover ml-auto'}/>
                <Image src={CherryBlossom} alt={'cherry-blossom'} className={'w-8/12 h-96 object-cover'}/>
                <Section>
                    <h2>People</h2>
                    <p> </p>
                </Section>
            </main>
            <footer className={'py-8'}>
                Lee GaYeon (KaHo) © {new Date().getFullYear()}
            </footer>
        </>
    )
}
