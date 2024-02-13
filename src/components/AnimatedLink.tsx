import Link from "next/link";
import React, { MutableRefObject } from "react";
import { gsap } from "gsap";

interface AnimatedLinkProps {
    hrefString: string;
    isActive: boolean;
    root: MutableRefObject<null>;
}

export function AnimatedLink(props: AnimatedLinkProps) {
    const [isButtonHovering, setButtonHovering] = React.useState(false);
    const onMouseEnter = () => {setButtonHovering(true)};
    const onMouseExit = () => {setButtonHovering(false)};

    const circleStyleWithAnimation: React.CSSProperties = {
        position: 'absolute',
        height: '50px',
        width: isButtonHovering ? '100%' : '50px',
        backgroundColor: 'lightblue',
        transform: `translate(-${isButtonHovering ? 5: 25}%, -75%)`,
        borderRadius: isButtonHovering ? '50px' : '50%',
        opacity: '50%',
        zIndex: '-1',
        transition: `width 500ms, border-radius 500ms ${isButtonHovering ? '0ms' : '500ms'}, transform ${isButtonHovering ? '0ms' : '500ms'}`
    };

    React.useEffect(() => {
        let animated = false;
        let ctx = gsap.context(() => {
            gsap.set(".actionButton", {yPercent: 30, opacity: 0});
            if (props.isActive && !animated) {
                gsap.to(".actionButton", {yPercent: 0, opacity: 1, duration: 1.5, ease: 'power2.out'});
                animated = true;
            }
        }, props.root)

        return () => {
            ctx.kill();
        }
    }, [props.isActive]);

    return (
        <div style={{display: 'flex', justifyContent: 'center', width: '255px'}} className="actionButton">
            <Link onMouseEnter={onMouseEnter} onMouseLeave={onMouseExit} style={{color: "white", padding: '10px'}} href={props.hrefString}>
                <span style={{zIndex: '1'}}>Would you like to know more?</span>
                <div style={circleStyleWithAnimation}></div>
            </Link>
        </div>
    );
}