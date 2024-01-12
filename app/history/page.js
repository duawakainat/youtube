export const metadata = {
  title: 'History Page',
  description: 'History more discription',
}
import React from 'react'
import HistoryC1 from '@/components/historyC1'
import SideNav from '@/components/SideNav'
import Layout from '@/components/Layout'
const page = () => {
  return (
    <div>
      {/* <div className="flex flex-row h-screen justify-start bg-white overflow-y-scroll overscroll-contain">
        <div className="flex flex-col sticky right-0 left-0 bg-white top-0 z-50">
          <SideNav
           
          />

          <div></div>
        </div>  */}
      <HistoryC1/>
      </div>
      // </div>
  )
}

export default page