import { HomeIcon } from '@heroicons/react/20/solid'
import { FC } from 'react'

export interface BreadCrumbProps {
    pages: {
        name: string
        href: string
        current: boolean
    }[]
}

export const BreadCrumb: FC<BreadCrumbProps> = ({
    pages
}: BreadCrumbProps) => {
    return (
        <nav className="flex flex-col space-y-2" aria-label="Breadcrumb">
            <ol role="list" className="flex items-center space-x-2">
                <li>
                    <div>
                        <a href="#" className="text-gray-400 hover:text-gray-500">
                            <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                            <span className="sr-only">Home</span>
                        </a>
                    </div>
                </li>

                {pages.map((page) => (
                    <li key={page.name}>
                        <div className="flex items-center">
                            <svg
                                className="h-5 w-5 flex-shrink-0 text-gray-300"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                aria-hidden="true"
                            >
                                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                            </svg>

                            <a
                                href={page.href}
                                className={`ml-2 text-sm font-medium 
                                    ${page.current ? ' text-gray-700 hover:text-gray-900' : ' text-gray-500 hover:text-gray-700'}  
                                `}
                                aria-current={page.current ? 'page' : undefined}
                            >
                                {page.name}
                            </a>
                        </div>
                    </li>
                ))}
            </ol>

            <h5 className="text-base font-semibold text-gray-700">Sales</h5>
        </nav>
    )
}
