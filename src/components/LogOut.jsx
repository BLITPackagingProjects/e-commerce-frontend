import React from 'react'

const LogOut = (props) => {

    localStorage.clear();
    props.history.replace('/home')
  return (
    null
  )
}

export default LogOut
