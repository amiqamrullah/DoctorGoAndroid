import {createStore} from 'redux'

const initialState = {
  loading: false,
  name: 'SYAUQI AMIQ',
  GetStarted: 'Konsultasi dengan dokter jadi lebih mudah & fleksibel'
}
const reducer = (state = initialState, action) => {
  if(action.type === 'SET_LOADING'){
    return{
      ...state,
      loading: action.value,
    }
  }
  if(action.type === 'SET_NAME'){
    return{
      ...state,
      name: 'Azzamy'
    }
  }
  return state;
}
const store = createStore(reducer);

export default store;