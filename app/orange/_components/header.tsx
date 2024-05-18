import Link from "next/link";
import Image from "next/image";
import Triangle from "@/assets/orange/triangle.svg"

export default function Header() {
    return (
        <header className={'flex flex-row items-center gap-6'}>
            <Link href={'/orange'}>About me</Link>
            <Image src={Triangle} alt={"fruit"}  width={19} height={21}/>
            <Link href={'/paper'}>Skill</Link>
            <Image src={Triangle} alt={"fruit"}  width={19} height={21}/>
            <Link href={'/photographic'}>Experience</Link>
        </header>
    )
}
