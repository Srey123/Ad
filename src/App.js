import './App.css'
import MainDash from './components/MainDash/MainDash';
import Table from "./components/Table/Table";
import Sidebar from './components/Sidebar';
import Imag from './components/imges';
import Table3 from './components/table3';
import Add from './components/Addcustom';


function App() {
  return (
    <div className="App">
   
      <div className="AppGlass">
      <Sidebar/>
        <MainDash/>
               </div>
              
                
      <div className='Tables' >
       <div className="one"><Table /></div>
      <div className='table2'>  <Imag/></div>
      <br></br>
      <div className="tabl3"> <Table3/></div>
    
      </div>
      <br></br>
      <center><Add/></center>
      
      
    </div>
  );
}

export default App;
