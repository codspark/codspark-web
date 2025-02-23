import React from 'react'

function AboutUs() {
    return (
        <div className='container mx-auto flex flex-col justify-between px-6 py-4 text-justify text-lg'>
            <h1 className='text-3xl font-bold text-primary my-5'>About Us</h1>
            <p><b className='text-accent'>CodSpark</b> is a technology company specializing in web development, app development, and software solutions. We are committed to building innovative digital products that empower businesses and drive technological advancement. With a passion for coding and problem-solving, we strive to transform ideas into impactful software solutions.</p>
            <p className='my-5'>At <b className='text-accent'>CodSpark</b>, we believe that practical knowledge is the key to success in the tech industry. That’s why we offer a free internship program, designed to help students and aspiring developers gain hands-on experience by working on live projects and real-world challenges. Through this initiative, we aim to bridge the gap between theory and practice, ensuring that every intern gains the skills and confidence needed to thrive in their careers.</p>
        </div>
    )
}

export default AboutUs
