/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

export default function Project(props) {
    return (
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
            <img 
                className="w-full h-48 object-cover" 
                src={props.image} 
                alt={props.alt} 
            />
            <div className="px-6 py-4">
                <div className="font-bold text-2xl mb-2 text-gray-800">
                    {props.title}
                </div>
                <p className="text-gray-600 text-base">
                    {props.description}
                </p>
            </div>
            <div className="px-6 pb-4">
                <Link 
                    to={props.link} 
                    className="inline-block text-blue-500 hover:text-blue-700 font-medium text-lg"
                >
                    View this project &rarr;
                </Link>
            </div>
        </div>
    );
}