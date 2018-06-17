import request from '../utils/request'

export function hello (name) {
  return request(`/apis/reap-boilerplate/hello/${name}`, { method: 'GET' })
}
