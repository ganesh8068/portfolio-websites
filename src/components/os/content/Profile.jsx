import React from 'react';
import Experience from '../../Experience';
import Education from '../../Education';

const Profile = () => {
    return (
        <div className="h-full flex flex-col font-sans">
            {/* Intro Card Section */}
            <div className="flex items-center justify-center p-8 bg-retro-cream min-h-[300px]">
                <div className="flex flex-col md:flex-row items-center gap-8 max-w-2xl">
                    {/* Profile Image */}
                    <div className="relative">
                        <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-xl">
                            <img 
                                src="https://media.licdn.com/dms/image/v2/D5603AQFiUytXp9704w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1684919727537?e=1772064000&v=beta&t=MDn7hKf_5-WPC2cAgIcB3uIRVDLB62YQ7GRkLZ6Jrxo" 
                                alt="Profile" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="text-center md:text-left">
                        <p className="text-retro-text text-xl font-medium mb-1">hi! i'm</p>
                        <h1 className="text-5xl font-bold text-retro-orange mb-2 font-display tracking-tight">
                            Ganesh Lokhande
                        </h1>
                        <p className="text-retro-olive font-bold tracking-widest text-sm mb-4">
                            FULL STACK DEVELOPER
                        </p>
                        <p className="text-gray-500 italic font-serif">
                            "Full-Stack Developer skilled in building responsive, scalable web applications using modern frontend and backend technologies. Experienced in developing clean UI, REST APIs, and deploying production-ready applications with a focus on performance and user experience."
                        </p>
                    </div>
                </div>
            </div>

            {/* Scrollable Details Section */}
            <div className="flex-1 overflow-y-auto p-8 space-y-16 border-t border-retro-olive/10 bg-retro-beige/30">
                {/* Experience Section */}
                <section>
                    <h3 className="text-2xl font-bold text-retro-olive mb-6">Experience</h3>
                    <Experience />
                </section>

                {/* Education Section */}
                <section>
                    <h3 className="text-2xl font-bold text-retro-olive mb-6">Education</h3>
                    <Education />
                </section>
            </div>
        </div>
    );
};

export default Profile;
