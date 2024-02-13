'use client'

import Link from "next/link";
import React from "react";
import styles from '../app/page.module.css'
import { useSearchParams } from 'next/navigation'
import { validateToken } from "../service/validateToken";
import { anonAuth } from "../service/auth";
import GithubIcon from "../../public/logos/Github.png";
import LinkedinIcon from "../../public/logos/Linkedin.png";
import Image from 'next/image'
import { AnimatedLink } from "./AnimatedLink";

export default function IntroBody() {
    const [isCursorVisible, setCursorIsVisible] = React.useState(true)
    const [isTokenValid, setTokenValid] = React.useState(false)
    const [awaitingValidation, setAwaitingValidation] = React.useState(true)
    
    const searchParams = useSearchParams()
    const token = searchParams.get('token')
    
    const root = React.useRef(null);

    // Cursor animation
    React.useEffect(() => {
        const timer = setInterval(() => {
            setCursorIsVisible((prevVis) => !prevVis)
        }, 500)

        return () => {
            clearInterval(timer)
        }
    }, [])

    // Validate token, if available, for portfolio access and
    // sign-in anonymously for firebase storage access.
    React.useEffect(() => {
        const tokenValidation = async () => {
            return await validateToken(token);
        }

        const anonymousAuth = async () => {
            return await anonAuth();
        }

        Promise.all([tokenValidation(), anonymousAuth()])
            .then(([tokenResult, authResult]) => {
                setTokenValid(tokenResult && authResult.user.isAnonymous);
                setAwaitingValidation(false);
            })
            .catch(error => {
                console.log(error);
                setAwaitingValidation(false);
            })
    // eslint-disable-next-line
    }, [])

    return (
        <div>
            <div className={styles.introText} ref={root}>
                <p className={styles.introText}>“If you&apos;re not making someone else&apos;s life better, you&apos;re wasting your time…{isCursorVisible ? "|" : " "}” — Will Smith</p>
                <p className={styles.introText}>Hi, my name is Michael Wlodawsky and I&apos;m a software engineer with a passion for building user-facing applications. I love learning new technologies and applying them to user-facing products; I have worked on products that see millions of users a week and I can say building at that scale is one of the most thrilling aspects of being a developer.</p>
                <p className={styles.introText}>I originally did systems engineering, moved to iOS engineering, and now do full-stack mobile product development. On the side I&apos;ve been learning full-stack web development, hence the website, with a focus on design and security. I&apos;ve work primarily in Swift/SwiftUI for iOS development, Python/Python Flask for backend dev and Typescript/React/NextJS for web development.</p>
                <p className={styles.introText}>If you&apos;re here from my resume or job application, please feel free to take a look at my work experience and personal portfolio! Otherwise, please enjoy the pretty site-s {";)"}</p>
                
                <div style={{height: '50px', width: '100%', justifyContent: 'center'}}>
                    { !awaitingValidation &&
                        <AnimatedLink hrefString={isTokenValid ? '/portfolio/work/?token=' + token : '/game'} isActive={!awaitingValidation} root={root}></AnimatedLink>
                    }
                </div>

                <div style={{display: 'flex', justifyContent: 'center', gap: '10px', paddingTop: '20px'}}>
                    <Link rel="noopener noreferrer" target="_blank" href={'https://github.com/michaelwlodawsky'}>
                        <Image className={styles.socialIcon} src={GithubIcon} alt='Michael Wlodawsky github link'/>
                    </Link>
                    <Link rel="noopener noreferrer" target="_blank" href={'https://www.linkedin.com/in/michael-wlodawsky/'}>
                        <Image className={styles.socialIcon} src={LinkedinIcon} alt='Michael Wlodawsky linkedin link'/>
                    </Link>
                </div>
            </div> 
        </div>

    )
}
