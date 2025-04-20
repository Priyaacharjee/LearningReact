import React,{useState} from 'react'
import Accordion from './Accordion';

const Men=()=>{
    const[open,setOpen]= useState(0);

    const handleToggle = (index) => {
    setOpen(prev => prev === index ? null : index);
  };

    return(
    <div className='max-w-6xl mx-auto'>
        <h1 className='font-bold text-xl'>Filter Options</h1>
        {
            ["Brand","Men","Women","Kids"].map((title,index)=>
            <Accordion key={index} title={title} //controlled component
            open={index === open?true:false}
            
            //setOpen={()=> setOpen(index)} //no toggling so made the new func
            setOpen={() => handleToggle(index)}
            />
        )}
    </div>
    )
}
export default Men;