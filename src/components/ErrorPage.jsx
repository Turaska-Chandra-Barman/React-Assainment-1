import React from 'react'
import { useRouteError,useNavigate} from 'react-router-dom'
import { Button } from './common/Button'

export const ErrorPage = () => {
const history = useNavigate()
    const BackHome = (e) => {
        e.preventDefault()

        history();
    }
    
  return (
  <> <div className='w-full flex flex-col items-center justify-center   min-h-[500px] '>
        <div className='text-center'>
        <h1 className='text-5xl font-bold mb-5'>Oopps!</h1>
    <h3 className='text-center text-xl font-semibold mb-5'>404 status not found</h3>
    <Button onclick={BackHome}>
        <a href="/">Back to Home</a>
    </Button>
        </div>
    </div>
    </>
  )
}
