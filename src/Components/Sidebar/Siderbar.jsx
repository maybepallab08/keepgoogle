import React, { useState } from 'react'
import classes from './Siderbar.module.css'
import Bulb from './../../assets/bulb.svg'
import Archive from './../../assets/archive.svg'
import Trash from './../../assets/trash.svg'
import { NavLink } from 'react-router-dom'


const Siderbar = () => {
  return (
    <div className={classes.sidebar}>
      <div className={classes.wrapper}>
        <NavLink
          to="/notes"
          className={(isActive) =>
            isActive ? classes.active:classes.inactive
          }
        >
          <img className={classes.sidebarIcons} src={Bulb} />
        </NavLink>
      </div>
      <div className={classes.wrapper}>
        <NavLink
          to="/archive"
          className={(isActive) =>
            isActive ? classes.active:classes.inactive
          }
        >
          <img className={classes.sidebarIcons} src={Archive} />
        </NavLink>
      </div>
      <div className={classes.wrapper}>
        <NavLink
          to="/trash"
          className={(isActive) =>
            isActive ? classes.active:classes.inactive
          }
        >
          <img className={classes.sidebarIcons} src={Trash} />
        </NavLink>
      </div>
    </div>
  )
}

export default Siderbar
