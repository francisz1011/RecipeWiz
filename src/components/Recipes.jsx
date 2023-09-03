import React  from 'react'
import { useState } from "react"
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'




const Recipes = () => {

  const slides =[

{
  url:'https://cdn.pixabay.com/photo/2017/09/30/15/10/plate-2802332_1280.jpg'
},
{
  url:'https://cdn.pixabay.com/photo/2016/11/23/18/31/pasta-1854245_1280.jpg'
},
{
  url:'https://cdn.pixabay.com/photo/2018/04/13/17/14/vegetable-skewer-3317060_1280.jpg'
},
{
  url:'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_1280.jpg'
},
{
  url:'https://cdn.pixabay.com/photo/2016/06/07/17/15/yogurt-1442034_1280.jpg'
},
{
url:'https://cdn.pixabay.com/photo/2017/09/28/18/13/bread-2796393_1280.jpg'
},
{
  url:'https://cdn.pixabay.com/photo/2016/11/18/14/39/beans-1834984_1280.jpg'
},

];
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex)
  }
  const nextSlide = () => {
     const isLastSlide = currentIndex === slides.length - 1;
     const newIndex = isLastSlide ? 0 : currentIndex + 1;
     setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  }

  return (
    <div id='recipes' className='max-w-[1400px] h-[620px] w-full py-16 px-4 relative bg-slate-900'>
     <h1 className='text-yellow-500 text-3xl ml-[520px] mt-[30px] mb-8 font-serif'> 
      AI Curated Recipes
       </h1>  
       <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className='w-[400px] h-[400px] ml-[450px] rounded-2xl bg-center bg-cover duration-500'>
       </div>
       <div className='absolute top-[50%] -translate-x-0 translate-y-50 left-[400px] text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30}/>
       </div>

       <div className='absolute top-[50%] -translate-x-0 translate-y-50 right-[335px] text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30}/>
       </div>
       <div className='flex top-4 justify-center py-2 ml-16'>
         {slides.map((slide, slideIndex) => (
          <div key={slideIndex}
          onClick={() => goToSlide(slideIndex)}
          className='text-1xl cursor-pointer'>
             <RxDotFilled/> 
          </div>
         ))}
       </div>
    </div>
  )
}

export default Recipes;