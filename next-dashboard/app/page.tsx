'use client'

import Header from "@/components/Header"
import RecentOrders from "@/components/RecentOrders"
import RevenueChart from "@/components/RevenueChart"
import Sidebar from "@/components/Sidebar"
import StatsCards from "@/components/StatsCards"
import TopProducts from "@/components/TopProducts"
import TrafficChart from "@/components/TrafficChart"


export default function Home() {
  return (
    <div className="flex h-screen bg-zinc-950">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Dashboard Overview</h1>
              <p className="text-zinc-400">Welcome back! Here's what's happening with your business.</p>
            </div>

            <StatsCards />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <RevenueChart />
              <TrafficChart />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <RecentOrders />
              </div>
              <TopProducts />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}