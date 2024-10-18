import React from 'react'
import { Search } from './common/Search'
import { NewIncident } from './NewIncident'
import { Button } from './common/Button'
import { Link } from 'react-router-dom'
import { IncidentContainer } from './common/IncidentContainer'

export const NewIncidentMap = () => {
  return (
    <>
    <Search>
    <NewIncident>
    <Button className=' px-5 py-2 sm:px-10 sm:py-4 text-white  font-bold text-xs'>
               <Link to={'/'}> Finished</Link>
            </Button>
    </NewIncident>
  </Search>
  <IncidentContainer>
    <div className='inecidentMap'>
        <h1 className='text-primary font-bold mb-3 text-2xl'>Where’s the incident?</h1>
        <p className='text-[9px] sm:text-sm text-secondary font-normal mb-6'>Enter a GPS, address. or pin point on the map. Try to be as accurate as <br/> possible, or click:Jurisdiction Wide</p>
        <div className='relative'>
            <div className=' sm:mb-10 '>
                <img className='h-full' src="/img/map.svg" alt="map" />
            </div>
            <div className='absolute top-2 left-2 max-w-[224] w-full'>
                <div className='flex items-center max-w-[224px] w-full rounded-lg mb-1 gap-1  bg-mainChat-bg px-3 py-2 sm:py-4 '>
                    <img src="/img/search.png" alt="search" />
                    <input type="text" className='w-full bg-inherit  text-secondary focus:outline-none text-xs font-normal' placeholder='Enter incident address or GPS' />
                </div>
                <div className='flex items-center max-w-[224px] w-full rounded-lg mb-20  gap-1 bg-mainChat-bg px-3     py-2  sm:py-4 '>
                    <img src="/img/search.png" alt="search"  />
                    <input type="text" className='w-full bg-inherit  text-secondary focus:outline-none text-xs font-normal' placeholder='Pinpoint damage' />
                </div>
                {/* <div className='flex items-center'>
                    <img src="/img/search.png" alt="search" />
                    <input type="text" placeholder='Pinpoint damage' />
                </div> */}
            </div>
        </div>
    </div>
  </IncidentContainer>
  </>
  )
}
