import React, { useState } from 'react';
import { User, Briefcase, Mail, Cpu, FileText } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import DesktopIcon from './DesktopIcon';
import Window from './Window';
import Taskbar from './Taskbar';
import Profile from './content/Profile';
import Background3D from './Background3D';
import Projects from '../Projects';
import Contact from '../Contact';
import Skills from '../Skills';
import Certificates from '../Certificates';
import { Award } from 'lucide-react';

const Desktop = () => {
    const [windows, setWindows] = useState([
        { id: 'profile', title: 'Profile', component: <Profile />, isClosable: true, centered: true }
    ]);
    const [activeWindow, setActiveWindow] = useState('profile');

    const openWindow = (id, title, component) => {
        console.log("Opening window:", id);
        if (!windows.find(w => w.id === id)) {
            const newWindows = [...windows, { id, title, component }];
            console.log("Adding new window. Current windows:", newWindows);
            setWindows(newWindows);
        } else {
            console.log("Window already open, focusing.");
        }
        setActiveWindow(id);
    };

    const closeWindow = (id) => {
        setWindows(windows.filter(w => w.id !== id));
        if (activeWindow === id) {
            setActiveWindow(windows.length > 1 ? windows[windows.length - 2].id : null);
        }
    };

    const minimizeWindow = (id) => {
        setActiveWindow(null); 
    };

    const bringToFront = (id) => {
        setActiveWindow(id);
    };



    return (
        <div className="min-h-screen bg-retro-beige bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[40px_40px] relative overflow-hidden font-sans selection:bg-retro-pink selection:text-white">
            <Background3D />
            
            {/* Left Icons - Stack on mobile, Col on Desktop */}
            <div className="flex flex-row flex-wrap justify-center gap-4 p-4 md:absolute md:top-8 md:left-8 md:flex-col md:gap-8 md:p-0">
                <DesktopIcon 
                    icon={User} 
                    label="Profile" 
                    variant="app"
                    onClick={() => openWindow('profile', 'Profile', <Profile />)} 
                />
                <DesktopIcon 
                    icon={Briefcase} 
                    label="Works" 
                    variant="folder"
                    onClick={() => openWindow('works', 'Works', <Projects />)} 
                />
                <DesktopIcon 
                    icon={Cpu} 
                    label="Skills" 
                    variant="folder"
                    onClick={() => openWindow('skills', 'Skills', <Skills />)} 
                />

                <DesktopIcon 
                    icon={Mail} 
                    label="Contact" 
                    variant="folder"
                    onClick={() => openWindow('contact', 'Contact', <Contact />)} 
                />
                
            </div>

            {/* Right Icons - Stack on mobile, Col on Desktop */}
            <div className="flex flex-row flex-wrap justify-center gap-4 p-4 md:absolute md:top-8 md:right-8 md:flex-col md:gap-8 md:p-0">
                
                <DesktopIcon 
                    icon={FileText} 
                    label="Resume"
                    onClick={() => window.open('https://drive.google.com/file/d/1QXtxHrvGayShisZ7R72Qj6ustNqjec59/view?usp=sharing', '_blank')} 
                />
                <DesktopIcon 
                    icon={Award} 
                    label="Certificates" 
                    variant="folder"
                    onClick={() => openWindow('certificates', 'Certificates', <Certificates />)} 
                />
            </div>

            {/* Windows */}
            <AnimatePresence>
                {windows.map((win) => (
                    <Window
                        key={win.id}
                        id={win.id}
                        title={win.title}
                        onClose={closeWindow}
                        onMinimize={minimizeWindow}
                        onFocus={bringToFront}
                            isActive={activeWindow === win.id}
                        defaultPosition={{ x: '15%', y: '10%' }}
                        isClosable={win.isClosable}
                        centered={win.centered}
                    >
                        <div className="h-full bg-retro-cream rounded-b-md">
                             {win.component}
                        </div>
                    </Window>
                ))}
            </AnimatePresence>

            <Taskbar />
        </div>
    );
};

export default Desktop;
