
export default {
  'GET /apis/reap-boilerplate/hello/:name': ({ succ, params }) => {
    succ(`Hello ${params.name}`)
  },
}
