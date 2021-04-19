import React from 'react'
import Card from './Card'
function Home() {
    return (
        <div className="bod">
        <video style={{marginInline:"-20px"}} src="/video-1.mp4" autoPlay loop muted/>
        <div  className='container'>
            
            <h1>ADVENTURE AWAITS</h1>
            <h3>What are you waiting for ?</h3>
            <div className="hero-btns">
                <button type="button" style={{margin:"6px"}} className="btn btn-outline-white">
                    Get Started
                </button>
                <button type="button" style={{margin:"6px"}} className="btn btn-white">
                    watch trailer
                </button>

            </div>
            </div>
            <Card/>
        </div>
        
    )
}

export default Home
