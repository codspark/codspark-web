import React from 'react'

function Services() {
    return (
        <div className='bg-gray-100 py-10'>
            <div className='container mx-auto px-6 py-4'>
                <h1 className='text-center text-3xl font-bold text-primary mb-10'>Delivering Premium & Tailored Tech Solutions for Every Client</h1>
                <div className='flex flex-col gap-5 lg:grid grid-cols-3 items-center'>
                    <div className=''>
                        <img src="img1.gif" alt=""  />
                    </div>
                    <div className='col-span-2 text-lg my-10'>
                        <div>
                            <h2 className='text-2xl font-bold'>Why Every Business Needs a Website Today</h2><br />
                            <p>In today’s digital era, a website is no longer optional—it’s essential! No matter the size of your business, having an online presence is crucial for growth and success.<br />
                            <br />
                            A website helps you:<br />
                            ✅ Establish Credibility – Build trust with potential customers.<br />
                            ✅ Enhance Visibility – Reach a wider audience 24/7.<br />
                            ✅ Boost Engagement – Showcase your products, services, and brand story.<br />
                            ✅ Drive Growth – Convert visitors into loyal customers.<br />
                            <br />
                            If your business isn’t online, you’re missing out on endless opportunities! Let’s build your digital presence today. 🚀</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
