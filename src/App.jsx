
import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import ThemeBtn from './Components/Themebutton'
import Card from './Components/Cards'

function App() {
  const [themeMode,setThememode]=useState("light")

  // ydi hmare pass methord khi or difine hai to usi methord ke name se yha bhi methord bna skte hai(lightTheme) vha bhi yha bhi hai
const lightTheme=()=>{   
setThememode("light")

} 
const darkTheme=()=>{   
setThememode("dark")

} 

// actual change in theme
useEffect(()=>{
  document.querySelector('html').classList.remove("light","dark")
  document.querySelector('html').classList.add(themeMode)
},[themeMode])

  return (

    <>
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                 <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                     <Card/>
                    </div>
                </div>
            </div>
            </ThemeProvider>
 </>
  )
}

export default App
