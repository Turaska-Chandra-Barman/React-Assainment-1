import React from 'react'
import { Button } from './common/Button'

export const Fillter = () => {




  return (
    // <div>fillter</div>

        <div className='max-w-headerWidth mx-auto px-2.5 mt-8 mb-4 sm:mb-5'>
           <div className='flex items-center justify-between gap-2'>
            <div className='place-self-start sm:place-self-auto'>
              <small className='text-xs text-secondary font-normal'>Wellcome back</small>
              <h1 className=' text-[20px] sm:text-[26px] text-primary font-bold'>Dashboard</h1>
            </div>
            <div className='flex items-center flex-col lg:flex-row  gap-3'>
              <div className='flex items-center justify-center bg-white py-2.5  sm:py-4  px-1.5 sm:px-2.5 gap-1 text-xs rounded-md '>
                <img src="img/search.png" alt="search" />
                <input className='border-0 outline-none ' type="text" placeholder='Search  incident' />
              </div>
              <div className=' font-normal bg-white py-2.5 place-self-stretch lg:place-self-auto  sm:py-4  px-1.5 sm:px-2.5 text-xs rounded-md text-secondary/80'>
              <select className='appearance-none' name="" id="">
                <option value="">Sort By:Date modifed</option>
              </select>
              </div>
              {<Button>
                Cypher AI
                </Button>}
            </div>
           </div>
        </div>

  )
}
