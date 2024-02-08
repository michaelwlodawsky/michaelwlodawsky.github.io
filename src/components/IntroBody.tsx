'use client'

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import styles from '../app/page.module.css'
import { useSearchParams } from 'next/navigation'
import { validateToken } from "../service/validateToken";
import { anonAuth } from "../service/auth";
import { gsap } from "gsap";
import GithubIcon from "../../public/Github.png";
import LinkedinIcon from "../../public/Linkedin.png";
import Image from 'next/image'

export default function IntroBody() {
    const [isCursorVisible, setCursorIsVisible] = useState(true)
    const [isTokenValid, setTokenValid] = useState(false)
    const [awaitingValidation, setAwaitingValidation] = useState(true)
    const [isButtonHovering, setButtonHovering] = useState(false)
    
    const searchParams = useSearchParams()
    const token = searchParams.get('token')
    const root = useRef(null)

    const onMouseEnter = () => {setButtonHovering(true)}
    const onMouseExit = () => {setButtonHovering(false)}

    useEffect(() => {
        const timer = setInterval(() => {
            setCursorIsVisible((prevVis) => !prevVis)
        }, 500)

        return () => {
            clearInterval(timer)
        }
    }, [])

    // Validate token, if available, for portfolio access and
    // sign-in anonymously for firebase storage access.
    useEffect(() => {
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

    useEffect(() => {
        let ctx = gsap.context(() => {
            if (!awaitingValidation) {
                if (isButtonHovering) { 
                    gsap.to(".circle", {width: '100%', height: '50px', borderRadius: '50px', xPercent: 0})
                } else {
                    gsap.to(".circle", {width: '50px', height: '50px', borderRadius: '50%', xPercent: 0})
                }  
            }
        }, root)

        return () => {
            ctx.kill()
        }
    }, [isButtonHovering])

    useEffect(() => {
        let animated = false
        let ctx = gsap.context(() => {
            gsap.set(".actionButton", {yPercent: 30, opacity: 0})
            if (!awaitingValidation && !animated) {
                gsap.to(".actionButton", {yPercent: 0, opacity: 1, duration: 1.5, ease: 'power2.out'})
                animated = true
            }
        }, root)

        return () => {
            ctx.kill()
        }
    }, [awaitingValidation])

    return (
        <div>
            <div className={styles.introText} ref={root}>
                <p className={styles.introText}>“If you&apos;re not making someone else&apos;s life better, you&apos;re wasting your time…{isCursorVisible ? "|" : " "}” — Will Smith</p>
                <p className={styles.introText}>Hi, my name is Michael Wlodawsky and I&apos;m a software engineer with a passion for building user-facing applications. I love learning new technologies and applying them to user-facing products; I have worked on products that see millions of users a week and I can say building at that scale is one of the most thrilling aspects of being a developer.</p>
                <p className={styles.introText}>I originally did systems engineering, moved to iOS engineering, and now do full-stack mobile product development. On the side I&apos;ve been learning full-stack web development, hence the website, with a focus on design and security. I&apos;ve work primarily in Swift/SwiftUI for iOS development, Python/Python Flask for backend dev and Typescript/React/NextJS for web development.</p>
                <p className={styles.introText}>If you&apos;re here from my resume or job application, please feel free to take a look at my work experience and personal portfolio! Otherwise, please enjoy the pretty site-s {";)"}</p>
                
                <div style={{height: '50px', width: '100%', justifyContent: 'center'}}>
                { !awaitingValidation &&
                    <div style={{display: 'flex', justifyContent: 'center', width: '255px'}} className="actionButton">
                        <Link onMouseEnter={onMouseEnter} onMouseLeave={onMouseExit} style={{color: "white", padding: '10px'}} href={isTokenValid ? '/portfolio/?token=' + token : '/game'}>
                            <span style={{zIndex: '1', fontWeight: 'bolder'}}>Would you like to know more?</span>
                            <div className="circle" style={{ position: 'absolute', width: '50px', height: '50px', backgroundColor: 'lightBlue', transform: 'translate(-25%, -75%)', borderRadius: '50%', opacity: '50%', zIndex: '-1'}}/>
                        </Link>
                    </div>
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
