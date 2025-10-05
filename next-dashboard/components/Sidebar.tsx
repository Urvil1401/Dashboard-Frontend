'use client'

import { Home, BarChart3, Users, ShoppingBag, Settings, TrendingUp, FileText, Bell } from 'lucide-react'
import { useState } from 'react'

const menuItems = [
  { icon: Home, label: 'Dashboard', active: true },
  { icon: BarChart3, label: 'Analytics', active: false },
  { icon: Users, label: 'Customers', active: false },
  { icon: ShoppingBag, label: 'Products', active: false },
  { icon: TrendingUp, label: 'Sales', active: false },
  { icon: FileText, label: 'Reports', active: false },
  { icon: Bell, label: 'Notifications', active: false },
  { icon: Settings, label: 'Settings', active: false },
]

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState('Dashboard')

  return (
    <div className="w-64 bg-zinc-900 border-r border-zinc-800 flex flex-col">
      <div className="p-6 border-b border-zinc-800">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg flex items-center justify-center">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-white font-bold text-lg">Dashboard</h1>
            <p className="text-zinc-400 text-xs">v2.0</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = activeItem === item.label
          
          return (
            <button
              key={item.label}
              onClick={() => setActiveItem(item.label)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                isActive
                  ? 'bg-violet-500/10 text-violet-400 border border-violet-500/20'
                  : 'text-zinc-400 hover:bg-zinc-800 hover:text-white'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          )
        })}
      </nav>

      <div className="p-4 border-t border-zinc-800">
        <div className="bg-gradient-to-br from-violet-500/10 to-purple-600/10 border border-violet-500/20 rounded-lg p-4">
          <h3 className="text-white font-semibold mb-1">Upgrade to Pro</h3>
          <p className="text-zinc-400 text-xs mb-3">Get unlimited access to all features</p>
          <button className="w-full bg-gradient-to-r from-violet-500 to-purple-600 text-white py-2 rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-violet-500/25 transition-all">
            Upgrade Now
          </button>
        </div>
      </div>
    </div>
  )
}