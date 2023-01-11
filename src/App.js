import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes/Routes';

function App() {
  return (
    <div className="App">
      <div className='max-w-[1100px] mx-auto'>
           <RouterProvider router={router}></RouterProvider>
      </div>
    </div>
  );
}

export default App;
