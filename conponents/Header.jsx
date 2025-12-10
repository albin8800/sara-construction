"use client";



export default function Header() {
    return (
        <header className="fixed top-0 w-full z-50">
            <div className="w-full bg-[#32291F] h-auto px-4 md:px-20 py-2 flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0">

    
    <div className="hidden md:flex items-center gap-2">
        <img src="/icons/location.svg" className="w-4 h-4" alt="location" />
        <p className="text-white md:text-[14px] text-3 font-semibold">
            Joyal House Panangadu Punalur
        </p>
    </div>

   
    <div className="flex items-center w-full justify-between md:justify-end md:w-1/2 gap-6">
        
        <div className="flex items-center gap-2">
            <img src="/icons/mail.svg" className="w-4 h-4" alt="mail" />
            <p className="text-white md:text-[14px] text-[12px] font-semibold">
                saraplr7288@gmail.com
            </p>
        </div>

        <div className="flex items-center gap-2">
            <img src="/icons/call.svg" className="w-4 h-4" alt="call" />
            <p className="text-white md:text-[14px] text-[12px] font-semibold">
                +91 9446327288
            </p>
        </div>

    </div>
</div>


        </header>
    )
}