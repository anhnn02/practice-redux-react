import React from 'react'
import PropTypes from 'prop-types'
import Header from '../../components/client/Header'
import Footer from '../../components/client/Footer'
import OurTeam from '../../components/client/About/OurTeam'
import Banner from '../../components/client/About/Banner'
import Intro from '../../components/client/About/Intro'

const AboutPage = () => {
  return (
    <>
      <Banner/>
      <OurTeam/>
      <Intro/>
    </>
  )
}

AboutPage.propTypes = {}

export default AboutPage
