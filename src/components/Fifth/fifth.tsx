import React from 'react'
import Image from 'next/image'
export const Fifth = () => {
  return (
    <>
    <div className='bg-[#3366ff] w-[100vw] h-[800px] flex items-center'>
        <div className='w-[90%] h-[80%] bg-[#ffffff] m-auto border-2 border-black rounded-3xl flex item-center  ' style={{boxShadow:"20px 20px 0px black"}}>
            <div className=' flex-col w-[80%] h-[90%]  m-auto sm:w-[60%]'>
                <div className='w-[100%] h-[20%] text-center text-3xl font-bold py-[10px]'>
                    FAQs
                    <hr className='h-[10px] my-8 bg-[#3366ff] rounded-xl m-auto w-[40%] sm:w-[40%]'/>
                    <Image className=' hidden xl:block relative left-[850px] bottom-[140px]' src="/faq.png" alt="image" height={150} width={150}/>
                    <Image className=' hidden xl:block relative right-[160px] bottom-[160px]' src="/arrow.png" alt="image" height={150} width={150}/>
                </div>
                <div className='justify-around flex item-center w-[100%] h-[25%] py-[10px] sm:pt-[20px]'>
                    <div className='w-[20%] h-[40%] bg-[#D8FF40] border-black border-2 rounded-3xl text-xs text-center pt-[13px] cursor-pointer sm:font-medium sm:pt-[13px]'><a href="#">General</a></div>
                    <div className='w-[20%] h-[40%] bg-[#F7FFD9] border-black border-2 rounded-3xl text-xs text-center pt-[13px] cursor-pointer sm:font-medium sm:pt-[13px]'>Services</div>
                    <div className='w-[20%] h-[40%] bg-[#F7FFD9] border-black border-2 rounded-3xl text-xs text-center pt-[13px] cursor-pointer sm:font-medium sm:pt-[13px]'>Business</div>
                    <div className='w-[20%] h-[40%] bg-[#F7FFD9] border-black border-2 rounded-3xl text-xs text-center pt-[13px] cursor-pointer sm:font-medium sm:pt-[13px]'>Account</div>
                 
                    
                </div>
                <div className=' flex-col w-[100%] h-[60%]'>
                    <div className='w-[100%] h-[50%] flex' style={{borderBottom:"2px solid black"}}>
                        <div className=' flex items-center w-[20%] h-[100%] font-bold text-3xl   px-[10px] sm:px-[20px]'>Q1</div>
                        <div className='flex items-center w-[70%] h-[100%] font-medium  '>How does Winfluence work?</div>
                        <div className='flex items-center w-[10%] h-[100%] cursor-pointer'>
                            <Image src="/downarrow.png" alt="image" height={50} width={50}/>
                        </div>
                    </div>
                    <div className='w-[100%] h-[50%] flex'>
                        <div className=' flex items-center w-[20%] h-[100%] font-bold text-3xl  px-[10px] sm:px-[20px]'>Q2</div>
                        <div className='flex items-center w-[70%] h-[100%] font-medium '>How does your agency approach digital marketing strategy?</div>
                        <div className='flex items-center w-[10%] h-[100%] cursor-pointer'>
                        <Image src="/downarrow.png" alt="image" height={50} width={50}/>
                        </div>
                    </div>
                </div>

            </div>

        </div>
        

      
    </div>
    
    </>
  )
}


