import './App.css'
import Footer from './components/footer/footer'
import MobileNavBar from './components/navbar/navbar';
import SideBar from './components/sidebar/sidebar'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  

  return (
    <div className='app'>
      <MobileNavBar/>
      <SideBar/>
      <Footer/>
    </div>
  )
}

export default App
