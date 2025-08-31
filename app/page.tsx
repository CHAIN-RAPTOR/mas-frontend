'use client'

import { useState } from 'react'
import Dashboard from '@/components/Dashboard'
import MissionDispatch from '@/components/MissionDispatch'
import SystemMonitor from '@/components/SystemMonitor'
import AgentManager from '@/components/AgentManager'

export default function Home() {
  const [activeTab, setActiveTab] = useState('dashboard')

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'dispatch', label: 'Mission Dispatch', icon: '🚀' },
    { id: 'monitor', label: 'System Monitor', icon: '📈' },
    { id: 'agents', label: 'Agent Manager', icon: '🤖' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="mas-gradient text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold">MAS Dashboard</h1>
              <p className="text-blue-100 mt-1">Multi-Agent System Control Center</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                System Online
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-mas-primary text-mas-primary'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {activeTab === 'dashboard' && <Dashboard />}
        {activeTab === 'dispatch' && <MissionDispatch />}
        {activeTab === 'monitor' && <SystemMonitor />}
        {activeTab === 'agents' && <AgentManager />}
      </main>
    </div>
  )
}