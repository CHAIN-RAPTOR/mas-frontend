export interface Task {
  id: string
  objective: string
  target_agent: string
  priority: 'low' | 'medium' | 'high' | 'critical'
  status: 'pending' | 'processing' | 'completed' | 'failed'
  created_at: string
  updated_at: string
  timeout: number
  inputs: Record<string, any>
  outputs?: Record<string, any>
  error?: string
}

export interface Agent {
  id: string
  name: string
  role: string
  status: 'online' | 'offline' | 'busy'
  capabilities: string[]
  last_seen: string
  tasks_completed: number
  uptime: string
}

export interface SystemStatus {
  status: 'online' | 'offline' | 'degraded'
  agents: number
  tasks: {
    pending: number
    processing: number
    completed: number
    failed: number
  }
  uptime: string
  version: string
}

export interface Telemetry {
  cpu: number
  memory: number
  disk: number
  network: number
  timestamp: string
}

export interface MissionRequest {
  objective: string
  target_agent: string
  priority: 'low' | 'medium' | 'high' | 'critical'
  timeout: number
  inputs: Record<string, any>
}