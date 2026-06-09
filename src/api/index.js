/**
 * Maison Solis API Client
 * Replace VITE_API_URL in .env with your backend endpoint.
 * All functions return { data, error } for consistent error handling.
 */
const BASE_URL = import.meta.env.VITE_API_URL || '/api'

async function request(path, options = {}) {
  try {
    const res = await fetch(`${BASE_URL}${path}`, {
      headers: { 'Content-Type': 'application/json', ...options.headers },
      ...options,
    })
    if (!res.ok) {
      const err = await res.json().catch(() => ({ message: res.statusText }))
      return { data: null, error: err.message || 'Request failed' }
    }
    const data = await res.json()
    return { data, error: null }
  } catch (err) {
    return { data: null, error: err.message }
  }
}

export const createReservation = (payload) =>
  request('/reservations', { method: 'POST', body: JSON.stringify(payload) })

export const getAvailability = (date) =>
  request(`/reservations/availability?date=${date}`)

export const sendContactMessage = (payload) =>
  request('/contact', { method: 'POST', body: JSON.stringify(payload) })

export const getMenuItems = (category) =>
  request(`/menu${category ? `?category=${category}` : ''}`)

export const subscribeNewsletter = (email) =>
  request('/newsletter', { method: 'POST', body: JSON.stringify({ email }) })

export const getTestimonials = () => request('/testimonials')

export const submitReview = (payload) =>
  request('/testimonials', { method: 'POST', body: JSON.stringify(payload) })
