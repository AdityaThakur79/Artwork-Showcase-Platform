import React from 'react'
import Header from './Header'
import Footer from './Footer'
const ContentWrapper = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default ContentWrapper
