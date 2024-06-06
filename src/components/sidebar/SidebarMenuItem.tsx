
import { FC, ReactNode } from 'react'

export interface SidebarMenuItemProps {
    name: string
    icon?: ReactNode
    href?: string
    current?: boolean
    textActive?: boolean
}

export const SidebarMenuItem: FC<SidebarMenuItemProps> = ({
    name,
    icon,
    href,
    current,
    textActive
}: SidebarMenuItemProps) => {
    return (
        <a
            href={href}
            className={`flex items-center p-3 gap-x-4 text-sm rounded-lg transition-all focus:outline-none
                ${current ? ' bg-gray-700 text-white lg:transform lg:translate-x-0.5' : `${
                    textActive ? ' bg-transparent hover:bg-gray-700 text-white' : ' bg-transparent hover:bg-gray-700 text-white/60 hover:text-white lg:hover:transform lg:hover:translate-x-0.5'
                }`}
            `}
        >
            {icon || (
                <span className="w-5 h-5 shrink-0 inline-flex items-center justify-center uppercase">
                    {name.substring(0, 1)}
                </span>
            )}

            <span className="font-normal truncate">{name}</span>
        </a>
    )
}