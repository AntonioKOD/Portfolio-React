import {Link} from 'react-router-dom';


export default function Navigation(){
    return (
        <nav className='max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between'>
        <Link className='flex-none font-semibold text-xl text-black focus:outline-none focus:opacity-80' to='/'>codeWithToni</Link>
        <div className='flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0'>
        <Link className='font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400' to='/'>About Me</Link>
        <Link className='font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400' to='/projects'>Projects</Link>
        <Link className='font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400' to='/contact'>Contact</Link>
        <Link className='font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400' to='/resume'>Resume</Link>
        </div>
        </nav>
    )
}