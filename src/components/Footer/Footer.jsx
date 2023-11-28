import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import {BiPhone, BiSolidEnvelope, BiSolidPhone} from 'react-icons/bi'
const Footer = () => {

    const navigate = useNavigate();
    return (
        <footer className="z-1000 bg-white text-center text-neutral-600 dark:bg-white dark:text-neutral-200 lg:text-left relative">
            <div
                className="flex flex-col sm:flex-row items-center justify-center border-b-1 border-neutral-200 sm:p-6 pt-4 pb-4 dark:border-neutral-500 lg:justify-between bg-darkred text-white">
                <div className="mr-5 sm:mr-12 lg:block mb-3 sm:mb-0">
                    <span className='text-white text-sm'>Get connected with us on social networks:</span>
                </div>
                <div className="flex justify-center">
                    <Link to={'https://www.facebook.com/harsh.hasthkala?mibextid=ZbWKwL'}><p className="mr-6 text-neutral-600 dark:text-neutral-200">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="currentColor"
                            viewBox="0 0 24 24">
                            <path
                                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                        </svg>
                    </p></Link>
                    <Link to={'https://www.instagram.com/harshhasthkala/'}><p className="mr-6 text-neutral-600 dark:text-neutral-200">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="currentColor"
                            viewBox="0 0 24 24">
                            <path
                                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                    </p></Link>
                    <Link to={'https://www.linkedin.com/company/harsh-hasthkala/'}><p className="mr-6 text-neutral-600 dark:text-neutral-200">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="currentColor"
                            viewBox="0 0 24 24">
                            <path
                                d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                        </svg>
                    </p></Link>
                </div>
            </div>


            <div className="mx-6 py-10 text-center md:text-left">
                <div className="grid-1 grid gap-1 md:grid-cols-2 lg:grid-cols-5">
                    <div className="flex flex-col items-center sm:mr-20">
                        <h6
                            className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start font-dmsans text-darkred">
                            <div className='w-20 h-20'><img className='h-full w-full' src={Logo} alt="" /></div>
                        </h6>
                        <div className='text-sm text-gray font-dmsans '>
                            <p className='mt-2 flex items-center'><BiSolidPhone size={17} className='mr-1'/> +91 7987600654</p>
                            <p className='mt-2 flex items-center'><BiSolidEnvelope size={17} className='mr-1'/> harshhasthkala@gmail.com</p>
                        </div>
                    </div>

                    <div className='sm:ml-5 mt-5'>
                        <h6
                            className="mb-4 flex justify-center font-semibold uppercase md:justify-start font-dmsans">
                            Quick Links
                        </h6>
                        <div className="mb-4 cursor-pointer hover:text-darkdarkred text-[13px]" onClick={() => {
                            navigate('/footer-pages', {
                                state: {
                                    type: "ourstory"
                                }
                            })
                        }}>
                            <p className="text-neutral-600 dark:text-neutral-200"
                            >ABOUT US</p>
                        </div>

                        <div className="mb-4 cursor-pointer hover:text-darkdarkred  text-[13px] " onClick={() => {
                            navigate('/blog');
                        }}>
                            <p className="text-neutral-600 dark:text-neutral-200"
                            >BLOG</p>
                        </div>

                        <div className="mb-4 cursor-pointer hover:text-darkdarkred  text-[13px] " onClick={() => {
                            navigate('/contact-us-page')
                        }}>
                            <p className="text-neutral-600 dark:text-neutral-200"
                            >CONTACT US</p>
                        </div>
                    </div>



                    <div className="mt-5">
                        <h6
                            className="mb-4 flex justify-center font-semibold uppercase md:justify-start font-dmsans">
                            More Info
                        </h6>
                        <div className="mb-4 cursor-pointer uppercase  text-[13px] hover:text-darkred " onClick={() => {
                            navigate('/footer-pages', {
                                state: {
                                    type: "return&refund"
                                }
                            })
                        }}>
                            <p className="text-neutral-600 dark:text-neutral-200"
                            >Return & Refund</p>
                        </div>
                        <div className="mb-4 cursor-pointer uppercase text-[13px] hover:text-darkred " onClick={() => {
                            navigate('/footer-pages', {
                                state: {
                                    type: "privacypolicy"
                                }
                            })
                        }}>
                            <p className="text-neutral-600 dark:text-neutral-200"
                            >Privacy Poilcy</p>
                        </div>
                        <div className="mb-4 cursor-pointer uppercase text-[13px] hover:text-darkred " onClick={() => {
                            navigate('/footer-pages', {
                                state: {
                                    type: "terms&condition"
                                }
                            })
                        }}>
                            <p className="text-neutral-600 dark:text-neutral-200"
                            >Terms & Condition</p>
                        </div>
                        <div className=' cursor-pointer text-[13px] uppercase hover:text-darkred ' onClick={() => {
                            navigate('/footer-pages', {
                                state: {
                                    type: "faqs"
                                }
                            })
                        }}>
                            <p className="text-neutral-600 dark:text-neutral-200"
                            >FAQ'S</p>
                        </div>

                    </div>
                    <div className='mt-5 '>
                        <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start font-dmsans">
                            SUBSCRIBE
                        </h6>
                        <div className='flex justify-center lg:justify-start items-center h-10 text-sm w-full pr-5'>
                            <input type="text" placeholder='Enter Your Email Address' className='text-xs pl-3 h-full border rounded min-w-[200px] sm:min-w-[300px]' />
                            <button className='font-dmsans bg-darkred rounded-full text-white h-full min-w-[100px] ml-2'>Subscribe</button>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className="bg-neutral-200 p-6 text-center dark:bg-neutral-700 text-sm border-t">
                <span>© 2023 Copyright:</span>
                <a
                    className="font-semibold text-neutral-600 dark:text-neutral-400"
                    href="https://tailwind-elements.com/"
                >&nbsp;Harsh Hasthkala Pvt Ltd.</a>
            </div>
        </footer>
    )
}

export default Footer