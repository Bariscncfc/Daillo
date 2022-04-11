import React, { useState } from 'react'
import { ArrowForward, ArrowRight, HeroBg, HeroBtnWrapper, HeroContainer, HeroContent, HeroH1, HeroP, VideoBg } from './HeroElements'
import Teaser from '../../videos/Teaser.mp4'
import { Button } from '../Button';

const Hero = () => {

    const [hover,setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

  return (
    <div>
       <HeroContainer id="home">
           <HeroBg>
               <VideoBg autoPlay loop muted src={Teaser} type='video/mp4' />
           </HeroBg>
           <HeroContent>
               <HeroH1>GET A DAILY ENGLISH STORY</HeroH1>
               <HeroP>Subscribe to the application by e-mail</HeroP>
               <HeroBtnWrapper>
                   <Button onMouseEnter={onHover} onMouseLeave={onHover} to="/">Subscribe {hover ? <ArrowForward /> : <ArrowRight />}</Button>
               </HeroBtnWrapper>
           </HeroContent>
       </HeroContainer> 
    </div>
  )
}

export default Hero