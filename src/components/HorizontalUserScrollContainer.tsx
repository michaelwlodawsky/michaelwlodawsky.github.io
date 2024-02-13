import React, { ReactComponentElement, ReactElement } from "react";
import { gsap } from "gsap";

import NearbyDriverDemo from "../../public/demos/nearby_driver_demo-ezgif.com-gif-to-webp-converter.webp";
import CheckoutScreenDemo from "../../public/demos/Checkout_screen_demo-ezgif.com-gif-to-webp-converter.webp";
import AdsMVPDemo from '../../public/demos/standard_Ad_demo-ezgif.com-gif-to-webp-converter.webp';
import DesignRefresh from '../../public/demos/old_design_to_new_design-ezgif.com-gif-to-webp-converter.webp'
import DemoGif from "./DemoGif";

import  styles  from "@/app/page.module.css";

const itemSize = 350

interface HorizontalUserScrollContainerProps {
    children: ReactElement[]
    itemWidth: string
}

export default function HorizontalUserScrollContainer(props: HorizontalUserScrollContainerProps) {
    const root = React.useRef(null)
    let maxOffset = (props.children.length - 1) * itemSize;
    let offset = 0

    const clickedPrevious = () => {
        let ctx = gsap.context(() => {
            if (offset < 0) {
                offset += itemSize 
            } else {
                offset = -maxOffset
            }

            gsap.to(".userScrollContent", {x: offset, repeat: 0, duration: 0.25, ease: 'linear'})
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

            gsap.to(".userScrollContent", {x: offset, repeat: 0, duration: 0.25, ease: 'linear'})
        }, root)

        return () => {
            ctx.kill()
        }
    }
    
    return (
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <button className={styles.horizontalScrollerButton} onClick={clickedPrevious}>{" < "}</button>
            </div>
            
            <div style={{ width: props.itemWidth, overflowX: 'hidden'}} ref={root}>
                <div className="userScrollContent" style={{display: 'flex', flexDirection: 'row', width: props.itemWidth}}>
                    {
                        props.children.map((child, _) => (
                            <div key={child.key} style={{width: props.itemWidth}}>
                                {child}
                            </div>  
                        ))
                    }
                </div>
            </div> 

            <div style={{display: 'flex', alignItems: 'center'}}>
                <button className={styles.horizontalScrollerButton} onClick={clickedNext}>{" > "}</button>
            </div>
        </div>

    )
}