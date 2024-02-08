'use client'

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

const testText = "test a long thing test a long thing test a long thing test a long thing test a long thing test a long thing test a long thing test a long thing test a long thing HorizontalScrollContainer HorizontalScrollContainer HorizontalScrollContaine HorizontalScrollContainer HorizontalScrollContainer HorizontalScrollContainerr"

export default function HorizontalScrollContainer({ text }: { text: string }) {
    const root = useRef(null)
    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        let ctx = gsap.context(() => {
            let tween = gsap.to(".scrollContent", {xPercent: -100, repeat: -1, duration: 20, ease: "linear"})
            

            // TODO: Make animation slow and resume speed

            // ScrollTrigger.addEventListener('scrollStart', () => {
            //     // tween.pause()
            //     tween.timeScale(1.5)
            // })

            // ScrollTrigger.addEventListener('scrollEnd', () => {
            //     // tween.pause()
            //     tween.timeScale(1)
            //     // tween.totalDuration(20)
            // })
            

            // // tween.totalDuration(1)
            // return () => {
            // }
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