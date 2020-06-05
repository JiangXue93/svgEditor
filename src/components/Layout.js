import React from 'react'
import Style from'./Layout.css'
import Creater from '../components/Creater'
import AttributeChanger from '../components/AttributeChanger'
import Canvas from '../components/Canvas'
export default function Layout() {
  return (
    <div className={Style.layout}>
      <div className="side">
        <Creater />
        <AttributeChanger />
      </div>
      <div className="content">
        <Canvas />
      </div>
    </div>
  )
}