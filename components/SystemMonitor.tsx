'use client'

import { useState, useEffect } from 'react'

export default function SystemMonitor() {
  const [systemMetrics, setSystemMetrics] = useState({
    cpu: 45,
    memory: 67,
    disk: 23,
    network: 12
  })

  const [queueStatus, setQueueStatus] = useState({
    pending: 8,
    processing: 3,
    completed: 156,
    failed: 2
  })

  const [recentTasks, setRecentTasks] = useState([
    { id: 'task-001', agent: 'devops_sre', status: 'completed', duration: '2m 34s', timestamp: '2024-01-15 14:30:00' },
    { id: 'task-002', agent: 'security_agent', status: 'processing', duration: '1m 12s', timestamp: '2024-01-15 14:28:00' },
    { id: 'task-003', agent: 'monitor_agent', status: 'pending', duration: '-', timestamp: '2024-01-15 14:25:00' },
    { id: 'task-004', agent: 'data_agent', status: 'failed', duration: '0m 45s', timestamp: '2024-01-15 14:20:00' },
  ])

  return (
    <div className="space-y-6">
      {/* System Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="mas-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">CPU Usage</p>
              <p className="text-2xl font-bold text-blue-600">{systemMetrics.cpu}%</p>
            </div>
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
            </div>
          </div>
          <div className="mt-4 bg-gray-200 rounded-full h-2">
            <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${systemMetrics.cpu}%` }}></div>
          </div>
        </div>

        <div className="mas-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Memory Usage</p>
              <p className="text-2xl font-bold text-green-600">{systemMetrics.memory}%</p>
            </div>
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-green-500 rounded-full"></div>
            </div>
          </div>
          <div className="mt-4 bg-gray-200 rounded-full h-2">
            <div className="bg-green-500 h-2 rounded-full" style={{ width: `${systemMetrics.memory}%` }}></div>
          </div>
        </div>

        <div className="mas-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Disk Usage</p>
              <p className="text-2xl font-bold text-yellow-600">{systemMetrics.disk}%</p>
            </div>
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-yellow-500 rounded-full"></div>
            </div>
          </div>
          <div className="mt-4 bg-gray-200 rounded-full h-2">
            <div className="bg-yellow-500 h-2 rounded-full" style={{ width: `${systemMetrics.disk}%` }}></div>
          </div>
        </div>

        <div className="mas-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Network I/O</p>
              <p className="text-2xl font-bold text-purple-600">{systemMetrics.network}%</p>
            </div>
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-purple-500 rounded-full"></div>
            </div>
          </div>
          <div className="mt-4 bg-gray-200 rounded-full h-2">
            <div className="bg-purple-500 h-2 rounded-full" style={{ width: `${systemMetrics.network}%` }}></div>
          </div>
        </div>
      </div>

      {/* Queue Status */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="mas-card text-center">
          <div className="text-3xl font-bold text-yellow-600">{queueStatus.pending}</div>
          <div className="text-sm text-gray-600">Pending Tasks</div>
        </div>
        <div className="mas-card text-center">
          <div className="text-3xl font-bold text-blue-600">{queueStatus.processing}</div>
          <div className="text-sm text-gray-600">Processing</div>
        </div>
        <div className="mas-card text-center">
          <div className="text-3xl font-bold text-green-600">{queueStatus.completed}</div>
          <div className="text-sm text-gray-600">Completed</div>
        </div>
        <div className="mas-card text-center">
          <div className="text-3xl font-bold text-red-600">{queueStatus.failed}</div>
          <div className="text-sm text-gray-600">Failed</div>
        </div>
      </div>

      {/* Recent Tasks */}
      <div className="mas-card">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Tasks</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Task ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Agent</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Timestamp</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentTasks.map((task) => (
                <tr key={task.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{task.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{task.agent}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      task.status === 'completed' ? 'bg-green-100 text-green-800' :
                      task.status === 'processing' ? 'bg-blue-100 text-blue-800' :
                      task.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {task.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{task.duration}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{task.timestamp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}