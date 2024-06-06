import { FC } from "react"
import { BoxWrapper } from "../BoxWrapper"

interface SalesCountryDetailsProps {
    sales: {
        flag: string
        country: string
        sales: string
        bounce: string
    }[]
}
export const SalesCountryDetails: FC<SalesCountryDetailsProps> = ({
    sales
}: SalesCountryDetailsProps) => {
    return (
        <BoxWrapper heading="Sales by Country">
            <div className="flow-root">
                <div className="-mx-4 overflow-x-auto">
                    <div className="inline-block min-w-full align-middle">
                        <table className="min-w-full divide-y divide-gray-300">
                            <tbody className="divide-y divide-gray-200 bg-white text-sm text-gray-500">
                                {sales.map((sale) => (
                                    <tr key={sale.country}>
                                        <td className="whitespace-nowrap py-5 pl-4 pr-3">
                                            <div className="flex items-center">
                                                <div className="h-10 w-10 flex-shrink-0 inline-flex items-center justify-center text-3xl">
                                                    {sale.flag}
                                                </div>

                                                <div className="ml-4">
                                                    <div className="font-medium">Country</div>
                                                    <div className="mt-1 text-gray-900">{sale.country}</div>
                                                </div>
                                            </div>
                                        </td>

                                        <td className="whitespace-nowrap px-3 py-5">
                                            <div className="font-medium">Sales</div>
                                            <div className="mt-1 text-gray-900">{sale.sales}</div>
                                        </td>

                                        <td className="whitespace-nowrap py-5 pl-3 pr-4">
                                            <div className="font-medium">Sales</div>
                                            <div className="mt-1 text-gray-900">{sale.bounce}</div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </BoxWrapper>
    )
}