
import { Link } from 'react-router-dom';

export default function Resume() {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
            <header className="text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-800">Antonio Kodheli</h1>
                <p className="text-lg text-gray-600">Software Developer</p>
                <p>16 Hobart St, Braintree, MA 02184</p>
            </header>

            <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Skills</h2>
                <ul className="grid grid-cols-2 gap-4 text-gray-700">
                    <li>Prisma</li>
                    <li>Next.js</li>
                    <li>Supabase</li>
                    <li>Tailwind CSS</li>
                    <li>MongoDB</li>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>Express</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Experience</h2>
                <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-800">Alba Restaurant, Quincy - Bar Manager</h3>
                    <p className="text-gray-600">February 2021 - PRESENT</p>
                    <ul className="list-disc list-inside text-gray-700">
                        <li>Managing all wine and liquor lists.</li>
                        <li>Inventory tracking.</li>
                        <li>Controlling costs.</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-gray-800">Digital Dynasty, Braintree - CEO</h3>
                    <p className="text-gray-600">November 2022 - September 2024</p>
                    <ul className="list-disc list-inside text-gray-700">
                        <li>Handled marketing for businesses.</li>
                        <li>Used no-code tools to build landing pages for restaurants.</li>
                        <li>Google Ads and Facebook Ads for restaurants.</li>
                    </ul>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Education</h2>
                <div>
                    <h3 className="text-xl font-semibold text-gray-800">UC Berkeley, California - Bootcamp</h3>
                    <p className="text-gray-600">June 2024 - December 2024</p>
                    <p className="text-gray-700">Currently enrolled in the Full-Stack JavaScript bootcamp, learning to build applications using the MERN stack.</p>
                </div>
            </section>
        </div>
    );
}