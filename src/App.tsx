import ProductForm from './products/ProductForm';
import ProductList from './products/ProductsList';
import { Provider } from 'react-redux';
import store  from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        < ProductList />
        < ProductForm />
      </div>
    </Provider>
  );
}
// 11.08
export default App;
