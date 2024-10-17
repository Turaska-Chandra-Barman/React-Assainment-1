import React from 'react'
import { IncidentContainer } from './common/IncidentContainer'
import { useOutletContext } from 'react-router-dom'
import { Search } from './common/Search';
import { NewIncident } from './NewIncident';


export const IncidentsDetails = () => {

   
  return (
    <>

      <Search>
        <NewIncident/>
      </Search>
      {/* <IncidentContainer>
        <div>
          <h1 className='text-primary text-2xl font-bold mb-6'>Which of these best describes the incident?</h1>
          <div className='incident-card'>
            <div className='w-[180px] px-[22px] py-5 bg-bg-incident border rounded-lg'>
              <div className='flex items-center justify-center gap-2'>
                <img src="/img/inlogo/logo-11.svg" alt="logo" />
                <h1 className='text-secondary text-sm font-normal'>Avalanche</h1>
              </div>
            </div>
          </div>
        </div>

      </IncidentContainer> */}
    </>
  )
}
