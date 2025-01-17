
import Link from "next/link"

export default function Header(){
    return(
        <ul className="flex gap-20 bg-yellow-400">
        <li> <Link href="/">Home</Link></li>
        <li> <Link href="/about"> About </Link></li>
        <li> <Link href="career">Career</Link></li>
        <li> <Link href="contact-us">Contact</Link></li>
    
    </ul>
    )
}
