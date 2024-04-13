import React from 'react'
import LatestNewsUpdates from './LatestNewsUpdates'

function Testimonials() {

    return (
        <>
            <section className="bg-white py-7 sm:py-10">
                <h1 className='mt-5 text-center text-[45px] text-graay-800 font-bold'>Testimonials From Our Players </h1>

                <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-16">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20">
                            <img className="h-12 self-start" src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png" alt="" />
                            <figure className="mt-10 flex flex-auto flex-col justify-between">
                                <blockquote className="text-lg leading-8 text-gray-900">
                                    <p>
                                        “Amet amet eget scelerisque tellus sit neque faucibus non eleifend. Integer eu praesent at a. Ornare
                                        arcu gravida natoque erat et cursus tortor consequat at. Vulputate gravida sociis enim nullam
                                        ultricies habitant malesuada lorem ac. Tincidunt urna dui pellentesque sagittis.”
                                    </p>
                                </blockquote>
                                <figcaption className="mt-10 flex items-center gap-x-6">
                                    <img
                                        className="h-14 w-14 rounded-full bg-gray-50"
                                        src="https://static.tnn.in/thumb/msid-105359558,thumbsize-36208,width-1280,height-720,resizemode-75/105359558.jpg"
                                        alt=""
                                    />
                                    <div className="text-base">
                                        <div className="font-semibold text-gray-900">Rohit Sharma</div>
                                        <div className="mt-1 text-gray-500">Captain</div>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="flex flex-col border-t border-gray-900/10 pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20">
                            <img className="h-12 self-start" src="https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg" alt="" />
                            <figure className="mt-10 flex flex-auto flex-col justify-between">
                                <blockquote className="text-lg leading-8 text-gray-900">
                                    <p>
                                        “Excepteur veniam labore ullamco eiusmod. Pariatur consequat proident duis dolore nulla veniam
                                        reprehenderit nisi officia voluptate incididunt exercitation exercitation elit. Nostrud veniam sint
                                        dolor nisi ullamco.”
                                    </p>
                                </blockquote>
                                <figcaption className="mt-10 flex items-center gap-x-6">
                                    <img
                                        className="h-14 w-14 rounded-full bg-gray-50"
                                        src="https://resources.cricket-australia.pulselive.com/cricket-australia/photo/2023/05/05/3bbc7d49-96d9-40ed-9c18-5cde714e3a64/ra8A71xo.ashx"
                                        alt=""
                                    />
                                    <div className="text-base">
                                        <div className="font-semibold text-gray-900">Pat Cummins</div>
                                        <div className="mt-1 text-gray-500">Captain</div>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </section>


            <LatestNewsUpdates />
        </>
    )
}

export default Testimonials