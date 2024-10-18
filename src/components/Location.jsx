import React from 'react'
import { Button } from './common/Button'
import { Link } from 'react-router-dom'
import { NewIncident } from './NewIncident'
import { Search } from './common/Search'
import { Input } from './common/input'
import { Filter } from './common/Filter'
import { Container } from './common/container'

export const Location = () => {

  const array = [
    {
      id:crypto.randomUUID(),
      img:'/img/locationprimary.png',
      name:'Location',
      address:'Tulare County,  Los Angles, CA 23415'
    },
    {
      id:crypto.randomUUID(),
      img:'/img/youtube.png',
      name:' Approx. Cost:',
      pricess:'$60,607,456.00'
    },
  ]

  return (
    <>
        <Search>

        <div className='flex justify-center lg:justify-between flex-wrap gap-10 '>
          <div className='text-center sm:text-start'>
            <h1 className='text-secondary text-xs font-normal mb-3'>Incidents - DR-4699 March 2023 Severe Storms </h1>
            <div className='flex items-center gap-4'>
                <img className='filter brightness-0 invert-0 place-self-start sm:place-self-auto' src="/img/inlogo/logo-13.svg" alt="sdfs" />
                <h1 className='font-bold text-lg sm:text-2xl text-primary'>DR-4699 March 2023 Severe Storms</h1>
            </div>
          </div>
            <div className='flex items-center gap-3 flex-wrap justify-center'>
              <Input className=' w-[150px] sm:w-auto text-[8px] sm:text-xs'/>
              <Filter className=' w-[150px] sm:w-auto text-[8px] sm:text-xs'/>
              <Button className='flex items-center justify-center sm:justify-normal max-w-[300px] w-full py-4 px-6 sm:w-auto '>
                  <img src="/img/addingButton.png" alt="button" />
                  <h1>New Incident</h1>
              </Button>
            </div>
        </div>
      </Search>
      {/* <Container className='mt-10'>
        <div className='grid grid-cols-12 gap-24'>
          <div className='col-span-7'> 

            {
              array.map((item,i) => {

               return <div className='flex items-center gap-4 mb-10 '>
                  <div className='size-9 rounded-full bg-[#F2F2F3] flex items-center justify-center '>
                  <img  src={item.img} alt="LocationImg" />
                  </div>
                  <div>
                    <small className='text-secondary font-normal text-sm mb-4 block'>{item.name}</small>
                    <h1 className=' text-primary font-bold text-xl '>{`${i ===1 ? `${item.pricess}`:`${item.address}`}`}</h1>
                  </div>
                  <div>
    
                  </div>
                </div> 
              })
            }
            <div className='w-full h-[1px] bg-border-bg'></div>
            <div className='decription'>
              <h1 className='text-primary font-bold text-sm mt-10'>Decription</h1>
              <p className='text-secondary text-base font-normal mt-4 mb-10'>Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werho</p>
            </div>
            <div className='w-full h-[0.8px] bg-border-bg mb-10 '></div>

            <div>
              <div className='flex items-center justify-between'>
                <h1 className='text-primary text-sm font-bold'>Locations</h1>
                <small className='text-secondary text-sm font-normal'>See all</small>
              </div>


            </div>
          </div>



          <div className='col-span-5'>
            <small className=' mb-5 text-secondary text-sm block'>Incident Map</small>
            <img src="/img/mapimg-02.png" alt="mapImg" />
            <span className='text-secondary text-sm font-normal  mt-5 block'>Start 19.1232, -118.233 &nbsp;
            End 19.3245, -119.2323</span>
          </div>
        </div>
      </Container> */}

    </>
  )
}
