'use client'

import { TrendingUp, TrendingDown } from 'lucide-react'

const products = [
  { name: 'iPhone 14 Pro', sales: 1234, trend: 'up', change: '+12%', image: '📱' },
  { name: 'MacBook Air M2', sales: 891, trend: 'up', change: '+8%', image: '💻' },
  { name: 'AirPods Pro', sales: 678, trend: 'down', change: '-3%', image: '🎧' },
  { name: 'iPad Pro', sales: 543, trend: 'up', change: '+15%', image: '📱' },
  { name: 'Apple Watch', sales: 432, trend: 'up', change: '+5%', image: '⌚' },
]

export default function TopProducts() {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
      <div className="mb-6">
        <h2 className="text-white text-xl font-bold">Top Products</h2>
        <p className="text-zinc-400 text-sm mt-1">Best selling this month</p>
      </div>

      <div className="space-y-4">
        {products.map((product, index) => {
          const TrendIcon = product.trend === 'up' ? TrendingUp : TrendingDown
          
          return (
            <div key={product.name} className="flex items-center justify-between p-3 hover:bg-zinc-800 rounded-lg transition-colors cursor-pointer">
              <div className="flex items-center space-x-3 flex-1">
                <div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center text-2xl">
                  {product.image}
                </div>
                <div className="flex-1">
                  <p className="text-white font-medium text-sm">{product.name}</p>
                  <p className="text-zinc-400 text-xs">{product.sales.toLocaleString()} sales</p>
                </div>
              </div>
              
              <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${
                product.trend === 'up' 
                  ? 'bg-emerald-500/10 text-emerald-400' 
                  : 'bg-red-500/10 text-red-400'
              }`}>
                <TrendIcon className="w-3 h-3" />
                <span>{product.change}</span>
              </div>
            </div>
          )
        })}
      </div>

      <button className="w-full mt-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg font-medium text-sm transition-colors">
        View All Products
      </button>
    </div>
  )
}