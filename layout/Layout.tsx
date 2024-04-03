
import React from 'react'
import Header from '@/components/Header'

const Layout  = ({children}: {children:React.ReactNode}) => {
  return (
    <React.Fragment>
        <Header/>
        <main>{children}</main>
    </React.Fragment>
  )
}

export default Layout