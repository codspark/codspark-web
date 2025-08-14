export default function SubHeader() {
    return (
        <div>
            <div className="hidden lg:block bg-primary text-white text-sm p-1 overflow-hidden whitespace-nowrap">
                <div className="animate-marquee inline-block">
                    <span className="bg-red-700 p-1 rounded-lg text-xs mr-1 animate-pulse">NEW</span>Join Our Exciting Internship Journey and Power Up Your Career!<span className="text-red-500">*</span>
                </div>
            </div>
            <div className="lg:hidden bg-primary text-white text-xs p-1 overflow-hidden whitespace-nowrap">
                <div className="animate-p_marquee inline-block">
                    <span className="bg-red-700 p-1 rounded-lg text-xs mr-1 animate-pulse">NEW</span>Join Our Exciting Internship Journey and Power Up Your Career!<span className="text-red-500">*</span>
                </div>
            </div>
        </div>
    )
}
