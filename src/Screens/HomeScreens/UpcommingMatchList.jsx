import React from 'react'
import backgroundImage from "../Assets/graound-2.jpg"
import Championship from './Championship'

function UpcommingMatchList() {

    const people = [
        { date: '23-May-2024', day: 'Sunday', match: 'India V/S Sri Lanka (1 st ODI)', venue: 'Ahmedabad', time: '3:30PM' },
        { date: '25-May-2024', day: 'Tuesday', match: 'India V/S Sri Lanka (2 nd ODI)', venue: 'Mumbai', time: '3:30PM' },
        { date: '27-May-2024', day: 'Sunday', match: 'India V/S Sri Lanka (3 rd ODI)', venue: 'Ahmedabad', time: '3:30PM' },
        { date: '23-May-2024', day: 'Sunday', match: 'India V/S Sri Lanka (1 st ODI)', venue: 'Ahmedabad', time: '3:30PM' },
        { date: '25-May-2024', day: 'Tuesday', match: 'India V/S Sri Lanka (2 nd ODI)', venue: 'Mumbai', time: '3:30PM' },
        { date: '27-May-2024', day: 'Sunday', match: 'India V/S Sri Lanka (3 rd ODI)', venue: 'Ahmedabad', time: '3:30PM' },
        { date: '23-May-2024', day: 'Sunday', match: 'India V/S Sri Lanka (1 st ODI)', venue: 'Ahmedabad', time: '3:30PM' },
        { date: '25-May-2024', day: 'Tuesday', match: 'India V/S Sri Lanka (2 nd ODI)', venue: 'Mumbai', time: '3:30PM' },
        { date: '27-May-2024', day: 'Sunday', match: 'India V/S Sri Lanka (3 rd ODI)', venue: 'Ahmedabad', time: '3:30PM' },
        { date: '23-May-2024', day: 'Sunday', match: 'India V/S Sri Lanka (1 st ODI)', venue: 'Ahmedabad', time: '3:30PM' },
    ]

    return (
        <>
            <div style={{
                background: `linear-gradient(rgba(0,0,0,0.5), #009688), url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh'
            }}>
                <div className="max-w-[1280px] mx-auto px-20 sm:px-10 lg:px-7 p-5">
                    <div className="sm:flex sm:items-center mt-10">
                        <h1 className="text-[40px] font-semibold leading-6 text-white">Upcoming Match List</h1>
                    </div>
                    <div className="mt-8 flow-root">
                        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                                    <table className="min-w-full divide-y divide-gray-300">
                                        <thead className="bg-[#597c78]">
                                            <tr>
                                                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-200 sm:pl-6 capitalize">
                                                    Date
                                                </th>
                                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-200 capitalize">
                                                    Day
                                                </th>
                                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-200 capitalize">
                                                    Match
                                                </th>
                                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-200 capitalize">
                                                    VENUE
                                                </th>
                                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-200 capitalize">
                                                    Time
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-[#90b0ac] bg-[#8aa3a0]">
                                            {people.map((person, index) => (
                                                <tr key={index} className=''>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700">{person.date}</td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700">{person.day}</td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700">{person.match}</td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700">{person.venue}</td>
                                                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-700">{person.time}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Championship />
        </>
    )
}

export default UpcommingMatchList