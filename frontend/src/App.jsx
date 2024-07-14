import React from 'react'
import Appbar from './components/Appbar'
import Form from './components/Form'
import Posts from './components/Posts'

const App = () => {
  return (
    <div className='p-5'>
      <Appbar/>
      <div className='flex justify-between m-4'>
        <Posts/>
        <Form/>
      </div>
    </div>
  )
}

export default App
