'use client'

import { useState } from 'react'

export default function MissionDispatch() {
  const [formData, setFormData] = useState({
    objective: '',
    targetAgent: 'devops_sre',
    priority: 'medium',
    timeout: 300,
    inputs: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [result, setResult] = useState(null)

  const agents = [
    { id: 'devops_sre', name: 'DevOps SRE', description: 'System reliability and operations' },
    { id: 'security_agent', name: 'Security Agent', description: 'Security monitoring and response' },
    { id: 'monitor_agent', name: 'Monitor Agent', description: 'System monitoring and alerts' },
    { id: 'data_agent', name: 'Data Agent', description: 'Data processing and analysis' },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/mas/missions/dispatch', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          objective: formData.objective,
          target_agent: formData.targetAgent,
          priority: formData.priority,
          timeout: formData.timeout,
          inputs: formData.inputs ? JSON.parse(formData.inputs) : {}
        }),
      })

      const data = await response.json()
      setResult(data)
    } catch (error) {
      setResult({ error: 'Failed to dispatch mission' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mas-card">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Dispatch Mission</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Mission Objective
            </label>
            <textarea
              value={formData.objective}
              onChange={(e) => setFormData({ ...formData, objective: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mas-primary"
              rows={3}
              placeholder="Describe the mission objective..."
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Target Agent
            </label>
            <select
              value={formData.targetAgent}
              onChange={(e) => setFormData({ ...formData, targetAgent: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mas-primary"
            >
              {agents.map((agent) => (
                <option key={agent.id} value={agent.id}>
                  {agent.name} - {agent.description}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Priority
              </label>
              <select
                value={formData.priority}
                onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mas-primary"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
                <option value="critical">Critical</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Timeout (seconds)
              </label>
              <input
                type="number"
                value={formData.timeout}
                onChange={(e) => setFormData({ ...formData, timeout: parseInt(e.target.value) })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mas-primary"
                min="60"
                max="3600"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Additional Inputs (JSON)
            </label>
            <textarea
              value={formData.inputs}
              onChange={(e) => setFormData({ ...formData, inputs: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mas-primary"
              rows={3}
              placeholder='{"key": "value"}'
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mas-button disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Dispatching...' : 'Dispatch Mission'}
          </button>
        </form>

        {result && (
          <div className="mt-6 p-4 bg-gray-100 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Result:</h3>
            <pre className="text-sm text-gray-700 whitespace-pre-wrap">
              {JSON.stringify(result, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  )
}