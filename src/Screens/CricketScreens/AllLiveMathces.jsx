import React, { useState, useEffect, useRef } from 'react'
import TabScreen from './TabScreen';
import empty_doclist from "../Assets/empty_doclist.svg";

function AllLiveMathces(props) {

  const [matches, setMatches] = useState([]);
  const apiKey = props.myKey;
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);


  useEffect(() => {
    fetch(`https://api.cricapi.com/v1/currentMatches?apikey=${apiKey}&offset=0`)
      .then(response => response.json())
      .then(data => {
        setMatches(data.data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [apiKey]);



  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === 'prev') {
      return currentIndex <= 0;
    }

    if (direction === 'next' && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);


  return (
    <>
      <div className="w-full h-[250px] inline-block pt-4 pb-2 text-left transform transition-all relative">
        <>
          <div className="flex justify-between absolute w-full h-full">
            <button
              onClick={movePrev}
              className="text-gray-900 text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
              disabled={isDisabled('prev')}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-20 -ml-5"
                fill="#0000"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span className="sr-only">Prev</span>
            </button>
            <button
              onClick={moveNext}
              className=" text-gray-900 text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
              disabled={isDisabled('next')}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 -ml-5"
                fill="#0000"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <span className="sr-only">Next</span>
            </button>
          </div>
          <ul ref={carousel} className="carousel-container px-10 relative flex gap-3 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0">
            {matches && matches.length > 0 ? (
              matches.map((match, index) => (
                <li key={index} className='rounded-lg shadow p-3 flex flex-col ' style={{ backgroundImage: " linear-gradient(to top, #dad4ec 0%, #dad4ec 1%, #f3e7e9 100%)" }}>
                  <div className='flex justify-between'>
                    <span class="relative flex h-3 w-3">
                      <span class="animate-ping absolute inline-flex right-0 h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                      <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                      <p className='animate-pin  text-[12px] text-green-500 tracking-wide'>LIVE</p>
                    </span>
                    <img className='h-7 w-auto object-cover' src={"https://freepngimg.com/save/97383-versus-pic-png-file-hd/595x496"} alt='' />
                    <p className='animate-pin  text-[12px] text-gray-800 font-semibold tracking-wide uppercase'>{match.matchType}</p>
                  </div>
                  <div className="w-[260px] border border-gray-300 rounded-lg p-2 mt-3">
                    <div className="flex justify-between">
                      <div className="w-1/2 pr-2 border-r border-gray-300">
                        <div className='flex'>
                          <img className='w-5 h-5 object-cover' src={match.teamInfo[0].img} />
                          <h2 className="text-[13px] font-semibold mb-1 text-gray-600 ml-3">{match.teamInfo[0].shortname}</h2>

                        </div>
                        <div className='flex flex-col'>
                          {match.score && match.score[0] ? (
                            <>
                              <p className='text-[14px] text-gray-800 font-normal mt-2'>R: <span className='ml-3'>{match.score[0].r}</span></p>
                              <p className='text-[14px] text-gray-800 font-normal mt-2'>W: <span className='ml-3'>{match.score[0].w}</span></p>
                              <p className='text-[14px] text-gray-800 font-normal mt-2'>O: <span className='ml-3'>{match.score[0].o}</span> </p>
                            </>
                          ) : (
                            <span className='mt-4 text-gray-500 text-[12px] text-center font-normal'>not yat start</span>
                          )}
                        </div>
                      </div>
                      <div className="w-1/2 pl-2">
                        <div className='flex'>
                          <img className='w-5 h-5 object-cover' src={match.teamInfo[0].img} />
                          <h2 className="text-[13px] font-semibold mb-1 text-gray-600 ml-3">{match.teamInfo[1].shortname}</h2>

                        </div>
                        <div className='flex flex-col'>
                          {match.score && match.score[1] ? (
                            <>
                              <p className='text-[14px] text-gray-800 font-normal mt-2'>R: <span className='ml-3'>{match.score[0].r}</span></p>
                              <p className='text-[14px] text-gray-800 font-normal mt-2'>W: <span className='ml-3'>{match.score[0].w}</span></p>
                              <p className='text-[14px] text-gray-800 font-normal mt-2'>O: <span className='ml-3'>{match.score[0].o}</span></p>
                            </>
                          ) : (
                            <span className='mt-4 text-gray-500 text-[12px] text-center font-normal'>not yat start</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='w-[200px] flex flex-col justify-center items-center text-center mx-auto mt-2'>
                    <p className='text-center text-sm text-gray-500'>{new Date(match.dateTimeGMT).toLocaleString()}</p>
                    <p className='text-center text-sm text-gray-500'>{match.status}</p>
                  </div>
                </li>
              ))
            ) : (
              <div className='w-full h-full flex flex-col text-center justify-center items-center mt-[15px]'>
                <img className='w-auto h-[200px] object-contain' src={empty_doclist} alt='' />
                <p className='text-gray-700 font-normal text-base'>No Data Available</p>
              </div>
            )}
          </ul>
        </>
      </div>

      <TabScreen />
    </>
  )
}

export default AllLiveMathces
