'use client'

import { useEffect, useRef } from "react";
import { gsap, Linear } from "gsap";

const testText = "test a long thing test a long thing test a long thing test a long thing test a long thing test a long thing test a long thing test a long thing test a long thing HorizontalScrollContainer HorizontalScrollContainer HorizontalScrollContaine HorizontalScrollContainer HorizontalScrollContainer HorizontalScrollContainerr"

export default function HorizontalScrollContainer({ text }: { text: string }) {
    const root = useRef(null)
    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.to(".scrollContent", {xPercent: -100, repeat: -1, duration: 20, ease: "linear"})
        }, root)

        return () => {
            ctx.kill()
        }
    })

    return (
       <div style={{ width: '100%', overflowX: 'hidden'}} ref={root}>
            <div style={{whiteSpace: 'nowrap'}}>
                <p className='scrollContent' style={{display: 'inline-block', minWidth: '100%', whiteSpace: 'pre'}}>{text}</p>
                <p className='scrollContent' style={{display: 'inline-block', minWidth: '100%', whiteSpace: 'pre'}}>{text}</p>
            </div>
       </div> 
    )
}