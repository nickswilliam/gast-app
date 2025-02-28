
import { SidebarMainText } from '@/components/dashboard/main-text'
import React from 'react'

const DashboardPage = () => {
  return (
    <section className="relative top-0 flex flex-col items-center h-[calc(100vh - 54px)] w-full">
      <SidebarMainText title="Dashboard" />
    </section>
  )
}

export default DashboardPage