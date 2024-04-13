import React from 'react'
import aboutImg from "../Assets/about-img.png"
import UpcommingMatchList from './UpcommingMatchList'

export default function AboutUs() {
    return (
        <>
            <section className="text-gray-700 body-font border-t border-gray-200">
                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                        <img alt="feature" className="object-cover object-center h-full w-full" src={aboutImg} />
                    </div>
                    <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                        <h3 className='text-[40px] text-gray-900 font-bold'>About US</h3>
                        <p className='text-gray-600 font-normal text-sm leading-loose mt-4'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. <br />
                            <span className='mt-4'>
                                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                                as opposed to using 'Content here, content here', making it look like readable English.
                                Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
                                and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                                Various versions have evolved over the years.
                                Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
                                and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                                Various versions have evolved over the years.
                                Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
                                and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                                Various versions have evolved over the years.
                            </span>

                        </p>
                        <button class="w-[180px] mt-10 bg-transparent hover:bg-[#C14770] text-blue-700 font-semibold hover:text-white py-2 px-4 border border-[#C14770] hover:border-transparent rounded capitalize">
                            Read more
                        </button>
                    </div>
                </div>
            </section>

            <UpcommingMatchList />
        </>
    )
}
