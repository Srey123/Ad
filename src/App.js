import './App.css'
import MainDash from './components/MainDash/MainDash';
import RightSide from './components/RigtSide/RightSide';
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
               <div className='right'>
                 <RightSide/>
                  </div>
                </div>
        <br></br>
      <div className='table2'>  <Imag/></div>
      <br></br>
      <div className="tabl3"> <Table3/></div>
      <br></br>
      <center><Add/></center>
      
      
    </div>
  );
}

export default App;
