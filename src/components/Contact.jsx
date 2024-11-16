

//implement this later with a package like emailJS or Resend
export default function Contact(){
    return(
        <>
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Contact Me</h2>
            <form className="space-y-4" action="mailto:antonio_kodheli@icloud.com">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    
                    <input type="text" name="name" className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 " placeholder="Full Name" required/>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700" >Email</label>
                        <input type="email" name="email" className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="name@example.com" required/>
                    </div>
                    <div>
                        <label htmlFor="text" className="block text-sm font-medium text-gray-700">Message</label>
                        <textarea name="text" className="mt-1 block w-full h-[20rem] p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Type something..." required/>
                    </div>
                    <div>
                        <button className="rounded-lg border-blue-500 bg-blue-500 text-lg text-white p-3 w-full" type="submit">Submit</button>
                    </div>
            </form>

        </div>
        </>
    )
}