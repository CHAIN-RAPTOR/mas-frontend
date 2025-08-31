'use client'

import { useState } from 'react'

export default function AgentManager() {
  const [agents, setAgents] = useState([
    {
      id: 'devops_sre',
      name: 'DevOps SRE',
      status: 'online',
      role: 'System Reliability Engineer',
      capabilities: ['System monitoring', 'Incident response', 'Performance optimization'],
      lastSeen: '2 minutes ago',
      tasksCompleted: 45,
      uptime: '99.8%'
    },
    {
      id: 'security_agent',
      name: 'Security Agent',
      status: 'online',
      role: 'Security Specialist',
      capabilities: ['Threat detection', 'Vulnerability scanning', 'Security compliance'],
      lastSeen: '1 minute ago',
      tasksCompleted: 32,
      uptime: '99.9%'
    },
    {
      id: 'monitor_agent',
      name: 'Monitor Agent',
      status: 'online',
      role: 'System Monitor',
      capabilities: ['Health checks', 'Alerting', 'Metrics collection'],
      lastSeen: '30 seconds ago',
      tasksCompleted: 128,
      uptime: '100%'
    },
    {
      id: 'data_agent',
      name: 'Data Agent',
      status: 'offline',
      role: 'Data Processor',
      capabilities: ['Data analysis', 'Report generation', 'Data validation'],
      lastSeen: '15 minutes ago',
      tasksCompleted: 67,
      uptime: '98.5%'
    },
  ])

  const [selectedAgent, setSelectedAgent] = useState(null)

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'bg-green-100 text-green-800'
      case 'offline': return 'bg-red-100 text-red-800'
      case 'busy': return 'bg-yellow-100 text-yellow-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="space-y-6">
      {/* Agent Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {agents.map((agent) => (
          <div key={agent.id} className="mas-card cursor-pointer hover:shadow-xl transition-shadow" onClick={() => setSelectedAgent(agent)}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">{agent.name}</h3>
              <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(agent.status)}`}>
                {agent.status}
              </span>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm text-gray-600">{agent.role}</p>
              <p className="text-xs text-gray-500">Last seen: {agent.lastSeen}</p>
              <p className="text-xs text-gray-500">Tasks completed: {agent.tasksCompleted}</p>
              <p className="text-xs text-gray-500">Uptime: {agent.uptime}</p>
            </div>

            <div className="mt-4">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Capabilities:</h4>
              <div className="flex flex-wrap gap-1">
                {agent.capabilities.map((capability, index) => (
                  <span key={index} className="inline-flex px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">
                    {capability}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Agent Details Modal */}
      {selectedAgent && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-1/2 shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">{selectedAgent.name}</h3>
                <button
                  onClick={() => setSelectedAgent(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <span className="sr-only">Close</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Status</label>
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(selectedAgent.status)}`}>
                      {selectedAgent.status}
                    </span>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Role</label>
                    <p className="text-sm text-gray-900">{selectedAgent.role}</p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Capabilities</label>
                  <div className="flex flex-wrap gap-2">
                    {selectedAgent.capabilities.map((capability, index) => (
                      <span key={index} className="inline-flex px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full">
                        {capability}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Tasks Completed</label>
                    <p className="text-2xl font-bold text-blue-600">{selectedAgent.tasksCompleted}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Uptime</label>
                    <p className="text-2xl font-bold text-green-600">{selectedAgent.uptime}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Last Seen</label>
                    <p className="text-sm text-gray-900">{selectedAgent.lastSeen}</p>
                  </div>
                </div>

                <div className="flex justify-end space-x-3 pt-4">
                  <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400">
                    View Logs
                  </button>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                    Send Command
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}