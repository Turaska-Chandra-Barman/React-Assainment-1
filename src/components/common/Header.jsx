import {  NavLink } from 'react-router-dom';
import { Fillter } from '../common/Search';

export const Header = ({ navlist }) => {


  return (
    <>
    <header className="w-full bg-header-color/40 mx-auto py-1 ">
      <nav className="max-w-headerWidth mx-auto px-2.5 mt-5 flex items-center justify-between">
        <img className='w-[100px] sm:w-auto' src="img/Logo-header.png" alt="sdfs" />
        <ul className=" hidden xl:flex  gap-9 items-center justify-center  ">
          {navlist.map(({ id, name }) => {
            return (
              <>
              <li  key={id}
                className={` 
                  ${name === 'Dashboard'
                    ? 'text-primary font-bold  '
                    : 'font-normal text-headerText relative' } text-sm `
                }
               
              >
                <NavLink  to={'/'}>{name}</NavLink>
              </li>
              <span className=' coustom-underline'></span>
              </>
          
            );
          })}
        </ul>
        <div className=" flex items-center justify-center gap-1 sm:gap-2">
          <div className=" size-8 sm:size-10 bg-white rounded-full flex items-center justify-center relative">
            <img src="img/notification.png" alt="notification" />
            <div className="size-2.5 border border-white bg-accent-secondary rounded-full absolute top-0 right-0"></div>
          </div>
          <div className="flex items-center justify-center gap-1 sm:gap-2">
            <img className='w-[32px] sm:w-auto' src="img/Human.png" alt="Human" />
            <div>
              <h1 className="text-headerText text-xs sm:text-base font-semibold tracking-2p">
                Usamn Zafar
              </h1>
              <p className="text-[10px] sm:text-sm font-normal text-headerText tracking-2p">
                usmanzafar@gmail.com
              </p>
            </div>
          </div>
       
        </div>
        <div className='block lg:hidden'>
          <span className="material-symbols-outlined">menu</span>
        </div>
      </nav>
      <div className="border border-border-bg mt-7"></div>
      {
         <Fillter/>
      }
    </header>
    </>
  );
};
