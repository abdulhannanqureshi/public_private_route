import './App.css';
import Routing from './routes';
import './scss/style.scss'
import { ToastContainer } from 'react-toastify';
function App() {

  return (
    <>
      <Routing /> 
       <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>

  );
}

export default App;
