import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HeaderGeral from './Portifolio/HeaderGeral/header';
import HomeProjects from './project-home';


const router = createBrowserRouter([
  {
    path:'/',
    element: 
    <div className='container-central'>
      <HeaderGeral/>
    </div>
    // element: <div><Home/></div>
  },{
    path:'prod',
    element:
    <div className='container-central'>
      <HomeProjects/>
    </div>
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
