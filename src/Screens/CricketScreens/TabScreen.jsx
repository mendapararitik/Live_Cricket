import React, { useState } from 'react'
import AllMatchsList from './AllMatchsList';
import SeriesList from './SeriesList';
import PlayersList from './PlayersList';
import News from './News';

function TabScreen() {

    const [activeTab, setActiveTab] = useState('tab1');
    const myKey = "2c610af8-84e3-437d-80ef-b075bd9623ad";

    const handleTabChangeHandler = (tab) => {
        setActiveTab(tab);
    }

    return (
        <>
            <div className="p-4 border border-gray-100 shadow rounded-md max-w-[980px] mb-[100px] mx-auto mt-[100px]">
                {/* Tab buttons */}
                <div className="tabPanel max-w-[480px] flex justify-center items-center m-auto mb-4 shadow-xl p-2 rounded-md border-gray-100">
                    <button
                        className={`mr-2 px-4 py-2 rounded-lg shadow-md ${activeTab === 'tab1'
                            ? 'bg-[#cc70b7] text-white'
                            : 'bg-gray-200 text-gray-700'
                            }`}
                        onClick={() => handleTabChangeHandler('tab1')}
                    >
                        Matchs List
                    </button>
                    <button
                        className={`mr-2 px-4 py-2 rounded-lg shadow-md ${activeTab === 'tab2'
                            ? 'bg-[#cc70b7] text-white'
                            : 'bg-gray-200 text-gray-700'
                            }`}
                        onClick={() => handleTabChangeHandler('tab2')}
                    >
                        Series List
                    </button>
                    <button
                        className={`mr-2 px-4 py-2 rounded-lg shadow-md ${activeTab === 'tab3'
                            ? 'bg-[#cc70b7] text-white'
                            : 'bg-gray-200 text-gray-700'
                            }`}
                        onClick={() => handleTabChangeHandler('tab3')}
                    >
                        Players Info
                    </button>
                    <button
                        className={`mr-2 px-4 py-2 rounded-lg shadow-md ${activeTab === 'tab4'
                            ? 'bg-[#cc70b7] text-white'
                            : 'bg-gray-200 text-gray-700'
                            }`}
                        onClick={() => handleTabChangeHandler('tab4')}
                    >
                        News
                    </button>
                </div>

                {/* Tab content */}
                <div className='w-full'>
                    {activeTab === 'tab1' && (
                        <div>
                            <AllMatchsList myKey={myKey} />
                        </div>
                    )}
                    {activeTab === 'tab2' && (
                        <div>
                            <SeriesList myKey={myKey} />
                        </div>
                    )}
                    {activeTab === 'tab3' && (
                        <div>
                            <PlayersList myKey={myKey} />
                        </div>
                    )}
                    {activeTab === 'tab4' && (
                        <div>
                            <News myKey={myKey} />
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default TabScreen