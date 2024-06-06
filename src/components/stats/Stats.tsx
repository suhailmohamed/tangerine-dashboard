import { FC } from "react"

interface StatsProps {
    stats: {
        name: string
        date: string
        price: string
        increaseValue: string
        increaseValueStyleGray?: boolean
    }[]
}

export const Stats: FC<StatsProps> = ({
    stats
}: StatsProps) => {
    return (
        <div>
            <dl className="grid grid-cols-1 gap-4 lg:gap-5 md:grid-cols-3 mb-8">
                {stats.map((item) => (
                    <div key={item.name} className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow-sm sm:p-6 transform lg:hover:-translate-y-1 transition-transform duration-300">
                        <dt className="truncate flex items-center text-sm font-medium text-gray-500">
                            {item.name}
                            <span className="ml-auto text-xs font-medium">{item.date}</span>    
                        </dt>
                        
                        <dd className="mt-1 text-3xl font-bold tracking-tight text-gray-900">
                            {item.price}
                        </dd>

                        <dd className="mt-1 text-sm text-gray-500">
                            <span className={`text-lg font-semibold ${item.increaseValueStyleGray ? ' text-gray-500' : ' text-green-600'}`}>
                                <span className="text-sm inline-block align-text-top">+</span>{item.increaseValue}
                            </span>
                            &nbsp;since last month
                        </dd>
                    </div>
                ))}
            </dl>
        </div>
    )
}