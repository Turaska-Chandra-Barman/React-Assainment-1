import React from 'react'
import { Search } from './common/Search'
import { Input } from './common/input'
import { Filter } from './common/Filter'
import { Button } from './common/Button'
import { MainCard } from './MainCard'
import { Link } from 'react-router-dom'

export const MainIncident = () => {
  return (
    <>
    <Search>

    <div className='flex flex-col sm:flex-row justify-center sm:justify-between flex-wrap gap-4 md:gap-10 '>
      <div className='text-center sm:text-start'>
        <h1 className='text-secondary text-xs font-normal  md:mb-3'>Home - Incidents </h1>
            <h1 className='font-bold text-lg sm:text-3xl text-primary'>Incidents</h1>
      
      </div>
        <div className='flex items-center gap-3 flex-wrap justify-center'>
          <Input className=' w-full sm:w-auto text-[8px] sm:text-xs'/>
          <Filter className=' w-full sm:w-auto text-[8px] sm:text-xs'/>
          <Button className=' w-full py-2 px-6 sm:w-auto '>
            <Link  to='IncidentRule' className='flex items-center justify-center sm:justify-normal'>
            <img src="/img/addingButton.png" alt="button" />
            <h1>New Incident</h1>
            </Link>
          </Button>
        </div>
    </div>
  </Search> 
  <MainCard/>
  </>
  )
}
