

import Link from "next/link";
import Image from "next/image";
import Ddsgnr from '../public/Ddsgnr Library.png';
import './header.css'
export default function Header() {
    return (
        <div className="main">
            <Image src={Ddsgnr} width={50} height={100} alt="" className="logo" />
            <ul className="navbar">
                <li>
                    <Link href='/'>Home</Link>
                </li>
              <li>
                    <Link href="courses">Courses</Link>
                </li>
                <li>
                    <Link href="contact">Contact</Link>
                </li>
            </ul>
            <div className="btns">
                <button className="login">Login</button>
                <button className="sign">Sign Up</button>
            </div>
        </div>
    );
}
