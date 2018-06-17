
import feedback from '../utils/feedback'
import { hello } from '../apis'

const { notification: { error } } = feedback

export default {
  state: {
    message: null,
  },
  effects: {
    * hello (action, { call, put }) {
      const result = yield call(hello, action.name)
      if (result.success) {
        yield put({ type: 'setState', message: result.payload })
      } else {
        error(result)
      }
    },
  },
  reducers: {
    setState (state, newState) {
      return {
        ...state,
        ...newState,
      }
    },
  },
}
