import { Link } from "react-router-dom";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
    return (
        <footer className="">
            <div className="py-20 bg-primary text-white">
                <div className="flex justify-center mb-10">
                    <img src="CodSparkFooterLogo.png" alt="" width={300} />
                </div>
                <div className="flex flex-col gap-10 px-5 lg:grid lg:grid-cols-5 container lg:mx-auto gap-10">
                    <div className="col-span-2 text-justify lg:mr-10">
                        <p><span className="text-accent font-medium">CodSpark</span> is a technology company specializing in web development, app development, and software solutions. We are committed to building innovative digital products that empower businesses and drive technological advancement. With a passion for coding and problem-solving, we strive to transform ideas into impactful software solutions.</p>
                    </div>
                    <div>
                        <h1 className="font-bold text-lg">QUICK LINKS</h1>
                        <div className="h-1 w-10 bg-accent my-2"></div>
                        <div className="flex flex-col gap-2">
                            <Link to="/" className="hover:text-accent active:font-bold transitation-all">Home</Link>
                            <Link to="/about" className="hover:text-accent active:font-bold transitation-all">About Us</Link>
                            <Link to="/services" className="hover:text-accent active:font-bold transitation-all">Services</Link>
                            <Link to="/internships" className="hover:text-accent active:font-bold transitation-all">Internships</Link>
                        </div>
                    </div>
                    <div>
                        <h1 className="font-bold text-lg">HELP & SUPPORT</h1>
                        <div className="h-1 w-10 bg-accent my-2"></div>
                        <div>
                            <a href="https://forms.gle/giCYZqAttDrjTQxCA">Hire Us</a>
                        </div>
                    </div>
                    <div>
                        <h1 className="font-bold text-lg">CONTACT US</h1>
                        <div className="h-1 w-10 bg-accent my-2"></div>
                        <p className="flex items-center">team@codspark.in</p>
                        Kerala - India
                    </div>
                </div>
                <div className="container mx-auto flex flex-col justify-center items-center mt-10">
                    <h1 className="text-2xl font bold">Follow Us</h1>
                    <div className="h-1 w-10 bg-accent my-2"></div>
                    <div className="p-5 flex gap-5">
                        <a href="#" className="p-3 rounded-full bg-accent"><Linkedin size={35} /></a>
                        <a href="#" className="p-3 rounded-full bg-accent"><Twitter size={35} /></a>
                        <a href="#" className="p-3 rounded-full bg-accent"><Instagram size={35} /></a>
                        <a href="#" className="p-3 rounded-full bg-accent"><Github size={35} /></a>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="text-center bg-primary/90 py-4 text-white text-sm">
                Copyrights © 2025 <span className="text-accent">CodSpark</span> | All Rights Reserved
            </div>
        </footer>
    );
};

export default Footer;
