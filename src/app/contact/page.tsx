import './contact.css'
import Image from 'next/image';
import email from '../public/email.png';
import address from '../public/address .png';
import phone from '../public/phone.png';


export default function Contact(){
    return(
        <div>
           <h1 className='contact-head'>Contact</h1>
           <p className='contact-para'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, eum!</p>
          <div className='contacts-initial'>
            <Image src={ email} width={50} height={100} alt='' className='email-logo'></Image>
           <p className='mail'>yusra7003@gmail.com</p>
           <Image src={ phone} width={50} height={100} alt='' className='phone-logo'></Image>
           <p className='phone'>+1(555)000-0000</p>
           <Image src={ address} width={50} height={100} alt='' className='address-logo'></Image>
           <p className='city'>Karachi, Pakistan</p>

           </div> 
           <div className='form'><form>
  <div className='name'>
    <label htmlFor="name">Name:</label>
    <input type="text" id="name" name="name" required className='name-input' />
  </div>
  
  <div className='email-form'>
    <label htmlFor="email">Email:</label>
    <input type="email" id="email" name="email" required  className='mail-input'/>
  </div>
  
  <div className='msg-form'>
    <label htmlFor="message">Message:</label>
    <textarea id="message" name="message" required className='msg-input'></textarea>
  </div>
  <div className='checkbox'>
  <input type="checkbox" id="exampleCheckbox" name="exampleCheckbox" />
  <label htmlFor="exampleCheckbox" className='checkbox-label'>I agree to the terms and conditions</label>
</div>

  <button type="submit" className='submit-btn'>Submit</button>
</form>
</div>
        </div>
    )
}