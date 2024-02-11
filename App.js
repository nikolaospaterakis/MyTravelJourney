import Navbar from "./components/Navbar.js"
import Hero from "./components/Hero.js"
import React from "react"
import LocationData from "./data.js"

const allLocationDatas = LocationData.map(location => {
    return (
        <Hero 
            key={location.id}
            {...location}
        />
    )
})

export default function App(){
    return (
        <div>
            <Navbar />
            <main>
                {allLocationDatas}
            </main>
        </div>
    )
}