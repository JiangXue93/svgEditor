import React, { useState } from 'react'
import Layout from './Layout'
const dataDefault = {
  list: [],
  select: {}
}

export const DataContext = React.createContext(dataDefault)

export default function App() {
  const [list, setList] = useState(dataDefault.list)
  return (
    <DataContext.Provider value={{list, setList}}>
      <Layout/>
    </DataContext.Provider>
  )
}