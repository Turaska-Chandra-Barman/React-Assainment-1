import React, { Fragment, useState } from 'react';
import { IncidentContainer } from './common/IncidentContainer';
import { Link, useOutletContext } from 'react-router-dom';
import { Search } from './common/Search';
import { NewIncident } from './NewIncident';
import { Button } from './common/Button';

export const IncidentsDetails = () => {
  const [getStyle, setStyle] = useState(null);

  const [{ newIncidents }] = useOutletContext();

  const Style = (id) => {
    setStyle(id);
  };

  return (
    <>
      <Search>
        <NewIncident>
          <Link to={'Descirbe'}>
            <Button className=" px-5 py-2 sm:px-10 sm:py-4 text-white  font-bold text-xs">
              Next step
            </Button>
          </Link>
        </NewIncident>
      </Search>
      <IncidentContainer>
        <div className="mb-10">
          <h1 className="text-primary text-xl sm:text-2xl font-bold mb-6 text-center">
            Which of these best describes the incident?
          </h1>
          <div className="incident-card grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))]  sm:grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-2 justify-items-center">
            {newIncidents.map(({ id, img, name }) => {
              const isActive = getStyle === id;

              return (
                <Fragment key={id}>
                  <div
                    onClick={(e) => Style(id)}
                    className={`w-full sm:w-[180px]   py-5  bg-bg-incident border rounded-lg ${
                      isActive ? 'CardDetails' : ''
                    }`}
                  >
                    <div className="flex items-center justify-center  gap-1 sm:gap-2 cursor-pointer">
                      <img
                        className={`w-[15px] ${
                          isActive ? 'filter brightness-0 invert' : ''
                        }  sm:w-auto`}
                        src={'/' + img}
                        alt="logo"
                      />
                      <h1
                        className={`${
                          isActive ? 'text-white' : 'text-secondary'
                        } text-xs sm:text-[14px]  font-normal`}
                      >
                        {name}
                      </h1>
                    </div>
                  </div>
                </Fragment>
              );
            })}
          </div>
        </div>
      </IncidentContainer>
    </>
  );
};
