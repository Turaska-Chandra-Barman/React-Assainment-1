import React, { Fragment } from 'react';
import { Container } from './common/container';
import { useOutlet, useOutletContext } from 'react-router-dom';
import { Button } from './common/Button';

export const Incidents = () => {
    const [{incidents}]= useOutletContext();
  const items = [1, 2, 3];

  

  return (
    <Container className=" max-w-[835px] mt-[219px] mb-10       ">
      <h1 className='font-bold text-center mb-4 text-primary text-3xl'>Let’s get started</h1>
      <p className='text-center text-base font-normal text-secondary mb-10'>
        Lorem ipsum dolar sit general sac mascho werhoLorem ipsum <br/> dolar sit
        general sac mascho werhoLorem ipsum dolar sit gene
      </p>
      <div className="flex items-center justify-center ">
        {items.map((items,i) => {
          return (
            <Fragment key={i}>
              {' '}
              <div>
                <div className="size-7 bg-border-bg rounded-full"></div>
              </div>
              {i === 2 ? (
                ''
              ) : (
                <div className="w-full border border-border-bg"></div>
              )}
            </Fragment>
          );
        })}

     
      </div>
      <div className='flex items-center  justify-center sm:justify-between  gap-3 flex-wrap mt-12'>

        {
            incidents.map((items,i) => {

                return <div className={`w-[235px]  flex  `} style={{placeSelf:'stretch'}} key={items.id}>
                    <div className={`bg-border-bg px-5 py-6 rounded-md `}>
                        <img className='mb-16' src={items.img} alt="inLogo" />
                        <h1 className='text-xl text-primary font-bold mb-5'>{items.que}</h1>
                        <p className='text-secondary text-xs font-normal'>{items.ans}</p>
                    </div>
                </div> 
            })
        }
        </div>
       <div className='w-full text-center'>
       <Button className=' mt-10 sm:mt-20 text-center  '>
        Get started 
        </Button>
       </div>
    </Container>
  );
};
