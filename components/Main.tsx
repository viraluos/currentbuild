"use client"

import Box from "@/components/Box";

import { twMerge } from "tailwind-merge";

interface MainProps{
    children: React.ReactNode;
    className?: string;
}

const Main: React.FC<MainProps> = ({ children, className }) => {
    return(
        <div className={twMerge( `  `, className )}>
            <Box>{children}</Box>
        </div>
    );
}

export default Main;