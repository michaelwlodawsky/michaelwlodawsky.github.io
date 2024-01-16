import React from "react";
import Image, { StaticImageData } from 'next/image'

export default function DemoGif({ title, imageData, width } : { title: string, imageData: StaticImageData, width: number }) {
    return (
        <div>
            <h4 style={{textAlign: 'center', paddingTop: '10px'}}>{title}</h4>
            <div style={{height: 'auto', width: `${width}px`, paddingTop: '10px'}}>
                <Image src={imageData} layout='responsive' alt='Demo GIF' loading="lazy"/>
            </div>
        </div>
    )
}