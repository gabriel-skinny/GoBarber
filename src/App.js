import { BrowserRouter } from 'react-router-dom';
import { ToastContainer} from 'react-toastify'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';

import './config/ReactotronConfig';

import Routes from './routes';

import { store, persistor } from './store';

import GlobalStyle from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter >
            <Routes />
            <GlobalStyle />
            <ToastContainer autoClose={3000}/>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
