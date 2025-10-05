'use client'

import { MoreVertical } from 'lucide-react'

const orders = [
  { id: '#ORD-2341', customer: 'John Smith', product: 'iPhone 14 Pro', status: 'Delivered', amount: '$999', date: '2 hours ago' },
  { id: '#ORD-2340', customer: 'Sarah Johnson', product: 'MacBook Air M2', status: 'Processing', amount: '$1,199', date: '5 hours ago' },
  { id: '#ORD-2339', customer: 'Mike Williams', product: 'AirPods Pro', status: 'Shipped', amount: '$249', date: '1 day ago' },
  { id: '#ORD-2338', customer: 'Emily Brown', product: 'iPad Pro', status: 'Delivered', amount: '$799', date: '1 day ago' },
  { id: '#ORD-2337', customer: 'David Lee', product: 'Apple Watch', status: 'Cancelled', amount: '$399', date: '2 days ago' },
]

const statusColors = {
  Delivered: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  Processing: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  Shipped: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
  Cancelled: 'bg-red-500/10 text-red-400 border-red-500/20',
}

export default function RecentOrders() {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-white text-xl font-bold">Recent Orders</h2>
          <p className="text-zinc-400 text-sm mt-1">Your latest customer orders</p>
        </div>
        <button className="text-violet-400 hover:text-violet-300 text-sm font-medium">View All</button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-zinc-800">
              <th className="text-left text-zinc-400 font-medium text-sm pb-3">Order ID</th>
              <th className="text-left text-zinc-400 font-medium text-sm pb-3">Customer</th>
              <th className="text-left text-zinc-400 font-medium text-sm pb-3">Product</th>
              <th className="text-left text-zinc-400 font-medium text-sm pb-3">Status</th>
              <th className="text-left text-zinc-400 font-medium text-sm pb-3">Amount</th>
              <th className="text-left text-zinc-400 font-medium text-sm pb-3">Date</th>
              <th className="text-left text-zinc-400 font-medium text-sm pb-3"></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b border-zinc-800 hover:bg-zinc-800/50 transition-colors">
                <td className="py-4 text-white font-medium text-sm">{order.id}</td>
                <td className="py-4 text-white text-sm">{order.customer}</td>
                <td className="py-4 text-zinc-400 text-sm">{order.product}</td>
                <td className="py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${statusColors[order.status as keyof typeof statusColors]}`}>
                    {order.status}
                  </span>
                </td>
                <td className="py-4 text-white font-semibold text-sm">{order.amount}</td>
                <td className="py-4 text-zinc-400 text-sm">{order.date}</td>
                <td className="py-4">
                  <button className="text-zinc-400 hover:text-white transition-colors">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}