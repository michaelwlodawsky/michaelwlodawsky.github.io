'use client'
import { useState, useEffect } from "react"
import { validateToken } from "@/service/validateToken"
import { useSearchParams } from 'next/navigation'
import  Portfolio  from '@/components/Portfolio'
import Image from "next/image";
import ISeeWhatYouDidThereImg from "../../../public/is_see_what_you_did_there_meme-ezgif.com-jpg-to-webp-converter.webp";

export default function PortfolioPage() {
    const [isTokenValid, setIsTokenValid] = useState(false);
    const [isAwaitingValidation, setIsAwaitingValidation] = useState(true);
    const searchParams = useSearchParams();
    const token = searchParams.get('token');
    
    useEffect(() => {
        validateToken(token)
            .then((response) => {
                setIsTokenValid(response);
                setIsAwaitingValidation(false);
            })
            .catch(error => {
                console.log(error);
                setIsAwaitingValidation(false);
            })
    })

    if (isTokenValid && !isAwaitingValidation) {
        return (
            <Portfolio></Portfolio> 
        );
    } else if (!isTokenValid && !isAwaitingValidation) {
        return (
            <div>
                <h1 style={{display: 'flex', justifyContent: 'center'}}>You little rebel</h1>
                <h2 style={{display: 'flex', justifyContent: 'center'}}>I like you, trying to find vulnerabilities in my site...</h2>
                <div style={{display: 'flex', justifyContent: 'center', maxWidth: '50%', margin: '0 auto', paddingTop: '20px'}}>
                    <Image src={ISeeWhatYouDidThereImg} layout="responsive" alt="I see what you did there meme"/>  
                </div>     
            </div>
        );
    } else {
        return (
            <div></div>
        );
    }
}