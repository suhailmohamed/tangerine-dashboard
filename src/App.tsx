import { useState } from "react";
import { Stats } from "./components/stats/Stats";
import { Sidebar } from "./components/sidebar/Sidebar";
import { useSideNavigation } from "./hooks/useSideNavigation";
import { Header } from "./components/header/Header";
import { Pie, Bar, Line } from "@ant-design/charts";
import { SalesCountryDetails } from "./components/salescountrydetails/SalesCountryDetails";
import { BoxWrapper } from "./components/BoxWrapper";
import { BreadCrumb } from "./components/breadcrumb/BreadCrumb";
import { useBreadCrumbNavigation } from "./hooks/useBreadCrumbNavigation";

const StatsData = [
  {
    name: 'Sales',
    date: '6 May - 7 may',
    price: '$230,220',
    increaseValue: '55%'
  },
  {
    name: 'Customers',
    date: '6 May - 7 may',
    price: '3.200',
    increaseValue: '12%'
  },
  {
    name: 'Avg.Revenue',
    date: '6 May - 7 may',
    price: '$1.200',
    increaseValue: '$213',
    increaseValueStyleGray: true
  }
]

const salesCountryDetails = [
  {
    flag: '🇺🇸',
    country: 'United State',
    sales: '2500',
    bounce: '29.9%',
  },
  {
    flag: '🇩🇪',
    country: 'Germany',
    sales: '3.900',
    bounce: '40.22%',
  },
  {
    flag: '🇬🇧',
    country: 'Great Britain',
    sales: '1.400',
    bounce: '23.44%',
  },
  {
    flag: '🇧🇷',
    country: 'Brasil',
    sales: '562',
    bounce: '32.14%',
  },
  {
    flag: '🇦🇺',
    country: 'Australia',
    sales: '400',
    bounce: '56.83%',
  },
  // More country...
]

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const navigation = useSideNavigation()
  const breadCrumbNavigation = useBreadCrumbNavigation()

  const pieConfig = {
    data: [
      { type: '分类一', value: 27 },
      { type: '分类二', value: 25 },
      { type: '分类三', value: 18 },
      { type: '分类四', value: 15 },
      { type: '分类五', value: 10 },
      { type: '其他', value: 5 },
    ],
    angleField: 'value',
    colorField: 'type',
    label: {
      text: 'value',
      style: {
        fontWeight: 'bold',
      },
    },
    legend: {
      color: {
        title: false,
        position: 'right',
        rowPadding: 5,
      },
    },
  };
  
  const lineConfig = {
    data: {
      type: 'fetch',
      value: 'https://gw.alipayobjects.com/os/bmw-prod/55424a73-7cb8-4f79-b60d-3ab627ac5698.json',
    },
    xField: (d) => new Date(d.year),
    yField: 'value',
    sizeField: 'value',
    shapeField: 'trail',
    legend: { size: false },
    colorField: 'category',
  };

  const barConfig = {
    data: {
      type: 'fetch',
      value: 'https://render.alipay.com/p/yuyan/180020010001215413/antd-charts/bar-bar.json',
    },
    xField: 'letter',
    yField: 'frequency',
    sort: {
      reverse: true,
    },
    label: {
      text: 'frequency',
      formatter: '.1%',
      style: {
        textAnchor: (d) => (+d.frequency > 0.008 ? 'right' : 'start'),
        fill: (d) => (+d.frequency > 0.008 ? '#fff' : '#000'),
        dx: (d) => (+d.frequency > 0.008 ? -5 : 5),
      },
    },
    axis: {
      y: {
        labelFormatter: '.0%',
      },
    },
  };

  return (
    <>
      <Sidebar
        openSidebar={sidebarOpen}
        onCloseSidebar={() => setSidebarOpen(false)}
        navigation={navigation}
      /> 

      <div className="lg:p-6 lg:pl-72">
        <Header 
          openSidebar={() => setSidebarOpen(true)}
          breadCrumbPages={breadCrumbNavigation}
        />

        <main className="pt-6 p-4 lg:px-0">
          {/* BreadCrumb for mobile */}
          <div className="block lg:hidden mb-8">
            <BreadCrumb pages={breadCrumbNavigation} />
          </div>

          <Stats stats={StatsData} />

          <div className="flex flex-col lg:flex-row gap-4 lg:gap-5 mb-8">
            <div className="w-full lg:w-3/6 xl:w-2/5">
              <BoxWrapper heading="Channels">
                <Pie {...pieConfig} height={320} />
              </BoxWrapper>
            </div>
              
            <div className="w-full lg:w-3/6 xl:w-3/5">
              <BoxWrapper heading="Revenue">
                <Line {...lineConfig} height={320} />
              </BoxWrapper>
            </div>  
          </div>

          <div className="flex flex-col lg:flex-row gap-4 lg:gap-5 mb-8">
            <div className="w-full lg:w-3/6 xl:w-3/5">
              <BoxWrapper heading="Sales by age">
                <Bar {...barConfig} height={424} />
              </BoxWrapper>
            </div>
            
            <div className="w-full lg:w-3/6 xl:w-2/5">
              <SalesCountryDetails 
                sales={salesCountryDetails}
              />
            </div>
          </div>
          
          <BoxWrapper heading="Top Selling Product">
            <div className="w-full h-[400px] flex items-center justify-center text-sm text-gray-500">
              Content goes here...
            </div>
          </BoxWrapper>
        </main>
      </div>
    </>
  )
}

export default App
