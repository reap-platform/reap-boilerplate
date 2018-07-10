import request from '../utils/request'

export function hello (name) {
  return request(`/apis/<%=metadata.artifactId%>/hello/${name}`, { method: 'GET' })
}
