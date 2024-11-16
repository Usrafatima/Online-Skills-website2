import './home.css';
import Image2 from './public/Image2.png';
import Image from 'next/image';
import blonde from './public/blonde.png';
export default function Home() {
  return (
   <div>
    <h1 className="main-head">Learn new Skills online with ease</h1>
    <p className="main-para">
      Discover a wide range of courses a variety of subjects, taught 
      by expert instructions.
    </p>
    <Image 
            src={Image2} 
            width={100}                   
            height={100}                  
            alt="Description of the image"
           className='pic'
        />
        <div className='main-btns'>
    <button className='learn'>Start Learning now</button>
    <button className='explore'>Explore Courses</button>
    </div>
    <div className='main-border'>
      <h1 className='trust'>Trusted by 2000+ companies worldwide.</h1>
    </div>
    <div>
      <h1 className='discover'>Discover a wide range of courses covering a variety of subjects,
        taught by expert instructors.
      </h1>
      <p className='d-para1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab esse in atque dicta veritatis officia ullam sint 
        perspiciatis dolorem, quis non excepturi repellat totam maiores nostrum debitis ex fugiat natus.</p>
        <p className='d-para2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo a autem itaque asperiores dolore inventore veritatis, quam natus minima? Quasi?</p>
        <p className='d-para3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nulla perspiciatis, suscipit iste, et consequatur quos rem quam possimus quaerat sed tempore cupiditate maxime totam?</p>
        <Image 
            src={blonde}  
            width={100}                    
            height={100}                   
            alt="Description of the image"
           className='blonde'
        />
        <div className='last-btn'>
        <button className='exp-btn'>Explore Courses</button>
        </div>
    </div>
   </div>
  );
}
