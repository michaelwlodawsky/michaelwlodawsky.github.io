import React, { ReactElement, useState } from "react";
import ChevronRight from "../../../public/chevron_right.svg";
import Image from 'next/image';
import DemoGif from "../DemoGif";

interface ExpandableItemProps {
    title: string,
    children: ReactElement
}

export function ExpandableItem(props: ExpandableItemProps) {
    const [expanded, setExpanded] = useState(false);
    const [hovering, setHovering] = useState(false);
    const isDemo = props.children.type == DemoGif

    const expandableItemStyle: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'center',
        height: expanded ? isDemo ? '800px' : 'auto' : '0px',
        opacity: expanded ? '100%' : '0%',
        overflowY: 'hidden',
        width: '50%',
        transition: 'height ease-in-out 300ms, opacity ease-in-out 300ms, overflowY ease-in-out 300ms'
    }

    const titleStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        userSelect: 'none',
        width: '50%',
        paddingTop: '10px',
        paddingBottom: '10px',
        backgroundColor: hovering ? 'rgba(173, 216, 230, 0.5)' : 'transparent' // lightblue, 50% opacity or clear
    }

    const chevronStyle: React.CSSProperties = {
        height: '25px',
        width: 'auto',
        color: 'white',
        transform: `rotate(${!expanded ? '0deg' : '90deg'})`,
        transition: 'transform 300ms'
    }

    return (
        <>
            <a style={titleStyle} onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)} onClick={() => setExpanded(!expanded)}>
                {props.title}
                <Image style={chevronStyle} src={ChevronRight} alt='chevron right'/>
            </a>
            <div style={expandableItemStyle}>
                { props.children }
            </div>
        </>
    );
}