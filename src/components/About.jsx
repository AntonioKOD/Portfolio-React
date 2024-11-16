import { useState } from "react";
export default function About() {
    const [result, setResult] = useState('')

    function play(userChoice){
        const choices = ['rock', 'paper', 'scissors'];
        const computerChoice = choices[Math.floor(Math.random() * 3)]

        

        if(userChoice === computerChoice){
            setResult(`It's a draw`)
        }else if (
            (userChoice === 'rock' && computerChoice === 'scissors') ||
            (userChoice === 'paper' && computerChoice === 'rock') ||
            (userChoice === 'scissors' && computerChoice === 'paper')
        ){
            setResult(`You win`)
        }else {
            setResult('You lose')
        }
    }
    return (
        <div className="flex flex-col items-center justify-center mt-4 text-center p-4">
            <h1 className="text-5xl font-bold text-center">
                Crafting Code, Creating Impact 🚀
            </h1>
        <p className="text-xl text-gray-600 mt-4 text-center">
            Hi, I’m Antonio. I specialize in transforming ideas into functional, user-friendly digital solutions.
        </p>
        <div className="mt-8 text-center">
            <p className="text-lg">
                I&apos;m a full-stack developer with a passion for creating clean, efficient, and scalable applications, and providing 
                smart solutions that enhance performance, engage customers, and foster growth. Designing and coding beautifuly simple things.
                When I&apos;m not coding, you&apos;ll find me exploring new tech trends, hiking, or wrestling, and also i love coffee.
            </p>
        </div>

        <div className="flex flex-col items-center mt-16">
            <h2 className="text-xl mb-4">Try to beat me!!</h2>
            <div className="space-x-4">
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={()=> play('rock')}>Rock</button>
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={()=> play('paper')}>Paper</button>
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={()=> play('scissors')}>Scissors</button>
            </div>
            <p className="mt-4 text-lg">{result}</p>
        </div>
        </div>
    )
}