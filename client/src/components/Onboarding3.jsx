import React from 'react';
import { GrLinkNext } from "react-icons/gr";
import { Link } from 'react-router-dom';


const Onboarding3 = () => {
    return (
        <div className="flex flex-col justify-center items-center h-full bg-cover bg-center text-white" style={{ backgroundImage: 'url(https://s3-alpha-sig.figma.com/img/e088/8995/13a478aa6d3cc9bebac1c6fe29b1cf35?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=duz6dA7doe3wpqGBTvFXD7eSqCD1lBv39rMRvpbxVxWU-HwqrRREYNRE9el2I7LQ0kPjAVZa9CdyOW-EhrkuDHLn0Qw-X5F~mxs7hKcbyrgiXQbv6IbgDiAy8Eze4ErKeBRmZhXOjIUdhSN5SRgZaip8TlZe3--BCk-4yKi2c88lC~V73tXAVaV5xowjy6WYbeO5g-NSXxbY9PGnPx-t1pcidgKfTY-DojLcSVzrByxyw7gfGL5tdI0BsKbc12Ynu8MW4rnc-Ctmc0S3TE7ICdWL22FaTsKhQT0h7N6Nkd5SF6y8M7Lmp8fwbnH8AAPVWa0AtlqcLFrnTJg8ExaFVw__)' }}>
            <div className="bg-orange-500 bg-opacity-75 p-8 rounded-lg text-center w-3/4 md:w-1/2 h-auto flex flex-col justify-center items-center">
                <h1 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">We serve incomparable delicacies</h1>
                <p className="text-sm md:text-lg mb-8 leading-relaxed">All the best restaurants with their top menu waiting for you, they can’t wait for your order!!</p>
                <div className="flex flex-col items-center mt-4">
                    <div className="flex space-x-2 mb-4">
                        <span className="block w-8 h-2 bg-white opacity-50 rounded-r-lg rounded-l-lg"></span>
                        <span className="block w-8 h-2 bg-white opacity-50 rounded-r-lg rounded-l-lg"></span>
                        <span className="block w-12 h-2 bg-white rounded-r-lg rounded-l-lg"></span>
                    </div>
                    <div className="p-1 rounded-full border-1 border-t-4 border-r-4 border-b-4 border-white">
                        <Link to="/login" className="bg-white text-orange-500 p-4 rounded-full shadow-lg flex items-center justify-center">
                            <GrLinkNext className="text-3xl" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Onboarding3