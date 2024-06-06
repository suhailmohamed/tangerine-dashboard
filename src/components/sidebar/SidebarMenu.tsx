
import { Disclosure, DisclosureButton, DisclosurePanel, Transition } from '@headlessui/react'
import { FC, Fragment } from 'react'
import { SidebarMenuItem, SidebarMenuItemProps } from './SidebarMenuItem'

export interface SidebarMenuProps extends Omit<SidebarMenuItemProps, 'textActive'> {
    links?: Omit<SidebarMenuItemProps, 'textActive'>[]
}

export const SidebarMenu: FC<SidebarMenuProps> = ({
    links,
    ...restProps
}: SidebarMenuProps) => {
    return (
        <>
            {links?.length ? (
                <Disclosure {...restProps}>
                    {({ open }) => (
                        <>
                            <DisclosureButton
                                className={`w-full flex items-center p-3 gap-x-4 text-white rounded-lg
                                    ${open ? "bg-neutral-600" : "bg-transparent hover:bg-neutral-600"}
                                `}
                            >
                                {restProps.icon}

                                <span className="text-sm font-medium capitalize truncate">
                                    {restProps.name}
                                </span>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className={`w-5 h-5 flex-shrink-0 ml-auto transform transition-transform ${!open ? ' -scale-y-100' : ''}`}
                                >
                                    <path fillRule="evenodd" d="M9.47 6.47a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 8.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06l4.25-4.25Z" clipRule="evenodd" />
                                </svg>
                            </DisclosureButton>

                            <Transition
                                enter="duration-200 ease-out"
                                enterFrom="opacity-0 -translate-y-6"
                                enterTo="opacity-100 translate-y-0"
                                leave="duration-300 ease-out"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 -translate-y-6"
                            >
                                <DisclosurePanel className="pt-2 space-y-2 origin-top transition">
                                    {links?.map((link) => {
                                        return (
                                            <Fragment key={link.name}>
                                                <SidebarMenuItem
                                                    name={link.name}
                                                    icon={link.icon}
                                                    href={link.href}
                                                    current={link.current}
                                                />
                                            </Fragment>
                                        )
                                    })}
                                </DisclosurePanel>
                            </Transition>
                        </>
                    )}
                </Disclosure>
            ) : (
                <SidebarMenuItem 
                    {...restProps}
                    textActive
                />
            )}
        </>
    )
}