// import logo from './logo.svg';
import './App.css';
import Answer from './component/Answer';



function App() {

  let op = ["Android","Blackberry","iphone","windowsphone"]
  let manu = ["samsung","htc","micromax","Apple"]
  return (
    <div className="App">
     {/* 1 st method */}
      {/* <h2>Mobile Operating System</h2>
      <Answer point="Android" />
      <Answer point="Blackberry" />
      <Answer point="iphone" />
      <Answer point="windowsphone" />
      <h2>Mobile Manufactureres</h2>
      <Answer point="Samsung" />
      <Answer point="htc" />
      <Answer point="micromax" />
      <Answer point="Apple" /> */}

      {/* 2nd method */}
       <h2>Mobile Operating System</h2>
  {op.map((elem) => (
    <Answer point={elem} />
  ))}
   <h2>Mobile Manufactureres</h2>

  {manu.map(elem =>(
    <Answer point={elem} />
  ))}
   

 

     
    </div>
  );
}

export default App;
