import React from 'react'
import classes from './SettingsDropdown.module.css'
import listenForOutsideClicks from './../../hooks/listenForOutsideClicks';
import { useRef } from 'react';
import { useState, useEffect } from 'react';


const SettingsDropdown = props => {
    const settingsState=props.state;
  return (
    <div
    style={{display:settingsState?'block':'none'}}
    className={classes.settingsdropdown}>
    <div>Settings</div>
    <div>Send Feedback</div>
    <div>Help</div>
    <div>Shortcuts</div>
  </div>
  )
}


export default SettingsDropdown;
