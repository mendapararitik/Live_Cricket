import React, { useState } from 'react';
import bgImage from '../Assets/LiveMatchBg.jpg';
import OurTeam from './OurTeam';

function LiveMatch() {


    const openVideoPlayer = () => {
        // Open a new tab with the video URL
        const videoUrl = 'https://www.jiocinema.com/sports/how-it-started-how-it-s-going-mi-s-tata-ipl-journey/3928200'; // Your video URL
        window.open(videoUrl, '_blank');
    };


    return (
        <>
            <div className='pt-20'>
                <div className="relative h-screen w-full flex items-center justify-start bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
                    <div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-br from-gray-700 to-gray-900 opacity-60"></div>
                    <main className="px-4 sm:px-6 lg:px-8 z-10 flex flex-col justify-center items-center mx-auto">
                        <div className="max-w-[890px] ml-10">
                            <div className="wrapper">
                                <div className="circle pulse" onClick={openVideoPlayer}></div>
                                <div className="circle">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" onClick={openVideoPlayer}>
                                        <polygon points="40,30 65,50 40,70"></polygon>
                                    </svg>
                                </div>
                            </div>
                            <h2 className="text-4xl tracking-tight leading-10 font-semibold sm:text-5xl text-white sm:leading-none md:text-6xl mt-10" style={{ letterSpacing: "2px", wordSpacing: '8px', lineHeight: '1.2' }}>
                                Watch Now <span className='text-[#63c770]'>Live</span> Match
                            </h2>
                        </div>
                    </main>
                </div>
            </div>
            <OurTeam />
        </>
    )
}

export default LiveMatch