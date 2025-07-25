'use client';
import React from 'react'
import Script from 'next/script';

const ContactUs = () => {
    return (
        <div>
            <Script async src="https://tally.so/widgets/embed.js"></Script>
            <a href="#tally-open=3XP5j4&tally-layout=modal&tally-width=600&tally-auto-close=15000">Click me</a>
        </div>
    )
}

export default ContactUs