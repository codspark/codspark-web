export default function SubHeader() {
    return (
        <div>
            <div className="hidden lg:block bg-primary text-white text-xs p-1 overflow-hidden whitespace-nowrap">
                <div className="animate-marquee inline-block">
                    Join Our Exciting Internship Journey.<span className="text-red-500">*</span>
                </div>
            </div>
            <div className="lg:hidden bg-primary text-white text-xs p-1 overflow-hidden whitespace-nowrap">
                <div className="animate-p_marquee inline-block">
                    Join Our Exciting Internship Journey.<span className="text-red-500">*</span>
                </div>
            </div>
        </div>
    )
}
