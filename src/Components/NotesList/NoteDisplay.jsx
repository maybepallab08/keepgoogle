import React, { useEffect, useState } from 'react'
import './NoteDisplay.css'
import ListContext from '../../store/listviewContext'
import { useContext } from 'react'
const NoteDisplay = (props) => {
  const viewCtx = useContext(ListContext)
  const [className, setClassName] = useState('viewGrid')
  useEffect(() => {
    if (viewCtx.viewType == false) {
      setClassName('viewList')
    } else {
      setClassName('viewGrid')
    }
  },[viewCtx.viewType])

return(
    <div className={className}>
        {props.note}
    </div>
)
}
export default NoteDisplay
