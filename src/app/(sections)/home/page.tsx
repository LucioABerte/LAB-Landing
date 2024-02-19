import React from 'react'
import HeroSection from './HeroSection'
import ServiceSection from '../services/page'
import VideoPlayerSection from '../about/page'
import TestimonialSection from '../testimonials/page'
import TeamSection from '../team/page'
import NewsletterSection from '../download/page'

const HomePage = () => {
  return (
    <>
        <HeroSection/>
        <ServiceSection/>
        <VideoPlayerSection/>
        <TestimonialSection/>
        <TeamSection/>
        <NewsletterSection/>
    </>
  )
}

export default HomePage