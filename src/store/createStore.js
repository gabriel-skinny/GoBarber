import { createStore, compose, applyMiddleware  } from 'redux';

const store =  (reducers, middlewares) => {
  const enhacer = process.env.NODE_ENV === "development"
  ? compose(
    console.tron.createEnhancer(),
    applyMiddleware(...middlewares)
  )
  : applyMiddleware(...middlewares);
  
  return createStore(reducers, enhacer);
}

export default store;