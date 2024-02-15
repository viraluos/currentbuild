"use client"

import Box from "@/components/Box";
import Main from "@/components/Main";

import Typewriter from 'typewriter-effect';

const Content = ({}) => {
    const things = [
        "Maybe you want to listen to some music?",
        "Or maybe you only want to play some snake?",
        "What about spying my todo list?",
        "Wanna see my photos? naw man too close."];

    return(
        <div className="w-full p-2 h-fit">
        
            <Box>
                Nav
            </Box>
            
            <Main className="max-w-[830px] mx-auto">
                
                <div className="text-5xl font-bold">
                    Welcome back!
                </div>

                <div className="p-2">
                    <p className="underline">What do you want to do today huh?</p>
                    <div className="p-4">
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter.typeString(things[Math.floor(Math.random() * (things.length - 0 + 1)) + 0])
                                .pauseFor(2500).deleteAll()
                                .start();
                            }}
                        />
                    </div>
                </div>

            </Main>
        
        </div>
    );
};

export default Content;