'use client';
import React from 'react'
import Script from 'next/script';

const ContactUsEmbedded = () => {
    return (
        <div className='form'>
            <>
                <iframe data-tally-src="https://tally.so/embed/3XP5j4?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                    loading="lazy" width="100%" height="824" title="Contact form"></iframe>

                <Script
                    id="tally-js"
                    src="https://tally.so/widgets/embed.js"
                    onLoad={() => {
                        Tally.loadEmbeds();
                    }}
                />
            </>
        </div>
    )
}

export default ContactUsEmbedded
