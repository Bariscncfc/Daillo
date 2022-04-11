import React from 'react'
import { HeroBg, HeroContainer, VideoBg } from './HeroElements'
import Teaser from '../../videos/Teaser.mp4'

const Hero = () => {
  return (
    <div>
       <HeroContainer id="home">
           <HeroBg>
               <VideoBg autoPlay loop muted src={Teaser} type='video/mp4' />
           </HeroBg>
       </HeroContainer> 
    </div>
  )
}

export default Hero