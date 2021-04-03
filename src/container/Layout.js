import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Social from '../components/Social'

const Layout = ({children}) => {
    return (
       <>
       <Navbar/>
       {children}
       <Social/>
       <Footer/>
       </>
    )
}

export default Layout
