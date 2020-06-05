import React, { useContext } from 'react'
import { DataContext } from '../App'
export default function Canvas() {
  const { list, setList } = useContext(DataContext);
  console.log(list)
  function getItems() {
    return list.map((item, index) => {
      switch (item.type) {
        case 'rect':
          return (
            <rect
              {...item.attr}
              key={index}
              data-index={index}
              onClick={changeTarget}
            />)
        case 'circle':
          return (
            <circle
              {...item.attr}
              key={index}
              data-index={index}
              onClick={changeTarget}
            />)
        case 'ellipse':
          return (
            <ellipse
              {...item.attr}
              key={index}
              data-index={index}
              onClick={changeTarget}
            />)
      }
    })
  }
  function changeTarget(e) {
    const isSelectIndex = e.currentTarget.getAttribute('data-index')
    list.map((item, index) => {
      if (item.isSelect) item.isSelect = false
      if (index === isSelectIndex - 0) item.isSelect = true
      return item
    })
    setList([...list])
  }
  return (
    <svg width="100%" height="100%" version="1.1">
      {
        getItems()
      }
    </svg>
  )
}