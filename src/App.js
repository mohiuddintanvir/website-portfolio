import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes';

function App() {
  return (
    <div className='bg-white h-full' >
   <RouterProvider router={router} />
    </div>
  );
}

export default App;
