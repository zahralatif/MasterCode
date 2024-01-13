/*function App() {
  return (
    <>
      <h1>Vite+React</h1>
      <p>React dərsi</p>
    </>
  );
}*/

/*function App() {
  function clickMe(){
    console.log("clicked");
  }
  return (
    <>
    <button onClick={clickMe}>Click</button>
    </>
  );
}*/

import Card from "./Card";

function App() {
  return (
    <div className="container">
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default App;

//! JSX qaydalar
//* 1. mütləq 1 root element olmalıdır. (<> </> => react fragment)
//* 2. reactda bütün taglar bağlanmalıdır. ( self closing tags => <img />)
//* 3. HTML => class, onclick, onmouseover, onmouseout; React => className, onClick, onMouseOver, onMouseOut
//? 4. data-userID => eyni html-də olduğu kimi yazılır.
