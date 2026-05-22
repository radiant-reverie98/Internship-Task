import React from 'react'
import ProfileHeader from '../components/profile/ProfileHeader'
import Navbar from '../components/landing-page/Navbar'
import ProfileSettingsCard from '../components/profile/ProfileSettingsCard'
import ProfileActions from '../components/profile/ProfileActions'
import Footer from '../components/landing-page/Footer'

function Profile() {
  return (
    <div>
        <Navbar/>
      <ProfileHeader/>
      <ProfileSettingsCard/>
      <ProfileActions/>
      <Footer/>
    </div>
  )
}

export default Profile
