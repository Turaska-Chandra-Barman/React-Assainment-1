import React from 'react'
import { useRouteError,useNavigate} from 'react-router-dom'
import { Button } from './common/Button'

export const ErrorPage = () => {
const history = useNavigate()

    const BackHome = (e) => {
        e.preventDefault()

        history();
    }

    const Back = () =>{
        history(-1)
    }
    
  return (
  <> <div className='w-full flex flex-col items-center justify-center   min-h-[800px] '>
        <div className='text-center'>
        <h1 className='text-5xl font-bold mb-5'>Oopps!</h1>
    <h3 className='text-center text-xl font-semibold mb-5'>404 status not found</h3>
  <div className='flex flex-col gap-2'>
  <Button onclick={BackHome}>
        <a href="/">Back to Home</a>
    </Button>
    <Button className='bg-white border shadow-chatbtn border-border-bg text-primary' onclick={Back}>
       Back
    </Button>
  </div>
        </div>
    </div>
    </>
  )
}
