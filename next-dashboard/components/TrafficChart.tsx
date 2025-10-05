'use client'

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'

const data = [
  { name: 'Direct', value: 4200, color: '#8b5cf6' },
  { name: 'Organic Search', value: 3100, color: '#10b981' },
  { name: 'Social Media', value: 2800, color: '#3b82f6' },
  { name: 'Referral', value: 1900, color: '#f59e0b' },
]

export default function TrafficChart() {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
      <div className="mb-6">
        <h2 className="text-white text-xl font-bold">Traffic Sources</h2>
        <p className="text-zinc-400 text-sm mt-1">Where your visitors come from</p>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#18181b', 
                border: '1px solid #3f3f46',
                borderRadius: '8px',
                color: '#fff'
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-zinc-800">
        {data.map((item) => (
          <div key={item.name} className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
              <span className="text-zinc-400 text-sm">{item.name}</span>
            </div>
            <span className="text-white font-semibold text-sm">{item.value.toLocaleString()}</span>
          </div>
        ))}
      </div>
    </div>
  )
}