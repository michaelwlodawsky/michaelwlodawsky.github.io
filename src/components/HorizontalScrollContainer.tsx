'use client'

import React from "react";
import { gsap } from "gsap";

export default function HorizontalScrollContainer({ text }: { text: string }) {
    const root = React.useRef(null);
    const [mouseHovering, setMosueHovering] = React.useState(false);
    let progress: number = 0

    React.useEffect(() => {
        // TODO: Have mouse hover slowdown animation too
        /*
            Animation is currently broken: I need to persist values of the animation across re-renders and set the values accordingly

            start x at 0% and move to -100%, repeat -1 always, duration ??, ease linear always

            1. on re-render, pause the animation to get stable values
            2. save the progress
            3. set start x to -100 * progress, set duration to 
        
        */
        let tween = gsap.to(".scrollContent", {xPercent: -100, repeat: -1, duration: 15, ease: "linear"});

        let scrollStarted = false;

        const handleScrollStart = () => {
            if (!scrollStarted) {
                // First scroll start
                tween.timeScale(0.5);
            }

            scrollStarted = true;
        };

        const handleScrollEnd = () => {
            tween.timeScale(1);
            scrollStarted = false;
        };

        window.addEventListener("scroll", handleScrollStart);
        window.addEventListener("scrollend", handleScrollEnd);

        // if (mouseHovering) {
            
        // } else {

        // }

        return () => {
            tween.kill();
            window.removeEventListener('scroll', handleScrollStart);
            window.removeEventListener('scrollend', handleScrollEnd);
        };
    }, []);

    return (
       <div onMouseEnter={() => setMosueHovering(true)} onMouseLeave={() => setMosueHovering(false)} style={{ width: '100%', overflowX: 'hidden', userSelect: 'none'}} ref={root}>
            <div style={{whiteSpace: 'nowrap'}}>
                <p className='scrollContent' style={{display: 'inline-block', minWidth: '100%', whiteSpace: 'pre'}}>{text}</p>
                <p className='scrollContent' style={{display: 'inline-block', minWidth: '100%', whiteSpace: 'pre'}}>{text}</p>
            </div>
       </div> 
    );
}