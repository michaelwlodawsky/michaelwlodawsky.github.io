import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import NearbyDriverDemo from "../../public/demos/nearby_driver_demo-ezgif.com-gif-to-webp-converter.webp";
import CheckoutScreenDemo from "../../public/demos/Checkout_screen_demo-ezgif.com-gif-to-webp-converter.webp";
import AdsMVPDemo from '../../public/demos/standard_Ad_demo-ezgif.com-gif-to-webp-converter.webp';
import DesignRefresh from '../../public/demos/old_design_to_new_design-ezgif.com-gif-to-webp-converter.webp'
import DemoGif from "./DemoGif";

import  styles  from "@/app/page.module.css";

const itemSize = 350

export default function HorizontalUserScrollContainer() {
    const root = useRef(null)
    const children = [
        <DemoGif key='1' title='Nearby Drivers on the map' imageData={NearbyDriverDemo} width={itemSize}></DemoGif>,
        <DemoGif key='2' title='In-app Ads MVP+' imageData={AdsMVPDemo} width={itemSize}></DemoGif>,
        <DemoGif key='3' title='Checkout screen' imageData={CheckoutScreenDemo} width={itemSize}></DemoGif>,
        <DemoGif key='4' title='App Redesign' imageData={DesignRefresh} width={itemSize}></DemoGif>
    ]

    const maxOffset = itemSize * (children.length - 1)
    let offset = 0

    const clickedPrevious = () => {
        let ctx = gsap.context(() => {
            if (offset < 0) {
                offset += itemSize 
            } else {
                offset = -maxOffset
            }

            gsap.to(".scrollContent", {x: offset, repeat: 0, duration: 0.25, ease: 'linear'})
        }, root)

        return () => {
            ctx.kill()
        }
    }

    const clickedNext = () => {
        let ctx = gsap.context(() => {
            if (offset > -maxOffset) {
                offset -= itemSize 
            } else {
                offset = 0
            }

            gsap.to(".scrollContent", {x: offset, repeat: 0, duration: 0.25, ease: 'linear'})
        }, root)

        return () => {
            ctx.kill()
        }
    }
    
    return (
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <button className={styles.horizontalScrollerButton} onClick={clickedPrevious}>{"<"}</button>
            </div>
            
            <div style={{ width: `${itemSize}px`, overflowX: 'hidden'}} ref={root}>
                <div className="scrollContent" style={{display: 'flex', flexDirection: 'row'}}>
                    {
                        children.map((child, _) => (
                            <div key={child.key}>
                                {child}
                            </div>  
                        ))
                    }
                </div>
            </div> 

            <div style={{display: 'flex', alignItems: 'center'}}>
                <button className={styles.horizontalScrollerButton} onClick={clickedNext}>{">"}</button>
            </div>
        </div>

    )
}