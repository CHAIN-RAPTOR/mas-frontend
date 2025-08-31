'use client'

import { useState, useEffect } from 'react'

export default function Dashboard() {
  const [systemStatus, setSystemStatus] = useState({
    status: 'online',
    agents: 5,
    tasks: 12,
    uptime: '99.9%'
  })

  const [recentActivity, setRecentActivity] = useState([
    { id: 1, action: 'Mission dispatched', agent: 'devops_sre', time: '2 min ago' },
    { id: 2, action: 'Task completed', agent: 'security_agent', time: '5 min ago' },
    { id: 3, action: 'System health check', agent: 'monitor_agent', time: '10 min ago' },
  ])

  return (
    <div className="space-y-6">
      {/* System Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="mas-card">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <div className="w-6 h-6 bg-green-500 rounded-full"></div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">System Status</p>
              <p className="text-2xl font-bold text-green-600">Online</p>
            </div>
          </div>
        </div>

        <div className="mas-card">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Active Agents</p>
              <p className="text-2xl font-bold text-blue-600">{systemStatus.agents}</p>
            </div>
          </div>
        </div>

        <div className="mas-card">
          <div className="flex items-center">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Pending Tasks</p>
              <p className="text-2xl font-bold text-yellow-600">{systemStatus.tasks}</p>
            </div>
          </div>
        </div>

        <div className="mas-card">
          <div className="flex items-center">
            <div className="p-2 bg-purple-100 rounded-lg">
              <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Uptime</p>
              <p className="text-2xl font-bold text-purple-600">{systemStatus.uptime}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mas-card">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
        <div className="space-y-3">
          {recentActivity.map((activity) => (
            <div key={activity.id} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                  <p className="text-xs text-gray-500">Agent: {activity.agent}</p>
                </div>
              </div>
              <span className="text-xs text-gray-400">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mas-card">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="mas-button">
            🚀 Dispatch Mission
          </button>
          <button className="mas-button">
            📊 View Reports
          </button>
          <button className="mas-button">
            ⚙️ System Settings
          </button>
        </div>
      </div>
    </div>
  )
}