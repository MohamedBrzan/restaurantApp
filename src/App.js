import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'flag-icons/css/flag-icons.min.css';

import Header from './common/Header/Header';
import Interface from './interface/Interface';
import { useGetCategoryQuery } from './store/apis/Categories';
import { useGetInfoQuery } from './store/apis/Info';
import { useGetProductQuery } from './store/apis/Product';
import { useEffect } from 'react';

function App() {
  const { data: category } = useGetCategoryQuery();
  const { data: info } = useGetInfoQuery();
  const { data: product } = useGetProductQuery();

  useEffect(() => {
    console.log('category');
    console.log(category);
    console.log('info');
    console.log(info);
    console.log('product');
    console.log(product);
  }, [category, info, product]);
  return (
    <div className='App'>
      <Header />

      <main>
        <Interface />
      </main>
    </div>
  );
}

export default App;
