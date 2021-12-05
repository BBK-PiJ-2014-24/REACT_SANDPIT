import './App.css';

function App() {
  return (
    <div className="App">
      {/* A Border is Contained within the Box */}
      <div className='box border'>Border</div>
      {/* An Outline is NOT Contained within the Box and Spreads Out */}
      <div className='box outline'>Box</div>
    </div>
  );
}

export default App;
