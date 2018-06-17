
export default {
  'GET /apis/<%=metadata.artifactId%>/hello/:name': ({ succ, params }) => {
    succ(`Hello ${params.name}`)
  },
}
