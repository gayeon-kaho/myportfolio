import Link from "next/link";
import Image from "next/image";
import Triangle from "@/assets/orange/triangle.svg"

export default function Header() {
    return (
        <header className={'flex flex-row items-center gap-6'}>
            <Link href={'/photographic'}>I&apos;ve Done</Link>
            <Image src={Triangle} alt={"fruit"}  width={19} height={21}/>
            <Link href={'/paper'}>I&apos;ve Learned</Link>
            <Image src={Triangle} alt={"fruit"}  width={19} height={21}/>
            <Link href={'/orange'}>I Love</Link>
        </header>
    )
}
