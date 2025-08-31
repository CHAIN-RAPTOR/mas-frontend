import axios from 'axios'

const API_BASE_URL = process.env.NEXT_PUBLIC_MAS_API_URL || 'https://api-mas.cyberellum.technology'
const API_KEY = process.env.NEXT_PUBLIC_MAS_API_KEY || 'sk-super-secret-key-12345'

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': API_KEY,
  },
})

export const masApi = {
  // Health check
  async getHealth() {
    const response = await api.get('/healthz')
    return response.data
  },

  // System status
  async getStatus() {
    const response = await api.get('/status')
    return response.data
  },

  // Get agents
  async getAgents() {
    const response = await api.get('/agents')
    return response.data
  },

  // Get telemetry
  async getTelemetry() {
    const response = await api.get('/telemetry')
    return response.data
  },

  // Dispatch mission
  async dispatchMission(missionData: any) {
    const response = await api.post('/missions/dispatch', missionData)
    return response.data
  },

  // Get tasks
  async getTasks() {
    const response = await api.get('/tasks')
    return response.data
  },

  // Get task by ID
  async getTask(taskId: string) {
    const response = await api.get(`/tasks/${taskId}`)
    return response.data
  },
}

export default masApi