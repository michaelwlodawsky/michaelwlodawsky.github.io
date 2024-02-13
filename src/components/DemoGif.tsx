import React from "react";
import Image, { StaticImageData } from 'next/image'

interface GifProps {
    imageData: StaticImageData
    width: string
}

export default function DemoGif({ imageData, width } : GifProps) {
    return (
        <div>
            <div style={{height: 'auto', width: width, paddingTop: '10px'}}>
                <Image src={imageData} layout='responsive' alt='Demo GIF' loading="lazy"/>
            </div>
        </div>
    )
}