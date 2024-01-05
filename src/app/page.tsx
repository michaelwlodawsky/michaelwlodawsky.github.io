import Image from 'next/image'
import styles from './page.module.css'


import IntroBody from '../components/IntroBody'

/**
 * TODOs:
 * - Add image of my face to the bottom of the screen
 * - Below my face I want links to all of my sites with their respective icons: GitHub, LinkedIn
 * - I want a button at the bottom with something like "Explore more" (maybe something like the starship troopers would you like to know more) and if they have the key 
 * from the tiny url attached to a resume or application they will be taken to a page on the site where it lists my explicit info on my resume
 *  as well as supplements (screenshots in app of shit I made + links to other projects).
 * Otherwise, they will be taken to something similar to this site's space mode: https://kaisermann.me/ but I want it to cycle through landscaping sites: 
 * maybe something like driving on route 66, flying through space, etc
 * - Portfolio and work experience page should have my personal contact info at the top
 * - I want my background to be dynamic with stars flying around that react to the cursor movement and placement
 * 
 * 
 */

export default function Home() {
  
  return (
    <main className={styles.main}>
      <IntroBody></IntroBody>
    </main>
  )
}
