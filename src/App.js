import './App.css';
import Home from './Base/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Portifolio from './Portifolio/Home';
import HeaderGeral from './Portifolio/HeaderGeral/header';


const router = createBrowserRouter([
  {
    path:'/',
    element: 
    <div>
      <HeaderGeral/>
    </div>
    // element: <div><Home/></div>
  },{
    path:'prod',
    element:<div><Home/></div>
  }
])



function App() {

  return (
    <>
    <div>
      <RouterProvider router={router}/>
    </div>
    </>
  )
}

export default App;
