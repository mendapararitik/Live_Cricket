import React, { useState, useEffect } from 'react'
import emptyImg from "../Assets/Empty.svg";
import PlayerDetails from './PlayerDetails';


function PlayersList(props) {

    const apiKey = props.myKey;
    const [playerList, setPlayersList] = useState("");
    const [searchQuery, setSearchQuery] = useState('');
    const [openPlayerDetails, setOpenPlayerDetails] = useState(false);
    const [selectedPlayer, setSelectedPlayer] = useState(null);

    useEffect(() => {
        const fetchSeriesData = async () => {
            try {
                const response = await fetch(`https://api.cricapi.com/v1/players?apikey=${apiKey}&offset=0&search=${searchQuery}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch series data');
                }
                const data = await response.json();
                setPlayersList(data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchSeriesData();
    }, [apiKey, searchQuery]);


    const handleSearchInputChange = event => {
        setSearchQuery(event.target.value);
    };

    const handlePlayerDetails = () => {
        setOpenPlayerDetails(!openPlayerDetails);
    };

    const handleViewProfile = (person) => {
        setSelectedPlayer(person);
        setOpenPlayerDetails(true);
    };

    if (!playerList || playerList.length === 0) {
        return (
            <div className='w-full h-full flex flex-col text-center justify-center items-center mt-[15px]'>
                <img className='w-auto h-[200px] object-contain' src={emptyImg} alt='' />
                <p className='text-gray-700 font-normal text-base'>No Data Available</p>
            </div>
        );
    }


    return (
        <>
            <div className="relative w-[600px] mt-10 m-auto">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
                <input
                    onChange={handleSearchInputChange}
                    value={searchQuery}
                    type="search"
                    id="default-search"
                    className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                    placeholder="Search series list..."
                    required
                />
            </div>
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {playerList.length === 0 ? (
                    <li className="col-span-1 mt-10 text-center text-gray-500">
                        No data available
                    </li>
                ) : (
                    playerList.map((person, index) => (
                        <li key={index} className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow mt-10">
                            <div className="flex w-full items-center justify-between space-x-6 p-6">
                                <div className="flex-1 truncate">
                                    <div className="flex items-center space-x-3">
                                        <h3 className="truncate text-sm font-medium text-gray-900">{person.name}</h3>
                                    </div>
                                    <p className="mt-1 truncate text-sm text-gray-500">{person.country}</p>
                                </div>
                                <img className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300" src={"https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Avatar_icon_green.svg/768px-Avatar_icon_green.svg.png"} alt="" />
                            </div>
                            <div>
                                <div className="w-full -mt-px flex justify-center items-center p-3 cursor-pointer">
                                    <h1 className='text-center text-sm text-gray-600' onClick={() => handleViewProfile(person)}>View Profile</h1>
                                </div>
                            </div>
                        </li>
                    ))
                )}
            </ul>

            {openPlayerDetails ? (
                <div>
                    <PlayerDetails player={selectedPlayer} backtodoc={handlePlayerDetails} />
                </div>
            ) : null}
        </>
    )
}

export default PlayersList