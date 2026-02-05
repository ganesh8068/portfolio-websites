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
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=300&h=300" 
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
                            "Building accessible, pixel-perfect, and performant web experiences."
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
