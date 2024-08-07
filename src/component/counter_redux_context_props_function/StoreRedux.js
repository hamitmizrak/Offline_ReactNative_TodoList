import { createStore } from 'redux';

// Başlangıç durumu
const initialState = {
  count: 0,
};

// Reducer fonksiyonu
function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return initialState;
    default:
      return state;
  } //end switch
}// end counterReducer

// Mağaza oluşturma
const StoreRedux = createStore(counterReducer);

export default StoreRedux;