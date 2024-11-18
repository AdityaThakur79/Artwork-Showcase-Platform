import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Hero from '../Components/Hero'
import ShopCategory from '../Components/ShopCategory'
import TrendingArtwork from '../Components/TrendingArtwork'
import ContentWrapper from '../Components/ContentWrapper'
const Homepage = () => {
    return (
        <>
            <ContentWrapper>
                <Hero />
                <ShopCategory />
                <TrendingArtwork />
            </ContentWrapper>

        </>
    )
}

export default Homepage
