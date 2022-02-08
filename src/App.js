import './App.css';
import Table from './components/Table/Table';

const tableList = [2,3,4,5,6,7,8,9]
function App() {
  return (
    <div className="App">
      <div className='head'>
        <div>
          <span className='mark'>x</span>
          <span className='empty'></span>
          <span className='line'></span>
          <span className='empty'></span>
          <span className='mark'>x</span>
        </div>
        <div className='word'>
          <p style={{fontSize:"56px"}}>九九乘法表</p>
          <p style={{fontSize:"24px"}}>MULTIPLICATION CHART</p>
        </div>
      
      <div>
          <span className='mark'>x</span>
          <span className='empty'></span>
          <span className='line'></span>
          <span className='empty'></span>
          <span className='mark'>x</span>
        </div>
        </div>
      {tableList.map(i => <Table value= {i}/>)}
    </div>
  );
}

export default App;
