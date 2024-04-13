import React, { useState, useEffect } from 'react'
import emptyImg from "../Assets/Empty.svg";

function AllMatchsList(props) {

    const apiKey = props.myKey;
    const [allMatchesList, setAllMatchesList] = useState("");

    useEffect(() => {
        fetch(`https://api.cricapi.com/v1/matches?apikey=${apiKey}&offset=0`)
            .then(response => response.json())
            .then(data => {
                setAllMatchesList(data.data);

            })
            .catch(error => console.error('Error fetching data:', error));
    }, [apiKey]);

    return (
        <div className='max-w-full h-full gap-4 flex flex-wrap justify-center items-center m-auto z-50'>

            {allMatchesList && allMatchesList.length > 0 ? (
                allMatchesList.map((match, index) => (
                    <div key={index} className='w-[300px] h-[230px] mt-5 shadow-md p-2'>
                        <div className='flex justify-between'>
                            <p className='text-blue-500 font-normal text-sm'>{match.matchType}</p>
                            <p className='text-blue-500 font-normal text-sm'>{new Date(match.dateTimeGMT).toLocaleString()}</p>
                        </div>
                        <div className='w-full p-2'>
                            <div className='w-full flex justify-between items-center mt-4'>
                                <div>
                                    <p className='text-sm font-normal text-gray-600'>Teams</p>
                                </div>
                                <div className='flex'>
                                    <p className='text-sm font-normal text-gray-600 mr-5'>Runs</p>
                                    <p className='text-sm font-normal text-gray-600 mr-[16px]'>Overs</p>
                                    <p className='text-sm font-normal text-gray-600'>Wickets</p>
                                </div>
                            </div>
                            <div className='mt-2 flex justify-between'>
                                <div className='flex flex-col'>
                                    <div className='flex'>
                                        <img className='w-5 h-5 object-fill' src={match.teamInfo && match.teamInfo[0]?.img || "https://t3.ftcdn.net/jpg/02/02/27/68/360_F_202276862_Bl20MC12CxPZAr781Sctf37otHIwSvBU.jpg"} alt="img" />
                                        <span className='text-gray-600 text-sm font-normal ml-2 w-[60px] truncate'>{match.teamInfo && match.teamInfo[0]?.shortname || match.teams[0]}</span>
                                    </div>
                                    <div className='flex mt-5'>
                                        <img className='w-5 h-5 object-fill' src={match.teamInfo && match.teamInfo[1]?.img || "https://cdn2.vectorstock.com/i/1000x1000/30/46/cricket-team-logo-template-design-vector-46423046.jpg"} alt="" />
                                        <span className='text-gray-600 text-sm font-normal ml-2 w-[60px] truncate'>{match.teamInfo && match.teamInfo[1]?.shortname || match.teams[1]}</span>
                                    </div>
                                </div>

                                {/* <div className='flex flex-col  items-start gap-5'>
                                <div className='flex'>
                                    {match.score[0] && (
                                        <>
                                            <p className='text-sm font-normal text-gray-600 mr-9'>{match.score[0].r}</p>
                                            <p className='text-sm font-normal text-gray-600 mr-9'>{match.score[0].o}</p>
                                            <p className='text-sm font-normal text-gray-600 mr-[23px]'>{match.score[0].w}</p>
                                        </>
                                    )}

                                </div>
                                <div className='flex'>
                                    {match.score[1] && (
                                        <>
                                            <p className='text-sm font-normal text-gray-600'>{match.score[1].r}</p>
                                            <p className='text-sm font-normal text-gray-600'>{match.score[1].o}</p>
                                            <p className='text-sm font-normal text-gray-600'>{match.score[1].w}</p>

                                        </>
                                    )}

                                </div>
                            </div> */}
                            </div>
                            <div className='text-center mt-[25px]'>
                                <p className='font-normal text-sm text-red-600'>{match.status}</p>
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

    )
}

export default AllMatchsList