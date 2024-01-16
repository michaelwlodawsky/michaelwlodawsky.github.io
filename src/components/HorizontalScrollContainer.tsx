'use client'

import { useEffect, useRef } from "react";
import { gsap, Linear } from "gsap";

const testText = "test a long thing test a long thing test a long thing test a long thing test a long thing test a long thing test a long thing test a long thing test a long thing HorizontalScrollContainer HorizontalScrollContainer HorizontalScrollContaine HorizontalScrollContainer HorizontalScrollContainer HorizontalScrollContainerr"

export default function HorizontalScrollContainer({ text }: { text: string }) {
    const root = useRef(null)
    useEffect(() => {
        let ctx = gsap.context(() => {
            let tween = gsap.to(".scrollContent", {xPercent: -100, repeat: -1, duration: 20, ease: "linear"})
            gsap.set(".scrollContent", {xPercent: 0});
            gsap.to(tween, {})
        }, root)

        return () => {
            ctx.kill()
        }
    })


    return (
       <div style={{  minWidth: '100%', overflowX: 'hidden'}} ref={root}>
            <div style={{whiteSpace: 'nowrap'}}>
                <p className='scrollContent' style={{display: 'inline-block', width: '100%'}}>{text}</p>
                <p className='scrollContent' style={{display: 'inline-block', width: '100%'}}>{text}</p>
            </div>
       </div> 
    )
}