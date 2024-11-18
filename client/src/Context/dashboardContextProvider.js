import React, { createContext, useContext, useState } from 'react'

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false
}

export const ContextProvider = ({ children }) => {

    const [currentColor, setCurrentColor] = useState('#03C9D7')
    const [currentMode, setCurrentMode] = useState('Light')
    const [activeMenu, setActiveMenu] = useState(true)
    const [isClicked, setIsClicked] = useState(initialState)
    const [screenSize, setScreenSize] = useState(undefined)
    const [theme, setTheme] = useState(false)


    const handleClick = (clicked) => {
        setIsClicked({ ...initialState, [clicked]: true })
    }

    const setMode = async (e) => {

        setCurrentMode(e.target.value)
        localStorage.setItem('themeMode', e.target.value)
        setTheme(false)
        console.log(currentMode)
    }

    const setColor = (mode) => {
        setCurrentColor(mode)
        localStorage.setItem('color', mode)
        setTheme(false)
    }
    return (
        <StateContext.Provider value={{ activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize, currentColor, setCurrentColor, currentMode, setCurrentMode, theme, setTheme, setColor, setMode }}>
            {children}
        </StateContext.Provider>
    )
}
export const useStateContext = () => useContext(StateContext)