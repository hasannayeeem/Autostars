import React from 'react';
import PageTitle from '../Shared/PageTitle/PageTitle';
import './About.css'
const About = () => {
    return (
        <div>
            <PageTitle title="About"></PageTitle>
            <h2 className='text-center about-h'>About me</h2>
            <div className='d-flex container containerr align-items-center'>
                <div className='w-50 p-5 me-3 my-5'>
                    <h2 className='about-h'>NaYem HaSan</h2>
                    <p className='text-muted about-des'>Thanks for giving me this golden opportunity to introduce myself before this panel. i’m a front-end web developer i working on web development sector last 2 year and i still trying to improve my skills and i always try to learn as many thing as possible , And My Future Goals is Become an Full Stack Web Developer and inner future i want to work with Ai And I'm Interested in App Development and software engineer en But my next 6month Goals is become Front-End Web Developer And Explore Little Bit Back-End.</p>
                </div>
                <div className='w-50 p-3'>
                    <img className='w-100' src='https://hasannayeeem.github.io/mission-2022/images/hero.png' alt=''></img>
                </div>
            </div>
        </div>
    );
};

export default About;