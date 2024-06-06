import { ComponentProps, FC } from 'react'
import toast from 'react-hot-toast';
import { BreadCrumb } from '../breadcrumb/BreadCrumb'

export interface HeaderProps {
    openSidebar: () => unknown
    breadCrumbPages: ComponentProps<typeof BreadCrumb>['pages']
}

export const Header: FC<HeaderProps> = ({
    openSidebar,
    breadCrumbPages
}: HeaderProps) => {
    return (
        <header className="sticky top-0 lg:relative bg-neutral-800 lg:bg-transparent flex items-center px-3 py-4 lg:px-3 lg:py-2 z-50">
            {/* BreadCrumb for desktop */}
            <div className="hidden lg:block">
                <BreadCrumb 
                    pages={breadCrumbPages} 
                />
            </div>

            <button
                type="button"
                onClick={openSidebar}
                className="w-8 h-8 bg-transparent inline-flex lg:hidden items-center justify-center text-white focus:outline-none"
            >
                <span className="sr-only">Hamburger Menu For Mobile</span>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                    <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                </svg>
            </button>

            {/* Static Hamburger Menu for desktop */}
            <button
                type="button"
                onClick={() => toast('Hamburger Menu Button Clicked!')}
                className="ml-12 w-8 h-8 bg-transparent hidden lg:inline-flex items-center justify-center text-gray-400 focus:outline-none"
            >
                <span className="sr-only">Hamburger Menu For Mobile</span>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                    <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                </svg>
            </button>

            <div className="ml-auto inline-flex items-center gap-1">
                <div className="hidden md:block mr-2">
                    <input
                        type="text"
                        placeholder="Search here"
                        className="w-52 focus:w-64 h-10 bg-transparent border border-gray-400 text-sm placeholder:text-gray-400 text-white lg:text-gray-900 p-4 rounded-md transition-all duration-300 focus:outline-none focus:border-gray-400 lg:focus:border-indigo-500"
                    />
                </div>

                <button
                    className="w-8 h-8 bg-transparent lg:hover:bg-gray-200 inline-flex items-center justify-center text-white lg:text-gray-500 rounded-lg focus:outline-none"
                    onClick={() => toast('User Profile Button Clicked!')}
                >
                    <span className="sr-only">User Icon</span>

                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                    </svg>
                </button>

                <button
                    className="w-8 h-8 bg-transparent lg:hover:bg-gray-200 inline-flex items-center justify-center text-white lg:text-gray-500 rounded-lg focus:outline-none"
                    onClick={() => toast('Setting Button Clicked!')}
                >
                    <span className="sr-only">Cog Icon</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                </button>

                <button
                    className="relative w-8 h-8 bg-transparent lg:hover:bg-gray-200 inline-flex items-center justify-center text-white lg:text-gray-500 rounded-lg focus:outline-none"
                    onClick={() => toast('Bell Button Clicked!')}
                >
                    <span className="sr-only">Bell Icon</span>

                    <span className="absolute -top-0.5 -right-0.5 flex shrink-0">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex items-center justify-center rounded-full shrink-0 h-4 w-4 text-[10px] text-white bg-red-500">
                            9
                        </span>
                    </span>
                    
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                    </svg>
                </button>
            </div>
        </header>
    )
}