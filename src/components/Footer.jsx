import { FaGithub, FaLinkedin} from "react-icons/fa"
import { Link } from "react-router-dom"

export default function Footer(){
    return (
        <>
        <div className="flex flex-row justify-center items-center space-x-4 bg-gray-800 text-white py-4">
        <Link to='https://github.com/AntonioKOD'><FaGithub className="text-4xl"/></Link>
        <Link to='https://www.linkedin.com/in/antonio-kodheli-1430aa290/'><FaLinkedin className="text-4xl"/></Link>
        </div>
        
        </>
    )
}