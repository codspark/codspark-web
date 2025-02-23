import React from 'react'
import { Button } from '../ui/button'

function ContactToBuildWeb() {
    return (
        <div className='py-10 bg-zinc-100'>
            <div className='container mx-auto px-6 py-4'>
                <h1 className='text-center text-3xl font-bold text-primary '>Ready to Take Your Business Online?</h1>
                <div className='flex items-center'>
                    <div className='text-lg my-10 flex flex-col items-center gap-10'>
                        <div>
                            <p className='text-center'>Want to sell your products or services online? At CodSpark, we specialize in building powerful, user-friendly e-commerce websites that help businesses thrive in the digital world.<br /></p>
                        </div>
                        <div>
                            <a href="https://forms.gle/giCYZqAttDrjTQxCA" target='_blank'><Button>Contact Now</Button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactToBuildWeb
