import React, { Fragment } from 'react';
import { Search } from './common/Search';
import { NewIncident } from './NewIncident';
import { IncidentContainer } from './common/IncidentContainer';
import { Button } from './common/Button';
import { Link } from 'react-router-dom';

export const NewIncidentDescirbe = () => {
  const array = [
    {
      id: crypto.randomUUID(),
      title: 'Let’s give the incident a title?',
      text: 'Make a title that will easily identify the incidents',
      inputText: 'Add title here',
    },
    {
      id: crypto.randomUUID(),
      title: 'Describe what happened during the incident?',
      text: 'Share some information about the incident. The when, where, how. ',
      inputText: 'Type here',
    },
  ];

  return (
    <>
      <Search>
        <NewIncident>
          <Link to={'mapdetails'}>
            <Button className=" px-5 py-2 sm:px-10 sm:py-4 text-white  font-bold text-xs">
              Next step
            </Button>
          </Link>
        </NewIncident>
      </Search>
      <IncidentContainer>
        <div>
          {array.map((item, i) => {
            return (
              <Fragment key={i}>
                <h1 className=" text-xl sm:text-2xl font-bold mb-3">
                  {item.title}
                </h1>
                <p className="text-xs sm:text-sm font-normal mb-6 text-secondary">
                  {item.text}
                </p>
                {i !== 1 ? (
                  <input
                    type="text"
                    placeholder={item.inputText}
                    className="text-xs  focus:outline-none focus:border-cyan-300 focus:ring-1 focus:ring-cyan-300 text-secondary font-normal border border-border-bg py-5 px-2.5 w-full rounded-lg bg-[#F2F2F3] mb-6"
                  />
                ) : (
                  <textarea
                    className="w-full border px-2.5 pt-5 rounded-lg text-xs text-secondary font-normal border-border-bg bg-[#F2F2F3] resize-none"
                    placeholder="Type here"
                    rows={8}
                    name=""
                    id=""
                  ></textarea>
                )}
              </Fragment>
            );
          })}

        </div>
      </IncidentContainer>
    </>
  );
};
