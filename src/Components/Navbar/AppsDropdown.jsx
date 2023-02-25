import React from 'react'
import classes from './AppsDropdown.module.css'
import { useRef } from 'react'
import { useState, useEffect } from 'react'
import CalendarImage from './../../googleicons/calendarimage.png'
import KeepImage from './../../googleicons/keepimage.png'
import ChatImage from './../../googleicons/chatimage.png'
import DriveImage from './../../googleicons/driveimage.png'
import GmailImage from './../../googleicons/gmailimage.png'
import MapImage from './../../googleicons/mapimage.png'
import MeetImage from './../../googleicons/meetimage.png'
import PodcastsImage from './../../googleicons/podcastsimage.png'
import PhotosImage from './../../googleicons/photosimage.png'
import SearchImage from './../../googleicons/searchimage.png'
import NewsImage from './../../googleicons/newsimage.png'
import ContactImage from './../../googleicons/contactimage.png'
import UserIcon from './../../googleicons/UserIcon.png'

const AppsDropdown = (props) => {
  const appState = props.state
  return (
    <div
      style={{ display: appState ? 'block' : 'none' }}
      className={classes.appsdropdown}
    >
      <div className={classes.imagegroup}>
        <div className={classes.imagecap}>
          <img className={classes.googleicons} src={UserIcon} />
          <span className={classes.caption}>Account</span>
        </div>
        <div className={classes.imagecap}>
          <img className={classes.googleicons} src={SearchImage} />
          <span className={classes.caption}>Search</span>
        </div>
        <div className={classes.imagecap}>
          <img className={classes.googleicons} src={CalendarImage} />
          <span className={classes.caption}>Calendar</span>
        </div>
      </div>
      <div className={classes.imagegroup}>
        <div className={classes.imagecap}>
          <img className={classes.googleicons} src={DriveImage} />
          <span className={classes.caption}>Drive</span>
        </div>
        <div className={classes.imagecap}>
          <img className={classes.googleicons} src={GmailImage} />
          <span className={classes.caption}>Gmail</span>
        </div>
        <div className={classes.imagecap}>
          <img className={classes.googleicons} src={MapImage} />
          <span className={classes.caption}>Maps</span>
        </div>
      </div>
      <div className={classes.imagegroup}>
        <div className={classes.imagecap}>
          <img className={classes.googleicons} src={ContactImage} />
          <span className={classes.caption}>Contacts</span>
        </div>
        <div className={classes.imagecap}>
          <img className={classes.googleicons} src={PhotosImage} />
          <span className={classes.caption}>Photos</span>
        </div>
        <div className={classes.imagecap}>
          <img className={classes.googleicons} src={PodcastsImage} />
          <span className={classes.caption}>Podcasts</span>
        </div>
      </div>
      <div className={classes.imagegroup}>
        <div className={classes.imagecap}>
          <img className={classes.googleicons} src={ChatImage} />
          <span className={classes.caption}>Chat</span>
        </div>
        <div className={classes.imagecap}>
          <img className={classes.googleicons} src={MeetImage} />
          <span className={classes.caption}>Meet</span>
        </div>
        <div className={classes.imagecap}>
          <img className={classes.googleicons} src={NewsImage} />
          <span className={classes.caption}>News</span>
        </div> 
      </div>
    </div>
  )
}
export default AppsDropdown
