import {
  FETCH_UPDATE_PLAN_REQUEST,
  FETCH_UPDATE_PLAN_SUCCESS,
  FETCH_UPDATE_PLAN_FAILURE
} from '../actions/types'

const initialState = {
  plan: '',
  loadingPlan: false,
  error: ''
}

export const adaptationPlanReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_UPDATE_PLAN_REQUEST:
      return {
        ...state,
        loadingPlan: true,
      }
    case FETCH_UPDATE_PLAN_SUCCESS:
      return {
        ...state,
        loadingPlan: false,
        plan: action.payload,
      }
    case FETCH_UPDATE_PLAN_FAILURE:
      return {
        ...state,
        loadingPlan: false,
        error: action.payload
      }
    default:
      return state
  }
}
