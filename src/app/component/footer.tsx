import './footer.css'
import Image from 'next/image';
import Ddsgnr from '../public/Ddsgnr Library.png';

export default function Footer(){
    return(
        <div>
            <h1 className='subscribe'>Subscribe to our newsletter</h1>
            <p className='Lorem'>Lorem ipsum dolor sit amet.</p>
            <div className='input'>
            <input type="email" placeholder="Enter your email" className="email-input" />
            <button className='sub'>Subscribe</button>
            </div>
            <p className='sub-para'>By subscribing you agree to with our <a>privacy policy</a></p>
            <div>
                {/* <Image src='' width={} height={} alt=''></Image> */}
                <Image src={Ddsgnr} width={50} height={50} alt='' className='footer-logo'></Image>
                
                <div className='courses'>
                     <h2 className='course-head-footer'>Courses</h2>
                    <ul>
                        <li>Business</li>
                        <li>Development</li>
                        <li>Technology</li>
                        <li>Design</li>
                        <li>Programming</li>
                        <li></li>
                    </ul>
            </div>
            <div className='resources'>
             <h2 className='resource-head'>Resources</h2>
             <ul>
                <li>Career</li>
                <li>Resume</li>
                <li>Learning</li>
                <li>Interview Prepartion</li>
                <li>Jobs</li>
             </ul>
            </div>
            <div className='about'>
                <h2 className='about-head'>About Us</h2>
                <ul>
                    <li>Contact</li>
                    <li>Help/Support</li>
                    <li>FAQ</li>
                    <li>Terms and Conditions</li>
                    <li>Partners </li>
                </ul>
                <hr className='line'/>
            </div>
            <div className='last-part'>
                <p className='rights'> 2024 Ddsgnr.All rights reserved</p>
                <div className='links'>
                <a className='pp'>Privacy Policy</a>
                <a className='terms'>Terms of service</a>
                <a className='cookie'>Cookie Settings</a>
                </div>
            </div>
            </div>
        </div>
    )
}