import { useState,useEffect } from "react";


export default function UseWindowWidth(){
const [screenWidth, setScreenWidth] = useState<number>(0);
useEffect(() => {
    const handleResize = () => {
        setScreenWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
}, []);
return screenWidth;
}

