import React, { useContext } from 'react'
import { DataContext } from '../App'
import Style from './index.css'
import { deepClone } from '../../service/utils'
const defaultItem = {
  rect: {
    type: 'rect',
    attr: {
      x: 10,
      y: 10,
      width: 100,
      height: 100,
      rx: 10,
      ry: 10,
      strokeWidth: 1,
      stroke: '#000',
      fill:"transparent"
    },
    isSelect: true
  },
  circle: {
    type: 'circle',
    attr: {
      cx: 200,
      cy: 200,
      r: 50,
      strokeWidth: 1,
      stroke: '#000',
      fill:"transparent"
    },
    isSelect: true
  },
  ellipse: {
    type: 'ellipse',
    attr: {
      cx: 200,
      cy: 200,
      rx: 50,
      ry: 25,
      strokeWidth: 1,
      stroke: '#000',
      fill:"transparent"
    },
    isSelect: true
  },
}
export default function () {
  const { list, setList } = useContext(DataContext);
  function addOne(type) {
    const oldList = list.map(item => {
      item.isSelect = false
      return item
    })
    let newItem = {}
    deepClone(newItem, defaultItem[type])

    if (type === 'rect') {
      newItem.attr.x = Math.floor(Math.random() * 500)
      newItem.attr.y = Math.floor(Math.random() * 500)
    } else if (type === 'circle') {
      newItem.attr.cx = Math.floor(Math.random() * 500)
      newItem.attr.cy = Math.floor(Math.random() * 500)
    } else if (type === 'ellipse') {
      newItem.attr.cx = Math.floor(Math.random() * 500)
      newItem.attr.cy = Math.floor(Math.random() * 500)
    }
  
    setList([
      ...oldList,
      newItem
    ])
  }
  function clear () {
    setList([])
  }
  return (
    <div className={Style.container}>
      <div className="title">添加</div>
      <button onClick={() => addOne('rect')}>矩形</button>
      <button onClick={() => addOne('circle')}>圆形</button>
      <button onClick={() => addOne('ellipse')}>椭圆</button>
      <button onClick={() => clear()}>清空</button>
    </div>
  )
}