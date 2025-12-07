import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

function PageHeader(title) {
    return (
        <div className=' bg-[#F7F8FD] px-10 lg:px-0 bg-[url(/page-header-bg.png)] bg-right bg-no-repeat '>
            <div className='h-[60vh] container mx-auto flex flex-col items-center justify-center text-black gap-5'>
                <h1 className='font-semibold text-3xl lg:text-6xl'>{title.title}</h1>
                <p className='flex items-center gap-2 border rounded-lg border-accent p-2'><Link to='/' className='hover:text-accent transition-all' >Home</Link> <ArrowRight size={15} />{title.title}</p>
            </div>
        </div>
    )
}

export default PageHeader