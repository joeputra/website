import React, { Component } from 'react'
import Header from '../Common/Header'
import { image } from '../components/assets/img/header-bg.jpg'

class Home extends Component {
    render() {
        return (
            <div>
                <Header 
                    title="LOCK DOWN"
                    subtitle="IT'S NICE TO MEET YOU"
                    buttonText="Tell me more"
                    link="/services"
                    showButton={true}
                    image={image}
                
                />
            </div>
        )
    }
}

export default Home