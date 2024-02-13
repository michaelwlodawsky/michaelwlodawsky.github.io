import styles from '@/app/page.module.css'
import HorizontalScrollContainer from "@/components/HorizontalScrollContainer";
import LyftLogo from '../../../public/logos/Lyft_logo.webp';
import NokiaLogo from "../../../public/logos/Nokia_logo.png";
import RaytheonLogo from "../../../public/logos/Raytheon_logo.png";

import NearbyDriverDemo from "../../../public/demos/nearby_driver_demo-ezgif.com-gif-to-webp-converter.webp";
import CheckoutScreenDemo from "../../../public/demos/Checkout_screen_demo-ezgif.com-gif-to-webp-converter.webp";
import AdsMVPDemo from '../../../public/demos/standard_Ad_demo-ezgif.com-gif-to-webp-converter.webp';
import DesignRefresh from '../../../public/demos/old_design_to_new_design-ezgif.com-gif-to-webp-converter.webp';
import DemoGif from "../DemoGif";
import { ExpandableItem } from '../ExpandableItemList/ExpandableItem';
import { TitleLogoHeader } from '../TitleLogoHeader';
import { ExpandableItemList } from '../ExpandableItemList/ExpandableItemList';

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

const itemWidth = '350px';

export default function WorkPortfolio() {
    const bulletPointStyle: React.CSSProperties = {
        display: 'flex', flexDirection: 'column', gap: '5px'
    }

    return (
        <div>
            <h2 className={styles.portfolioHeader}>My Portfolio</h2>
            <div className={styles.thinDivider}></div>
            <div className={styles.portfolioBodyAll}>
                <p className={styles.portfolioSectionHeader}> <span style={{color: 'lightGreen'}}>Ski</span>lls</p>
            </div>
            <HorizontalScrollContainer text={skills.join(' • ') + ' '}/>
            <div className={styles.portfolioBodyAll}>
                <p className={styles.portfolioSectionHeader}> <span style={{color: 'orange'}}>Edu</span>cation</p>
                <p className={styles.portfolioBody}>The University of Texas at Austin, May 2020</p>
                <p className={styles.portfolioSectionHeader}> <span style={{color: 'purple'}}>Exp</span>erience</p>

                <TitleLogoHeader image={LyftLogo} imageAlt='Lyft Logo' title='Tech lead of Lyft Rider App, Senior iOS Full Stack Engineer' timeSpan='June 2020 - Present'/>

                <ExpandableItemList>
                    <ExpandableItem title='In-app Ads MVP+'>
                        <DemoGif imageData={AdsMVPDemo} width={itemWidth}></DemoGif>
                    </ExpandableItem>

                    <ExpandableItem title='Full App Redesign'>
                        <DemoGif imageData={DesignRefresh} width={itemWidth}></DemoGif>
                    </ExpandableItem>

                    <ExpandableItem title='Nearby Drivers on Map'>
                        <DemoGif imageData={NearbyDriverDemo} width={itemWidth}></DemoGif>
                    </ExpandableItem>

                    <ExpandableItem title='Checkout Screen'>
                        <DemoGif imageData={CheckoutScreenDemo} width={itemWidth}></DemoGif>
                    </ExpandableItem>

                    <ExpandableItem title='Platform Work'>
                        <div style={bulletPointStyle}>
                            <h5>• Built out Server-driven UI for entire post-request XP</h5>
                            <h5>• Single-handedly refactored the entire Map infrastructure in the post-request XP</h5>
                            <h5>• Migrated our entire UI off of interface builder</h5>
                        </div>
                    </ExpandableItem>  
                </ExpandableItemList>

                <TitleLogoHeader widthPx={75} image={NokiaLogo} imageAlt='Nokia Logo' title='Platform + Design Engineering Intern' timeSpan='Spring 2020'/>
                <ExpandableItemList>
                    <ExpandableItem title='Notable Work'>
                        <div style={bulletPointStyle}>
                            <h5>• Investigated and designed new technical product use cases leveraging 5G mobile edge computing (MEC)</h5>
                            <h5>• Developed serverless AWS asset monitor to be utilized by internal teams that had Auth0 SSO capabilities</h5>
                        </div>
                    </ExpandableItem>
                </ExpandableItemList>

                <TitleLogoHeader widthPx={125} image={RaytheonLogo} imageAlt='Raytheon Logo' title='Software Egnineering Intern' timeSpan='Summer 2017, Summer 2018'/>
                <ExpandableItemList>
                    <ExpandableItem title='Notable Work'>
                        <div style={bulletPointStyle}>
                            <h5>• Received a DoD Secret Clearance</h5>
                            <h5>• Integrated several automated tests with multimillion dollar surveillence and kenetic equipment utilized by the Air Force</h5>
                        </div>
                    </ExpandableItem>
                </ExpandableItemList>

            </div>
        </div>  
    )
}