import { ComponentProps, FC } from 'react'
import {
    Dialog,
    DialogPanel,
    Transition,
    TransitionChild,
} from '@headlessui/react'
import { SidebarComponent } from './SidebarComponent'
import { XMarkIcon } from '@heroicons/react/24/outline'


export interface SidebarProps {
    openSidebar: boolean
    onCloseSidebar: () => void
    navigation: ComponentProps<typeof SidebarComponent>['navigation']
}

export const Sidebar: FC<SidebarProps> = ({
    openSidebar = false,
    onCloseSidebar,
    navigation
}: SidebarProps) => {
    return (
        <>
            <Transition show={openSidebar}>
                <Dialog className="relative z-50 lg:hidden" onClose={onCloseSidebar}>
                    <TransitionChild
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-900/80" />
                    </TransitionChild>

                    <div className="fixed inset-0 flex">
                        <TransitionChild
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <DialogPanel className="relative mr-16 flex w-full max-w-60 flex-1">
                                <TransitionChild
                                    enter="ease-in-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in-out duration-300"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                                        <button 
                                            type="button" 
                                            className="-m-2.5 p-2.5" 
                                            onClick={() => onCloseSidebar()}
                                        >
                                            <span className="sr-only">Close sidebar</span>
                                            <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                        </button>
                                    </div>
                                </TransitionChild>

                                <SidebarComponent navigation={navigation} />

                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </Dialog>
            </Transition>

            {/* Static sidebar for desktop */}
            <div className="hidden lg:fixed lg:inset-y-5 lg:left-5 lg:z-50 lg:flex lg:w-60 lg:flex-col">
                <SidebarComponent navigation={navigation} />
            </div>
        </>
    )
}
