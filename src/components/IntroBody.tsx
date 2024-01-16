'use client'

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import styles from '../app/page.module.css'
import { useSearchParams } from 'next/navigation'
import { validateToken } from "../service/validateToken";
import { gsap } from "gsap";

export default function IntroBody() {
    const [isCursorVisible, setCursorIsVisible] = useState(true)
    const [isTokenValid, setTokenValid] = useState(false)
    const [awaitingValidation, setAwaitingValidation] = useState(true)
    
    const searchParams = useSearchParams()
    const token = searchParams.get('token')
    const root = useRef(null)

    useEffect(() => {
        const timer = setInterval(() => {
            setCursorIsVisible((prevVis) => !prevVis)
        }, 500)

        return () => {
            clearInterval(timer)
        }
    }, [])

    useEffect(() => {
        validateToken(
            token, 
            (isValid: boolean) => {
                setTokenValid(isValid)
                setAwaitingValidation(false)
            },
            (error: Error) => {
                setAwaitingValidation(false)
            }
        )
    // eslint-disable-next-line
    }, [])

    useEffect(() => {
        let ctx = gsap.context(() => {
            if (!awaitingValidation) {
                
            // TODO: Add animations to the button
                
            }
        }, root)

        return () => {
            ctx.kill()
        }
    })

    return (
        <div className={styles.introText} ref={root}>
            <p className={styles.introText}>“If you&apos;re not making someone else&apos;s life better, you&apos;re wasting your time…{isCursorVisible ? "|" : " "}” — Will Smith</p>
            <p className={styles.introText}>Hi, my name is Michael Wlodawsky and I&apos;m a software engineer with a passion for building user-facing applications. I love learning new technologies and applying them to user-facing products; I have worked on products that see millions of users a week and I can say building at that scale is one of the most thrilling aspects of being a developer.</p>
            <p className={styles.introText}>I originally did systems engineering, moved to iOS engineering, and now do full-stack mobile product development. On the side I&apos;ve been learning full-stack web development, hence the website, with a focus on design and security. I&apos;ve work primarily in Swift/SwiftUI for iOS development, Python/Python Flask for backend dev and Typescript/React/NextJS for web development.</p>
            <p className={styles.introText}>If you&apos;re here from my resume or job application, please feel free to take a look at my work experience and personal portfolio! Otherwise, please enjoy the pretty site-s {";)"}</p>
            { !awaitingValidation &&
                <div style={{display: 'flex', justifyContent: 'center'}} className="actionButton">
                    <Link style={{textDecoration: 'underline', backgroundColor: 'white', color: 'black', borderRadius: '10px', padding: '10px'}} href={isTokenValid ? '/portfolio/?token=' + token : '/game'}>
                        Would you like to know more?
                    </Link>
                </div>
                
            }
        </div>
    )
}
