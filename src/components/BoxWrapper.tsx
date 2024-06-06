import { FC, ReactNode } from "react"
import toast from 'react-hot-toast';

interface BoxWrapperProps {
    heading: string
    children: ReactNode
}
export const BoxWrapper: FC<BoxWrapperProps> = ({
    heading,
    children
}: BoxWrapperProps) => {
    return (
        <div className="bg-white p-4 space-y-4 lg:space-y-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
                <h2 className="text-gray-700 text-base font-semibold">{heading}</h2>

                <button
                    className="group w-8 h-8 inline-flex items-center justify-center focus:outline-none"
                    onClick={() => toast('Info Icon Clicked!')}
                >
                    <span className="sr-only">Info Icon</span>

                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 group-hover:text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>
            </div>

            {children}
        </div> 
    )
}