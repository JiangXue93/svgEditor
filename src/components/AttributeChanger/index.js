import React, { useContext, useState } from 'react'
import Style from './index.css'
import { DataContext } from '../App'
export default function AttributeChanger() {
  const { list, setList } = useContext(DataContext)
  const selectedSvgItem = list.find(item => item.isSelect)
  const _svg = document.getElementsByTagName('svg')

  function getControler(attr) {
    return Object.keys(attr).map(key => {
      let max =  (_svg[0] && _svg[0].scrollWidth) || 500
      if (key === 'strokeWidth') {
        max = 50
      }
      if (key === 'stroke' || key === 'fill') {
        return (
          <div key={key} className="input-item">
            <label>{key}:</label>
            <input type="color" name={key} value={attr[key]} onChange={e => changeAttr(e, key)} max={max} />
            <label className="result">{attr[key]}</label>
          </div>
        )
      }
      return (
        <div key={key} className="input-item">
          <label>{key}:</label>
          <input type="range" name={key} value={attr[key]} onChange={e => changeAttr(e, key)} max={max} />
          <label className="result">{attr[key]}</label>
        </div>
      )
    })
  }
  function changeAttr(e, key) {
    const newList = list.map(item => {
      if (item.isSelect) {
        item.attr[key] = e.target.value
      }
      return item
    })
    setList([...newList])
  }
  return (
    <div className={Style.container}>
      <div className="title">属性</div>
      <div className="type">{selectedSvgItem && selectedSvgItem.type}</div>
      {
        selectedSvgItem && selectedSvgItem.type ? getControler(selectedSvgItem.attr) : (<div className="tip">请添加或者选中元素</div>)
      }
    </div>
  )
}