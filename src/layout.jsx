import Footer from "./components/footer/footer";
import MobileNavBar from "./components/navbar/navbar";
import SideBar from "./components/sidebar/sidebar";
import './App.css'

 export default function Layout() {
    return (
      <div className='app'>
      <MobileNavBar/>
      <SideBar />
      <Footer/>
    </div>
    )
  };