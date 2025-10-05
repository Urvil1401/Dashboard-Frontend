'use client'

import { DollarSign, Users, ShoppingCart, TrendingUp, ArrowUp, ArrowDown } from 'lucide-react'

const stats = [
  {
    title: 'Total Revenue',
    value: '$45,231',
    change: '+20.1%',
    trend: 'up',
    icon: DollarSign,
    color: 'from-emerald-500 to-green-600',
  },
  {
    title: 'Total Users',
    value: '2,345',
    change: '+15.3%',
    trend: 'up',
    icon: Users,
    color: 'from-blue-500 to-cyan-600',
  },
  {
    title: 'Total Orders',
    value: '1,234',
    change: '-5.4%',
    trend: 'down',
    icon: ShoppingCart,
    color: 'from-violet-500 to-purple-600',
  },
  {
    title: 'Conversion Rate',
    value: '3.65%',
    change: '+8.2%',
    trend: 'up',
    icon: TrendingUp,
    color: 'from-orange-500 to-red-600',
  },
]

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => {
        const Icon = stat.icon
        const TrendIcon = stat.trend === 'up' ? ArrowUp : ArrowDown
        
        return (
          <div
            key={stat.title}
            className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-all cursor-pointer group"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 bg-gradient-to-br ${stat.color} rounded-lg group-hover:scale-110 transition-transform`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${
                stat.trend === 'up' 
                  ? 'bg-emerald-500/10 text-emerald-400' 
                  : 'bg-red-500/10 text-red-400'
              }`}>
                <TrendIcon className="w-3 h-3" />
                <span>{stat.change}</span>
              </div>
            </div>
            
            <h3 className="text-zinc-400 text-sm font-medium mb-1">{stat.title}</h3>
            <p className="text-white text-2xl font-bold">{stat.value}</p>
            
            <div className="mt-4 pt-4 border-t border-zinc-800">
              <p className="text-zinc-500 text-xs">vs. last month</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}