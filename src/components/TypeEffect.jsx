import { TypeAnimation } from 'react-type-animation';


const TypeEffect = () => {
  return (
    
    <div className='text-amber-500 text-4xl text-bold  flex absolute mt-[220px] ml-[320px]'>  
<TypeAnimation
      sequence={[
        
        'AI Curated Recipes !',
        2000, 
        'Fridge Findings To Recipes !',
        2000,
        'Tailored Just For You !',
        2000,
        'AI Personal Chef',
        2000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
    
    </div>
   
  )   
    
  };
export default TypeEffect;