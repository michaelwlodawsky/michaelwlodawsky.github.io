import Image, { StaticImageData } from "next/image";

interface TitleLogoHeaderProps {
    image: StaticImageData,
    imageAlt: string,
    title: string,
    timeSpan: string,
    widthPx?: number | null
}

// June 2020 - Present
// Tech lead of Lyft Rider App, Senior iOS Full Stack Engineer

export function TitleLogoHeader(props: TitleLogoHeaderProps) {
    return (
        <div style={{padding: '10px'}}>
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <div style={{width: `${props.widthPx ?? 50}px`, height: 'auto', paddingRight: '10px'}}>
                <Image src={props.image} layout='responsive' alt={props.imageAlt}/>
            </div>

            <h6 style={{display: 'flex', alignItems: 'center'}}>{props.timeSpan}</h6>
            
        </div>
        <p style={{fontSize: 'x-small'}}>{props.title}</p>
    </div>
    );
}