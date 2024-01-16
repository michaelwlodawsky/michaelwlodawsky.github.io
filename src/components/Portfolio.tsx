import styles from '@/app/page.module.css'
import HorizontalScrollContainer from "@/components/HorizontalScrollContainer";
import Image from 'next/image';
import LyftLogo from '../../public/Lyft_logo-ezgif.com-png-to-webp-converter.webp'
import HorizontalUserScrollContainer from './HorizontalUserScrollContainer';

const skills = [
    'Swift',
    'Git',
    'Python',
    'Typescript/Javascript',
    'HTML',
    'CSS',
    'NextJS',
    'NodeJS',
    'RxSwift/RxJS',
    'gRPC APIs',
    'RESTFUL APIs',
    'SQL',
    'Firebase',
    'Java',
    'C/C++',
    'Grafana',
    'Figma',
    'Mode',
    'Jenkins'
]

export default function Portfolio() {
    return (
        <div>
            <h2 className={styles.portfolioHeader}>My Portfolio</h2>
            <div className={styles.thinDivider}></div>
            <div className={styles.portfolioBodyAll}>
                <p className={styles.portfolioSectionHeader}> <span style={{color: 'lightGreen'}}>Ski</span>lls</p>
            </div>
            <HorizontalScrollContainer text={skills.join(' • ')}></HorizontalScrollContainer>
            <div className={styles.portfolioBodyAll}>
                <p className={styles.portfolioSectionHeader}> <span style={{color: 'orange'}}>Edu</span>cation</p>
                <p className={styles.portfolioBody}>The University of Texas at Austin, Graduated: May 2020</p>
                <p className={styles.portfolioSectionHeader}> <span style={{color: 'purple'}}>Exp</span>erience</p>
                <div style={{padding: '10px'}}>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <div style={{width: '50px', height: 'auto', paddingRight: '10px'}}>
                            <Image src={LyftLogo} layout='responsive' alt="Lyft Logo image" />
                        </div>

                        <h6 style={{display: 'flex', alignItems: 'center'}}> June 2020 - Present </h6>
                        
                    </div>
                    <p style={{fontSize: 'x-small'}}>Tech lead of Lyft Rider App, Senior iOS Full Stack Engineer</p>
                </div>

                
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <p>~ Notable Product Work Spotlight ~</p>
                    <HorizontalUserScrollContainer></HorizontalUserScrollContainer>


                    <p style={{paddingTop: '25px'}}>~ Notable Platform Work Spotlight ~</p>
                    <div style={{paddingTop: '10px'}}>
                        <h5>• Built out SDUI for entire XP</h5>
                        <h5>• Incepted and built refactor of entire Map XP</h5>
                        <h5>• Created north star vision for SDUI</h5>
                    </div>
                    
                </div>


                
            </div>
        </div>  
    )
}