import React from 'react'

const LogOut = (props) => {

    localStorage.clear();
    props.history.replace('/')
  return (
    null
  )
}

export default LogOut
