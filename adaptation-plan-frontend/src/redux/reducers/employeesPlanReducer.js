import {
  FETCH_EMPLOYEES,
  FETCH_EMPLOYEES_SUCCESS,
  FETCH_EMPLOYEES_FAILURE,
  FETCH_DIRECTORS_SUCCESS,
  FETCH_DIRECTORS_FAILURE
} from '../actions/types'

const initialState = {
  loading: false,
  employees: '',
  error: '',
  directors: ''
}

export const employeesPlanReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EMPLOYEES:
      return {
        ...state,
        loading: true
      }
    case FETCH_EMPLOYEES_SUCCESS:
      return {
        ...state,
        employees: action.payload,
        loading: false
      }
    case FETCH_EMPLOYEES_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    case FETCH_DIRECTORS_SUCCESS:
      return {
        ...state,
        directors: action.payload,
        loading: false
      }
    case FETCH_DIRECTORS_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    default:
      return state
  }
}