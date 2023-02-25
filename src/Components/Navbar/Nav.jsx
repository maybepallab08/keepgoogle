import React, { useEffect } from 'react'
import classes from './Nav.module.css'
import Refresh from './../../assets/refreshicon.svg'
import GoogleApps from './../../assets/googleapps.svg'
import Settings from './../../assets/settingsicon.svg'
import UserIcon from './../../assets/UserIcon.png'
import Hamburger from './../../assets/hamburger.svg'
import ListIcon from './../../assets/listicon.svg'
import GridIcon from './../../assets/gridicon.svg'
import KeepLogo from './../../assets/KeepLogo.png'
import Searchbar from '../../UI/Searchbar'
import { useState } from 'react'
import SettingsDropdown from './SettingsDropdown'
import { useContext } from 'react'
import ListContext from '../../store/listviewContext'
import AppsDropdown from './AppsDropdown'

const Nav = props => {
  const viewCtx = useContext(ListContext)
  const [settingsState, setSettingsState] = useState(false);
  const[appsState,setAppsState]=useState(false)

  const settingsDropdown = () => {
    if (settingsState == true) {
      setSettingsState(false)
    } else {
      setSettingsState(true)
    }
  }
  const appsDropdown=()=>{
    if (appsState == true) {
      setAppsState(false)
    } else {
      setAppsState(true)
    }
  }


  return (
    <div className={classes.Nav}>
      <div className={classes.navgroup}>
        <img src={Hamburger} className={classes.icons} />
        <img src={KeepLogo} className={classes.keepicon} />
        <div className={classes.brandname}>Keep</div>
      </div>
      <div className={classes.navsearch}>
        <Searchbar />
      </div>
      <div className={classes.navright}>
        <img src={Refresh} className={classes.icons} />
        <img
          onClick={viewCtx.setViewtype}
          src={ListIcon}
          className={classes.icons}
        />
        <img
          onClick={settingsDropdown}
          src={Settings}
          className={classes.icons}
        />
        <SettingsDropdown state={settingsState} />
      </div>
      <div className={classes.navright}>
        <img src={GoogleApps} onClick={appsDropdown} className={classes.appicon} />
        <AppsDropdown state={appsState}/>
        <img src={UserIcon} className={classes.usericon} />
      </div>
    </div>
  )
}
export default Nav
