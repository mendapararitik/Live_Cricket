import React from 'react'
import cupone from '../Assets/cup-1.png'
import logoone from '../Assets/match_logos/latestMatch-1.png';
import cuptwo from '../Assets/cup-2.png';
import logotwo from '../Assets/match_logos/LatestMatch-2.png';
import cupthree from '../Assets/cup-3.png';
import logothree from '../Assets/match_logos/LatestMatch-3.png';
import cupfour from '../Assets/cup-4.png';
import logofour from '../Assets/match_logos/LatestMatch-4.png'
import LiveMatch from './LiveMatch';

function Championship() {
    return (
        <>
            <div className='w-full h-full bg-white mb-20'>
                <div className='py-16 text-center'>
                    <h1 className='font-semibold text-[45px] text-gray-800'>Winning Championship Cup</h1>
                </div>
                <div className='flex flex-wrap justify-center items-center mx-auto gap-10'>
                    <div className='w-[250px] h-auto flex flex-col justify-center items-center shadow'>
                        <h1 className='text-xl font-bold text-gray-900 text-center py-5'>Final 2021</h1>
                        <img className='object-contain w-[180px] h-[250px]' src={cupone} alt='' />
                        <div className='border-b-2 pb-3 border-gray-800 relative top-[65px] mb-5 block '>
                            <img src={logoone} alt='' />
                        </div>
                    </div>
                    <div className='w-[250px] h-auto flex flex-col justify-center items-center shadow'>
                        <h1 className='text-xl font-bold text-gray-900 text-center py-5'>Final 2022</h1>
                        <img className='object-contain w-[180px] h-[250px]' src={cuptwo} alt='' />
                        <div className='border-b-2 pb-3 border-gray-800 relative top-[65px] mb-5 block '>
                            <img src={logotwo} alt='' />
                        </div>
                    </div>
                    <div className='w-[250px] h-auto flex flex-col justify-center items-center shadow'>
                        <h1 className='text-xl font-bold text-gray-900 text-center py-5'>Final 2023</h1>
                        <img className='object-contain w-[180px] h-[250px]' src={cupthree} alt='' />
                        <div className='border-b-2 pb-3 border-gray-800 relative top-[65px] mb-5 block '>
                            <img src={logothree} alt='' />
                        </div>
                    </div>
                    <div className='w-[250px] h-auto flex flex-col justify-center items-center shadow'>
                        <h1 className='text-xl font-bold text-gray-900 text-center py-5'>Final 2024</h1>
                        <img className='object-contain w-[180px] h-[250px]' src={cupfour} alt='' />
                        <div className='border-b-2 pb-3 border-gray-800 relative top-[65px] mb-5 block '>
                            <img src={logofour} alt='' />
                        </div>
                    </div>
                </div>
            </div>

            <LiveMatch />
        </>
    )
}

export default Championship