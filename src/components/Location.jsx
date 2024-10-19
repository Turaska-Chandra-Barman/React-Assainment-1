import React, { Fragment } from 'react';
import { Button } from './common/Button';
import { Link, useOutletContext } from 'react-router-dom';
import { Search } from './common/Search';
import { Input } from './common/input';
import { Filter } from './common/Filter';
import { Container } from './common/container';

export const Location = () => {
  const [{ location, locationListing }] = useOutletContext();

  const array = [
    {
      id: crypto.randomUUID(),
      img: '/img/locationprimary.png',
      name: 'Location',
      address: 'Tulare County,  Los Angles, CA 23415',
    },
    {
      id: crypto.randomUUID(),
      img: '/img/youtube.png',
      name: ' Approx. Cost:',
      pricess: '$60,607,456.00',
    },
  ];

  return (
    <>
      <Search>
        <div className="flex justify-center lg:justify-between flex-wrap gap-10 ">
          <div className="text-center sm:text-start">
            <h1 className="text-secondary text-xs font-normal mb-3">
              Incidents - DR-4699 March 2023 Severe Storms{' '}
            </h1>
            <div className="flex items-center gap-4">
              <img
                className="filter brightness-0 invert-0 place-self-start sm:place-self-auto"
                src="/img/inlogo/logo-13.svg"
                alt="sdfs"
              />
              <h1 className="font-bold text-lg sm:text-2xl text-primary">
                DR-4699 March 2023 Severe Storms
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <Input className=" w-full sm:w-auto  sm:text-xs" />
            <Filter className=" w-full sm:w-auto sm:text-xs" />
            <Link to="/Incidents">
              <Button className=" w-full py-2 px-6 sm:w-auto ">
                <div className="flex items-center justify-center sm:justify-normal ">
                  <img src="/img/addingButton.png" alt="button" />
                  <h1>New Incident</h1>
                </div>
              </Button>
            </Link>
          </div>
        </div>
      </Search>
      <Container className="mt-10 ">
        <div className="grid grid-cols-12 xl:gap-24 w-full">
          <div className="col-span-12 xl:col-span-7">
            {array.map((item, i) => {
              return (
                <div
                  key={item.id}
                  className="flex items-center gap-4 mb-5 sm:mb-10 "
                >
                  <div className="size-9 rounded-full bg-[#F2F2F3] flex items-center justify-center ">
                    <img src={item.img} alt="LocationImg" />
                  </div>
                  <div>
                    <small className="text-secondary font-normal text-sm mb-2 sm:mb-4 block">
                      {item.name}
                    </small>
                    <h1 className=" text-primary font-bold text-lg sm:text-xl ">{`${
                      i === 1 ? `${item.pricess}` : `${item.address}`
                    }`}</h1>
                  </div>
                  <div></div>
                </div>
              );
            })}
            <div className="w-full h-[1px] bg-border-bg"></div>
            <div className="decription">
              <h1 className="text-primary font-bold text-sm mt-5 sm:mt-10">
                Decription
              </h1>
              <p className="text-secondary text-sm sm:text-base font-normal mt-4 mb-10">
                Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar
                sit general sac mascho werhoLorem ipsum dolar sit general sac
                mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem
                ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit
                general sac mascho werho
              </p>
            </div>
            <div className="w-full h-[0.8px] bg-border-bg mb-10 "></div>

            <div className="cardDetails">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-primary text-sm font-bold">Locations</h1>
                <small className="text-secondary text-sm font-normal">
                  See all
                </small>
              </div>

              <div className=" w-full  smpro:grid smpro:grid-cols-[repeat(auto-fill,minmax(224px,1fr))] justify-items-center  ">
                {location.map(({ currency, id, img, name, text }) => {
                  return (
                    <div
                      key={id}
                      className="smpro:max-w-[224px] mb-6 sm:mb-0 w-full relative"
                    >
                      <img
                        src={img}
                        className="w-full smpro:w-auto"
                        alt="locationCardimg"
                      />
                      <div className=" absolute top-2 right-4 gap-1 flex items-center p-2 bg-white rounded-full">
                        <img src="/img/Locationcardlogo.png" alt="logo" />
                        <h1 className="text-[10px] font-bold text-primary">
                          Building
                        </h1>
                      </div>
                      <h1 className="text-primary font-bold text-lg sm:text-sm mb-1.5 sm:mb-2.5 mt-3  leading-none">
                        {name}
                      </h1>
                      <p className="text-secondary text-xs font-normal mb-1.5 sm:mb-2.5">
                        {text}
                      </p>
                      <span className="text-primary font-bold text-sm ">
                        {currency}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="w-full h-[0.8px] bg-border-bg mb-10  mt-10"></div>

            <div className="secondaryCard mb-10">
              <div>
                {locationListing.map(
                  (
                    {
                      headername,
                      headernext,
                      id,
                      img,
                      name,
                      textname,
                      textnumprimary,
                      textnumsecondary,
                      currency,
                    },
                    i
                  ) => {
                    return (
                      <Fragment key={id}>
                        <div className=" flex items-center justify-between mb-4">
                          <h1 className="text-primary text-sm font-bold">
                            {headername}
                          </h1>
                          <span className="text-primary text-sm font-normal">
                            {headernext}
                          </span>
                        </div>
                        <div className="flex items-center w-full h-[108px] bg-border-bg py-4 px-2.5 gap-4 rounded-lg">
                          <img
                            className="w-[78px] h-[78px] rounded-lg"
                            src={img}
                            alt="locationimg"
                          />
                          <div>
                            <h1 className="text-base text-primary font-bold mb-2 leading-none">
                              {name}
                            </h1>
                            <div className="flex items-center gap-2">
                              <span className="text-secondary font-normal text-sm">
                                {textname}
                              </span>
                              <span className="size-1 rounded-full bg-secondary block"></span>
                              <span className="text-secondary font-normal text-sm">
                                {textnumprimary}
                              </span>
                              <span className="text-secondary font-normal text-sm">
                                {textnumsecondary}
                              </span>
                            </div>
                            <p className="text-primary font-bold text-sm mt-2">
                              {currency}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center w-full h-[108px] bg-border-bg py-4 px-2.5 gap-4 rounded-lg mt-4">
                          <img
                            className="w-[78px] h-[78px] rounded-lg"
                            src={img}
                            alt="locationimg"
                          />
                          <div>
                            <h1 className="text-base text-primary font-bold mb-2 leading-none">
                              {name}
                            </h1>
                            <div className="flex items-center gap-2">
                              <span className="text-secondary font-normal text-sm">
                                {textname}
                              </span>
                              <span className="size-1 rounded-full bg-secondary block"></span>
                              <span className="text-secondary font-normal text-sm">
                                {textnumprimary}
                              </span>
                              <span className="text-secondary font-normal text-sm">
                                {textnumsecondary}
                              </span>
                            </div>
                            <p className="text-primary font-bold text-sm mt-2">
                              {currency}
                            </p>
                          </div>
                        </div>
                        {i === 0 ? (
                          <div className="w-full h-[0.8px] bg-border-bg mb-10 mt-10 "></div>
                        ) : (
                          ''
                        )}
                      </Fragment>
                    );
                  }
                )}
              </div>
            </div>
          </div>

          <div className=" col-span-12 xl:col-span-5 mb-10">
            <small className=" mb-5 text-secondary text-sm block">
              Incident Map
            </small>
            <img src="/img/mapimg-02.png" alt="mapImg" />
            <span className="text-secondary text-sm font-normal  mt-5 block">
              Start 19.1232, -118.233 &nbsp; End 19.3245, -119.2323
            </span>
          </div>
        </div>
      </Container>
    </>
  );
};
