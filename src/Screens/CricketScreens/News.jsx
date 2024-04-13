import React, { useState, useEffect } from 'react'
import emptyImg from "../Assets/Empty.svg";


function News() {

    const [newsList, setNewsList] = useState([]);

    useEffect(() => {
        fetch(`https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=7f5d937ac60449dcabfb74fb45d958b0`)
            .then(response => response.json())
            .then(data => {
                setNewsList(data.articles);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className='max-w-[700px] mx-auto'>

            {newsList.length > 0 ? (
                newsList.map((news, index) => (
                    <div key={index} className='max-w-full p-4 px-5 mt-5 shadow rounded'>
                        <div className='w-full text-end'>
                            <h1 className='mb-5 text-sm font-normal text-gray-600 inline-block pb-1'>{new Date(news.publishedAt).toLocaleString()}</h1>
                        </div>
                        <div className='flex'>
                            <img className='w-[260px] h-[180px] rounded-md bg-gray-50' src={news.urlToImage || "https://cdn.pixabay.com/photo/2016/09/04/17/46/news-1644696_960_720.png"} alt='' />
                            <div className='w-[390px] flex flex-col'>
                                <h1 className='truncate-2 w-full ml-5 text-base font-xs text-gray-800 '>{news.title}</h1>
                                <p className='truncate-2 w-full ml-5 text-sm font-normal text-gray-500 mt-3'>
                                    {news.description}
                                </p>
                            </div>
                        </div>
                        <div className='m-auto text-center'>
                            <a href={news.url} target="_blank" rel="noopener noreferrer" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4  hover:border-transparent rounded">
                                Read more
                            </a>
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

export default News