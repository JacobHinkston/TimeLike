import React, { Component } from 'react'
import './About.sass'
export default class About extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render() {
        return (
            <article className="about-component">
                <section className='main-information'>
                    <section className='about-info'>
                        <h3>
                            What is 'Time-Like'?:
                        </h3>
                        <p>
                            TimeLike is an app I created that attempts to solve the issue most people on instagram encounter when looking to promote or showoff something, only to find out no one liked it. Why could this be? <br/> The active instagramers crisis can be described as follows: Due to the rapid growth of social media, everyone and they mother is using instagram, because of this, people are recieveing lots of followers all the time, and who can keep up?! There are so many confounding variables as to why any said person may not recieve even half of the likes that they should get (within reason). Some of these variables include:
                        </p> 
                        <ul>
                            <li>People busy with work durring the day, and/or other activities.</li>
                            <li>Inactive accounts.(dont see your post)</li>
                            <li>Some of your followers might have a lot of followers and cant keep up.</li>
                            <li>etc etc...</li>
                        </ul>
                        <p>
                            This is solved by analyzing data from instagram to find at what time of the day, to post, based on how many likes you recieved at any said time.
                            Unfortunately, without advanced buisness tools, I cannot account for how many followers a person had at any time durring their instagram account's growth,so there is a slight skew; Instagrams api only allows peeople without buisness tools to pull the 20 most recent post - any data analyzed is recent.
                        </p>
                    </section>
                    <section className='about-info'>
                        <h3>
                            How do you use Time-Like?
                        </h3>
                        <p>
                            First, sign in above by hitting the 'Login Button', then it will do the rest! Sign into instagram through instagrams secure login page. Once authenticated, it will redirect you to the app and it will being doing everything for you :)
                        </p>
                    </section>
                </section>
                <section>

                </section>
            </article>
        )
    }
}