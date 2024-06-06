
import type { ComponentProps } from 'react'
import { BreadCrumb } from '../components/breadcrumb/BreadCrumb'

export const useBreadCrumbNavigation = (): ComponentProps<
  typeof BreadCrumb
>['pages'] => {

  const pages: ComponentProps<typeof BreadCrumb>['pages'] = [
    { name: 'Dashboard', href: '#', current: false },
    { name: 'Sales', href: '#', current: true },
  ]

  return pages
}
