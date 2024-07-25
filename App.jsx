import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import "./App.css";
import Footer from './components/Footer';
import Header from './components/Header';
import Intro from './components/Intro';
import Main from './components/Main';
import Product1 from './components/Product1';
import Section from './components/Section';
import Sidebar from './components/Sidebar';


function App()
{ 
  const [selectedTab,setSelectedTab] = useState("");
  
  return <div className='app-container'>
  <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}></Sidebar>
  <div className='content'>
   <Header ></Header>
   { selectedTab === 'Home' ? ( <Intro></Intro>) : ( <Main></Main>) }
   { selectedTab === 'Dashboard' ? (<Main></Main> ) : (<Section></Section>) }
   { selectedTab === 'Orders' ? (<Section></Section>) : (<Product1></Product1>) }
   { selectedTab === 'Orders' ? (<Product1></Product1>) : (<Footer></Footer>) }
   
   
   
   
   </div>
   </div>

 
}
export default App;