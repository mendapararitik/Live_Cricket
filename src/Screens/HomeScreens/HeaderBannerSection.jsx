import React from 'react'
import backgroundImage from '../Assets/bg-img-banner.jpeg'
import LatestMatchResult from './LatestMatchResult'

function HeaderBannerSection() {
    return (
        <>
            <div className="relative h-screen w-full flex items-center justify-start bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="absolute top-0 right-0 bottom-0 left-0 bg-[#b0677e] opacity-30"></div>
                <main className="px-4 sm:px-6 lg:px-8 z-10">
                    <div className="max-w-[890px] ml-10">
                        <h2 className="text-4xl tracking-tight leading-10 font-medium sm:text-5xl text-white sm:leading-none md:text-6xl mt-10" style={{ letterSpacing: "2px", wordSpacing: '8px', lineHeight: '1.2' }}>
                            <span className="inline-block tracking-wide">Cricket is the most</span> entertainment in  <br />the world! <br />
                        </h2>
                        <div className="text-gray-200 font-normal text-[15px] mt-3">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />
                                Lorem Ipsum has been the industry's.</p>
                        </div>
                        <div className="mt-5 sm:mt-8 sm:flex justify-start">
                            <div className="mt-3 sm:mt-0 sm:ml-3">
                                <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-regular rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:px-10">
                                    Live Match
                                </a>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <LatestMatchResult />
        </>
    )
}

export default HeaderBannerSection