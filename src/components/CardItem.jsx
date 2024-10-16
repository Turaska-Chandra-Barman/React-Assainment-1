import React from 'react'
import { Container } from './common/container'


export const CardItem = ({cardlist}) => {
    console.log(cardlist)
  return (
        <Container>
            <div className='grid grid-cols-[repeat(auto-fill,minmax(306px,1fr))] overflow-hidden gap-x-6 gap-y-8'>
               

                    {
                        cardlist.map(({id,img,logo,logoName,name,prices,text}) => {

                         return <div key={id} className='max-w-[306px]' > 
                        <div  className='relative'>
                        <div className='relative ' >
                        <img src={img} alt="cardimg-01" />
                        </div>
                        <div className='flex bg-white items-center justify-center gap-1 text-xs font-bold absolute top-[5%] right-[5%] p-2.5 rounded-full'>
                            <img src={logo} alt="logo" />
                            <h1 className='text-xs font-bold'>{logoName}</h1>
                        </div>
                        
                        </div>
                            <div className=' mt-5 space-y-4'>
                                <h1 className='text-sm font-bold text-primary leading-none'>{name}</h1>
                                <p className='text-sm font-normal text-secondary leading-none'>{text}</p>
                                <span className='block text-sm font-bold text-primary leading-none'>{prices}</span>
                            </div> 
                            </div>
                        })
                        
                    }
        
            </div>
            
        </Container>
  )
}
