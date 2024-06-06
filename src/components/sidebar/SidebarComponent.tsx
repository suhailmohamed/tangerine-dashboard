import { FC } from 'react'
import { SidebarMenu, SidebarMenuProps } from './SidebarMenu'

export interface SidebarComponentProps {
    navigation: {
        title: string
        menu: SidebarMenuProps[]
    }[]
}

export const SidebarComponent: FC<SidebarComponentProps> = ({
    navigation
}: SidebarComponentProps) => {
    return (
        <div className="flex grow flex-col gap-y-4 overflow-y-auto bg-neutral-800 p-4 pb-12 lg:rounded-xl scrollbar-hide">
            <div className="flex shrink-0 justify-center border-b border-neutral-600">
                <div className="min-w-0 flex items-center py-6 gap-x-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                        className="w-6 h-6 fill-white flex-shrink-0"
                    >
                        <path fillRule="evenodd" d="M2.25 4.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875V17.25a4.5 4.5 0 1 1-9 0V4.125Zm4.5 14.25a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z" clipRule="evenodd" />
                        <path d="M10.719 21.75h9.156c1.036 0 1.875-.84 1.875-1.875v-5.25c0-1.036-.84-1.875-1.875-1.875h-.14l-8.742 8.743c-.09.089-.18.175-.274.257ZM12.738 17.625l6.474-6.474a1.875 1.875 0 0 0 0-2.651L15.5 4.787a1.875 1.875 0 0 0-2.651 0l-.1.099V17.25c0 .126-.003.251-.01.375Z" />
                    </svg>

                    <h3 className="text-sm font-semibold text-white truncate">Material Dashboard Pro</h3>
                </div>
            </div>

            <nav className="flex flex-1 flex-col">
                <ul role="list" className="flex flex-1 flex-col gap-y-4 divide-y divide-neutral-600">
                    <li>
                        <SidebarMenu
                            name="Brooklyn Alice"
                            icon={(
                                <img
                                    className="inline-block h-8 w-8 rounded-full"
                                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                />
                            )}
                            links={[
                                {
                                    name: 'Lorem Ipsum 1',
                                    href: '',
                                    current: false
                                },
                                {
                                    name: 'Lorem Ipsum 2',
                                    href: '',
                                    current: false
                                }
                            ]}
                        />
                    </li>

                    {navigation.map((item, itemIndex) => {
                        return (
                            <li key={itemIndex} className="pt-4">
                                {item.title && (
                                    <h4 className="text-sm font-semibold uppercase text-white pl-2.5 mb-3">
                                        {item.title}
                                    </h4>
                                )}

                                <ul role="list" className="space-y-2">
                                    {item.menu.map((menu) => {
                                        return (
                                            <li key={menu.name}>
                                                <SidebarMenu
                                                    {...menu}
                                                />
                                            </li>
                                        )
                                    })}
                                </ul>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
    )
}