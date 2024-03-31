import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AdminRoute from './routes/admin';

function App() {
  return (
   <>
   <BrowserRouter>
   <AdminRoute/>
   </BrowserRouter>
   </>
  );
}

export default App;
