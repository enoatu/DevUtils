import { useState, useEffect, useRef } from 'react'
import Layout from '@c/Layout'

export default function CreateImage (props) {
  const [isShow, setIsShow] = useState(false)
  return (
    <div>
      <button onClick={() => setIsShow(!isShow)}>Extra Options</button>
      {isShow && (
        <div>
          {props.children}
        </div>
      )}
    </div>
  )
}
