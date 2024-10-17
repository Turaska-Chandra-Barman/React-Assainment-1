import React, { Fragment, useState } from 'react';
import { IncidentContainer } from './common/IncidentContainer';
import { useOutletContext } from 'react-router-dom';
import { Search } from './common/Search';
import { NewIncident } from './NewIncident';

export const IncidentsDetails = () => {
  const [getStyle, setStyle] = useState(null);

  const [{ newIncidents }] = useOutletContext();

  const Style = (id) => {
    setStyle(id);
  };

  return (
    <>
      <Search>
        <NewIncident />
      </Search>
      <IncidentContainer>
        <div className='mb-10'>
          <h1 className="text-primary text-2xl font-bold mb-6 text-center">
            Which of these best describes the incident?
          </h1>
          <div className="incident-card grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-2 justify-items-center">
            {newIncidents.map(({ id, img, name }) => {
              const isActive = getStyle === id;

              return (
                <>
                  <div
                    onClick={(e) => Style(id)}
                    className={`w-[180px] px-[22px] py-5 bg-bg-incident border rounded-lg ${
                      isActive ? 'CardDetails' : ''
                    }`}
                  >
                    <div className="flex items-center justify-center gap-2 cursor-pointer">
                      <img src={'/' + img} alt="logo" />
                      <h1 className="text-secondary text-sm font-normal">
                        {name}
                      </h1>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </IncidentContainer>
    </>
  );
};
