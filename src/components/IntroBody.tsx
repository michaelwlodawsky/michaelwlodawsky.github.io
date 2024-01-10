'use client'

import Link from "next/link";
import { useState, useEffect } from "react";
import styles from '../app/page.module.css'
import { useSearchParams } from 'next/navigation'

export default function IntroBody() {
    const [isCursorVisible, setCursorIsVisible] = useState(true)
    const [isTokenValid, setTokenValid] = useState(false)
    const [awaitingValidation, setAwaitingValidation] = useState(true)
    
    const searchParams = useSearchParams()
    const token = searchParams.get('token')

    useEffect(() => {
        const timer = setInterval(() => {
            setCursorIsVisible((prevVis) => !prevVis)
        }, 500)

        return () => {
            clearInterval(timer)
        }
    }, [])

    useEffect(() => {
        fetch('https://us-central1-michaelwlodawsky-homepage.cloudfunctions.net/validateToken?token=' + token, {
            method: 'GET',
        })
        .then((response) => { 
            if (!response.ok) {
                throw new Error('HTTP Error ' + response.status)
            }

            return response.json()
        })
        .then((isValid) => {
            setTokenValid(isValid)
            setAwaitingValidation(false)
        })
        .catch((error) => {
            console.error(error)
            setAwaitingValidation(false)
        })
    }, [])

    // TODO: Fix bug where if cursor is on edge of new line it breaks animation
    return (
        <div className={styles.introText}>
            <p className={styles.introText}>“If you're not making someone else's life better, you're wasting your time…{isCursorVisible ? "|" : " "}” — Will Smith</p>
            <p className={styles.introText}>Hi, my name is Michael Wlodawsky and I'm a software engineer with a passion for building user-facing applications. I love learning new technologies and applying them to user-facing products; I have worked on products that see millions of users a week and I can say building at that scale is one of the most thrilling aspects of being a developer.</p>
            <p className={styles.introText}>I originally did systems engineering, moved to iOS engineering, and now do full-stack mobile product development. On the side I've been learning full-stack web development, hence the website, with a focuses on design and security. I've work primarily in Swift/SwiftUI for iOS development, Python/Python Flask for backend dev and Typescript/React/NextJS for web development.</p>
            <p className={styles.introText}>If you're here from my resume or job application, please feel free to take a look at my work experience and personal portfolio! Otherwise, please enjoy the pretty site-s {";)"}</p>
            { !awaitingValidation &&
                <Link href={isTokenValid ? '/portfolio/?token=' + token : '/game'}>
                    Would you like to know more?
                </Link>
            }
        </div>
    )
}
