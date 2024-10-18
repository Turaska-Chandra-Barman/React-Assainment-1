import React, { Fragment } from 'react'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from './common/Button'
import { Link } from 'react-router-dom'

export const NewIncident = ({children}) => {
    const array = ['Home','Incidents','New Incident']


    function Back (){
        history.back();
    }

  return (
    <>
        <div className='flex items-center  justify-center sm:justify-between gap-3 relative py-3 flex-wrap '>
            <div className='flex  items-center gap-3'>
                <div className='size-5 sm:size-10 rounded-full bg-white border border-border-bg flex items-center justify-center'>
                <FontAwesomeIcon className='material-symbols-outlined text-[10px] sm:text-[20px] text-secondary ' icon={faXmark} />
                </div>
                <div>
                    <div>
                        <div className='flex items-center justify-center gap-1   '>

                            {
                                array.map((item,i) => {
                           
                                   return <Fragment key={i}>
                                    <h5 className='text-secondary text-[8px] sm:text-xs font-normal'>{item}</h5>
                                    { i === 2 ? '': <div className='w-1 sm:w-2  border border-secondary/60 '></div>}
                                    </Fragment>
                                })
                            }
                     
                        </div>
                        <div>
                            <h1 className='text-primary font-bold text-lg  sm:text-[26px]  mt-1'>New Incident</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' max-w-[327px] sm:max-w-[527px] w-full bg-border-bg h-1 sm:h-1.5 rounded-full absolute xl:static -top-3 left-1/2 -translate-x-1/2  xl:-translate-x-0'>
                <div className='bg-line-accent h-full w-24 rounded-full'></div>
            </div>
           <div className=' flex items-center justify-between gap-2 sm:gap-5'>
           <Button onclick={Back} className='border-2   border-[D4D4D8] px-7 py-2 sm:px-14 sm:py-4  bg-white text-secondary font-bold text-xs'>
                Back
            </Button>
           {children}
           </div>
        </div>
    </>
  )
}
