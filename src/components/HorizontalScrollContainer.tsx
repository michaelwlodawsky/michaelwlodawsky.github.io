'use client'

import React from "react";
import { gsap } from "gsap";
import style from "../app/page.module.css";
import { styled, keyframes } from "styled-components";

export default function HorizontalScrollContainer({ text }: { text: string }) {
    const root = React.useRef(null);
    // const [mouseHovering, setMosueHovering] = React.useState(false);

    // React.useEffect(() => {
    //     let scrollStarted = false;
    //     const handleScrollStart = () => {
    //         if (!scrollStarted) {
    //             // First scroll start
    //             // tween.timeScale(0.5);
    //         }

    //         scrollStarted = true;
    //     };

    //     const handleScrollEnd = () => {
    //         // tween.timeScale(1);
    //         scrollStarted = false;
    //     };

    //     window.addEventListener("scroll", handleScrollStart);
    //     window.addEventListener("scrollend", handleScrollEnd);

    //     return () => {
    //         // tween.kill();
    //         window.removeEventListener('scroll', handleScrollStart);
    //         window.removeEventListener('scrollend', handleScrollEnd);
    //     };
    // }, []);

    // onMouseEnter={() => setMosueHovering(true)} onMouseLeave={() => setMosueHovering(false)}

    return (
       <div style={{ width: '100%', overflowX: 'hidden', userSelect: 'none'}} ref={root}>
            <div className={style.scrollContainerWrapper}>
                <p className={style.scrollContainer}>{text}</p>
                <p className={style.scrollContainer}>{text}</p>
            </div>
       </div> 
    );
}