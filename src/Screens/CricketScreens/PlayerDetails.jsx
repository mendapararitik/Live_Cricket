import React, { useState, useEffect } from 'react'

function PlayerDetails(props) {

    const [playerBioData, setPlayerBioData] = useState();

    useEffect(() => {
        const fetchSeriesData = async () => {
            try {
                const response = await fetch(`https://api.cricapi.com/v1/players_info?apikey=599ed5df-ed12-45a3-a802-5647f307e184&id=${props.player.id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch series data');
                }
                const data = await response.json();
                setPlayerBioData(data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchSeriesData();
    }, [props.player.id]);


    const backToDocuments = () => {
        if (props.backtodoc) {
            props.backtodoc();
        }
    };

    return (
        <>
            <div className="z-50 fixed top-0 left-0 h-screen w-screen flex items-center justify-center overflow-auto p-5 bg-gray-800 bg-opacity-60">
                <div className="w-full md:h-[570px] h-[500px] max-w-[760px] md:max-h-[690px] max-h-[500px] pb-4 md:pb-2 bg-white rounded-lg overflow-hidden relative">
                    <header className="w-full h-15 py-4 px-6 relative mt-3 border-b border-gray-200">
                        <div className="-mt-2 flex ml-[-15px]">
                            <p className="ml-[3px] font-semibold text-gray-900 text-lg">Player Bio Data</p>
                        </div>
                        <div className="h-full flex items-center absolute top-0 right-5">
                            <span className='mt-1 absolute top-0 -left-5 right-0 cursor-pointer' onClick={backToDocuments}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>

                            </span>
                        </div>
                    </header>
                    <div className="h-[calc(100%-135px)] w-full px-6 overflow-y-auto">
                        <div className="w-full h-full bg-white mt-5">
                            {playerBioData && (
                                <div>
                                    <div className="px-4 sm:px-0">
                                        <img className='w-20 h-20 object-fill rounded-full bg-gray-50' alt='' src={playerBioData.playerImg || "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Avatar_icon_green.svg/768px-Avatar_icon_green.svg.png"} />
                                    </div>
                                    <div className="mt-6 border-t border-gray-100">
                                        <dl className="divide-y divide-gray-100">
                                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                <dt className="text-sm font-medium leading-6 text-gray-900">Full name</dt>
                                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{playerBioData.name}</dd>
                                            </div>
                                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                <dt className="text-sm font-medium leading-6 text-gray-900">Country</dt>
                                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{playerBioData.country}</dd>
                                            </div>
                                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                <dt className="text-sm font-medium leading-6 text-gray-900">Place Of Birth</dt>
                                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{playerBioData.placeOfBirth}</dd>
                                            </div>
                                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                <dt className="text-sm font-medium leading-6 text-gray-900">Date Of Birth</dt>
                                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{new Date(playerBioData.dateTimeGMT).toLocaleString()}</dd>
                                            </div>
                                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                <dt className="text-sm font-medium leading-6 text-gray-900">Batting Style</dt>
                                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{playerBioData.battingStyle}</dd>
                                            </div>
                                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                <dt className="text-sm font-medium leading-6 text-gray-900">Bowling Style</dt>
                                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{playerBioData.bowlingStyle}</dd>
                                            </div>
                                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                <dt className="text-sm font-medium leading-6 text-gray-900">Role</dt>
                                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{playerBioData.role}</dd>
                                            </div>
                                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                <dt className="text-sm font-medium leading-6 text-gray-900">About</dt>
                                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                                    Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
                                                    qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
                                                    pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
                                                </dd>
                                            </div>

                                        </dl>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default PlayerDetails