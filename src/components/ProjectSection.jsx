import Project from "./Project"
import triviaImage from '../assets/trivia.png'
import ecomImage from '../assets/ecom.png'

const projects = [
    {
        id: 1,
        image: triviaImage,
        alt: 'Trivia Game Project',
        title: 'Trivia Master',
        description: 'A Full-Stack Trivia Game app using sequelize with postgres, express and node for the backend, and handlebars for the front end',
        link: 'https://triviagame-1c98.onrender.com',
    },
    {
        id: 1,
        image: ecomImage, 
        alt: 'Ecommerce Project',
        title: 'Alba Ecommerce Store',
        description: 'A Full-Stack App built with NextJS and Prisma as ORM with Supabase, integrated with stripe checkout for purchasing items, and a simple dashboard for the admin to create products, and Clerk for user authentication.',
        link: 'https://ecommerce-alba.vercel.app/'

    }
]
export default function ProjectSection(){
    return (
        <>
            <h1 className="text-center mb-6 text-6xl font-bold ">My Projects</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                
                {projects.map((project) => (
                   <Project key={project.id} image={project.image} alt={project.alt} title={project.title} description={project.description} link={project.link}/>
                ))}
            </div>
        </>

    )
}