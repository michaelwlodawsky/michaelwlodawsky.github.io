'use client'

import { useState, useEffect } from "react";
import styles from '../app/page.module.css'

export default function IntroBody() {
    const smiley = ";)"
    const cursor = "|"
    const space = " "

    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        const timer = setInterval(() => {
            setIsVisible((prevVis) => !prevVis)
        }, 1000)

        return () => {
            clearInterval(timer)
        }
    }, [])

    return (
        <div className={styles.introText}>
            <p className={styles.introText}>“If you’re not making someone else’s life better, you’re wasting your time…{isVisible ? cursor : space}” — Will Smith</p>
            <p className={styles.introText}>Hi, my name is Michael Wlodawsky and I’m a software engineer with a passion for building user-facing applications. I love learning new technologies and applying them to user-facing products; I have worked on products that see millions of users a week and I can say building at that scale is one of the most thrilling aspects of being a developer.</p>
            <p className={styles.introText}>I originally did systems engineering, moved to iOS engineering, and now do full-stack mobile product development. On the side I’ve been learning full-stack web development, hence the website, with a focuses on design and security. I’ve work primarily in Swift/SwiftUI for iOS development, Python/Python Flask for backend dev and Typescript/React/NextJS for web development.</p>
            <p className={styles.introText}>If you’re here from my resume or job application, please feel free to take a look at my work experience and personal portfolio! Otherwise, please enjoy the pretty site-s {smiley}</p>
        </div>
    )
}