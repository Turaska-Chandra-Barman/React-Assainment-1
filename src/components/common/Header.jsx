import { NavLink } from 'react-router-dom';
import { Search } from '../common/Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';


export const Header = ({ navlist }) => {

  const [navGet,setNav] =useState(false)
  return (
    <>
      <header className="w-full bg-border-bg mx-auto py-1 fixed top-0 z-50">
        <nav className="max-w-headerWidth mx-auto px-2.5 mt-5 flex items-center justify-between">
          <img
            className="w-[100px] sm:w-auto"
            src="img/Logo-header.png"
            alt="sdfs"
          />
          <ul className={` ${navGet ?'flex':'hidden'}  xl:flex absolute xl:static  w-[250px] xl:w-auto xl:h-auto top-20 sm:top-24 h-[500px] bg-gradient-to-r from-[#E0EAFC] to-[#CFDEF3] xl:bg-gradient-to-t xl:from-inherit xl:to-inherit right-0 flex  rounded-t-md rounded-l-md flex-col xl:flex-row gap-3  xl:gap-9 items-center justify-center  `}>
            {navlist.map(({ id, name }) => {
              return (
                <>
                  <li
                    key={id}
                    className={` 
                  ${
                    name === 'Dashboard'
                      ? 'text-primary font-bold  '
                      : ' text-primary font-bold xl:font-normal xl:text-headerText relative'
                  } text-sm `}
                  >
                    <NavLink to={'/' + name}>{name}</NavLink>
                  </li>
                  <span className=" coustom-underline"></span>
                </>
              );
            })}
          </ul>
          <div className=" flex items-center justify-center gap-1 sm:gap-2">
            <div className=" size-8 sm:size-10 bg-white rounded-full flex items-center justify-center relative">
              <img src="img/notification.png" alt="notification" />
              <div className="size-2.5 border border-white bg-accent-secondary  rounded-full absolute top-0 right-0"></div>
            </div>
            <div className="flex items-center justify-center gap-1 sm:gap-2">
              <img
                className="w-[32px] sm:w-auto"
                src="img/Human.png"
                alt="Human"
              />
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
          <div className="block xl:hidden">
          <FontAwesomeIcon onClick={() => setNav(!navGet)} icon={faBars} />
          </div>
        </nav>
        <div className="border border-black/5 mt-3 sm:mt-7 mb-9"></div>
     
      </header>
    </>
  );
};
