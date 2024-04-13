import { react, useState, useEffect } from 'react'
import emptyImg from "../Assets/Empty.svg";

function SeriesList(props) {

    const apiKey = props.myKey;
    const [allSeries, setAllSeries] = useState();
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchSeriesData = async () => {
            try {
                const response = await fetch(`https://api.cricapi.com/v1/series?apikey=${apiKey}&offset=0&search=${searchQuery}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch series data');
                }
                const data = await response.json();
                setAllSeries(data.data);
                // console.log(data.data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchSeriesData();
    }, [apiKey, searchQuery]);

    const handleSearchInputChange = event => {
        setSearchQuery(event.target.value);
    };

    return (
        <>
            <div className='max-w-[700px] mx-auto'>
                <div class="relative w-[600px] mt-10 m-auto">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input onChange={handleSearchInputChange} value={searchQuery} type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50" placeholder="Search series list..." required />
                </div>
                {allSeries && allSeries.length > 0 ? (
                    allSeries.map((series, index) => (
                        <div key={index} className='bg max-w-full flex justify-between p-4 px-5 mt-5 shadow rounded'>
                            <div className=''>
                                <h1 className='mb-5 text-base font-bold text-gray-700 border-b-2 border-purple-400 inline-block pb-1'>Match Start Date</h1>
                                <div className='flex flex-col'>
                                    <h2 className='mt-5 text-gray-600 font-normal text-sm'>Start Date <span className='ml-4 text-xs text-gray-800'>{series.startDate}</span> </h2>
                                    <h2 className='mt-3 text-gray-600 font-normal text-sm'>End Date <span className='ml-4 text-xs text-gray-800'>{series.endDate}</span> </h2>
                                </div>
                            </div>
                            <div>
                                <h1 className='mb-5 text-base font-bold text-gray-700 border-b-2 border-purple-400 inline-block pb-1'>Team Info</h1>
                                <h1 className='w-[250px] mt-5 text-gray-600 font-normal text-sm truncate-2'>{series.name}</h1>
                            </div>
                            <div>
                                <h1 className='mb-3 text-base font-bold text-gray-700 border-b-2 border-purple-400 inline-block pb-1'>Total Played Matches</h1>
                                <div className='flex flex-col'>
                                    <div className='flex justify-between border-b-2 border-blue-100 pb-1'>
                                        <h1 className='mt-5 text-gray-600 uppercase'>OD</h1>
                                        <span className='mt-5 ml-4 text-xs text-gray-800'>{series.odi}</span>
                                    </div>
                                    <div className='flex justify-between border-b-2 border-blue-100 pb-1'>
                                        <h1 className='mt-5 text-gray-600 font-normal text-sm uppercase'>t20</h1>
                                        <span className='mt-5 ml-4 text-xs text-gray-800'>{series.t20}</span>
                                    </div>
                                    <div className='flex justify-between border-b-2 border-blue-100 pb-1'>
                                        <h1 className='mt-5 text-gray-600 font-normal text-sm uppercase'>test</h1>
                                        <span className='mt-5 ml-4 text-xs text-gray-800'>{series.test}</span>
                                    </div>
                                    <div className='flex justify-between border-b-2 border-blue-100 pb-1'>
                                        <h1 className='mt-5 text-gray-600 font-normal text-sm uppercase'>squads</h1>
                                        <span className='mt-5 ml-4 text-xs text-gray-800'>{series.squads}</span>
                                    </div>
                                    <div className='flex justify-end items-end'>
                                        <h1 className='mt-5 text-gray-600 font-normal text-sm uppercase'>Total</h1>
                                        <span className='mt-5 text-gray-600 font-normal text-sm uppercase ml-5'>{series.matches}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className='w-full h-full flex flex-col text-center justify-center items-center mt-[15px]'>
                        <img className='w-auto h-[200px] object-contain' src={emptyImg} alt='' />
                        <p className='text-gray-700 font-normal text-base'>No Data Available</p>
                    </div>
                )}
            </div>

        </>
    )
}

export default SeriesList