import React from 'react'
import classes from './Archive.module.css'
const Archive = () => {
  return (
    <div className={classes.archive}>
      <div className={classes.iconholder}> <svg className={classes.icon} xmlns="http://www.w3.org/2000/svg" height="90" viewBox="0 96 960 960" width="90"><path fill="#363739" d="M180 936q-24 0-42-18t-18-42V353q0-15 3-25.5t11-19.5l56-76q8-9 18.5-12.5t24.886-3.5h493.228Q741 216 751 219.5t18 12.5l57 76q8 9 11 19.5t3 25.5v523q0 24-18 42t-42 18H180Zm17-614h565l-36.409-46H233l-36 46Zm-17 60v494h600V382H180Zm300 404 156-156-40-40-86 86V475h-60v201l-86-86-40 40 156 156Zm-300 90h600-600Z"/></svg></div>
      <div className={classes.caption}>Your archived notes appear here</div>
    </div>
  )
}

export default Archive

