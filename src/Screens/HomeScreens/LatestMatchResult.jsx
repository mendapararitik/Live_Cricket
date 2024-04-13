import React from 'react'
import firstImg from '../Assets/match_logos/latestMatch-1.png';
import secondtImg from '../Assets/match_logos/LatestMatch-2.png';
import ThiredImg from '../Assets/match_logos/LatestMatch-3.png';
import fourthImg from '../Assets/match_logos/LatestMatch-4.png';
import AboutUs from './AboutUs';

function LatestMatchResult() {
    return (
        <>
            <div className='bg-[#F5F5F5]'>
                <h1 className='pt-20 text-center text-[45px] text-graay-800 font-bold'>Last match Result </h1>
                <div className='w-full mx-auto py-10 gap-10 flex flex-wrap justify-center items-center px-10 sm:px-5'>
                    <div className='w-[500px] h-[200px] bg-white shadow rounded px-5'>
                        <p className='text-gray-700 font-normal text-center mt-2 text-sm'>May 11,2024</p>
                        <div className='w-full flex gap-2'>
                            <div className='w-1/2 flex'>
                                <img src={firstImg} alt='' className='h-[97px] mt-3 object-contain' />
                                <div className='w-full flex flex-col mt-[36px] ml-2 text-center hover:text-[#b0677e] '>
                                    <h1 className='text-[#d4d8da] text-[40px] font-bold tracking-wide hover:text-[b0677e]' style={{ lineHeight: "24px" }}>160/5</h1>
                                    <p className='text-gary-600 mt-4 text-xs'>20 overs </p>
                                </div>
                            </div>
                            <div className='w-1/2 flex '>
                                <div className='w-full flex flex-col mt-[36px] mr-3 text-center hover:text-[#b0677e]'>
                                    <h1 className='text-gray-800 text-[40px] font-bold tracking-wide hover:text-[b0677e]' style={{ lineHeight: "24px" }}>161/3</h1>
                                    <p className='text-gary-600 mt-4 text-xs'>18 overs </p>
                                </div>
                                <img src={secondtImg} alt='' className='h-[97px] mt-3 object-contain' />
                            </div>
                        </div>
                        <p className='text-gray-600 font-normal text-center mt-[18px] mb-2 text-xs font-serif'>Cricket club Won by 7 Wickets</p>
                    </div>

                    <div className='w-[500px] h-[200px] bg-white shadow rounded px-5'>
                        <p className='text-gray-700 font-normal text-center mt-2 text-sm'>May 14,2024</p>
                        <div className='w-full flex gap-2'>
                            <div className='w-1/2 flex'>
                                <img src={ThiredImg} alt='' className='h-[97px] mt-3 object-contain' />
                                <div className='w-full flex flex-col mt-[36px] ml-2 text-center hover:text-[#b0677e]'>
                                    <h1 className=' text-gray-800 text-[40px] font-bold tracking-wide hover:text-[b0677e]' style={{ lineHeight: "24px" }}>190/7</h1>
                                    <p className='text-gary-600 mt-4 text-xs'>20 overs </p>
                                </div>
                            </div>
                            <div className='w-1/2 flex'>
                                <div className='w-full flex flex-col mt-[36px] mr-3 text-center hover:text-[#b0677e]'>
                                    <h1 className='text-[#d4d8da] text-[40px] font-bold tracking-wide hover:text-[b0677e]' style={{ lineHeight: "24px" }}>181/10</h1>
                                    <p className='text-gary-600 mt-4 text-xs'>19.3 overs </p>
                                </div>
                                <img src={fourthImg} alt='' className='h-[97px] mt-3 object-contain' />
                            </div>
                        </div>
                        <p className='text-gray-600 font-normal text-center mb-2 mt-[18px] text-xs font-serif'>Cricket Champion Won by 12 Runs</p>
                    </div>
                </div>
            </div>
            <AboutUs />
        </>
    )
}

export default LatestMatchResult