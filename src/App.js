
import React,{useState} from 'react';
import "./App.css"
function App () {
  const [life_of_player, setLife_of_player] = useState(0);
  return(
<div className='App'>
<header>
  <h2>Counter app for mario player</h2>
  </header>
    <h2>Current value of player is {life_of_player}</h2>
    <button className ="button" onClick={ () => setLife_of_player(0)}> Reset </button>
    <button className ="button" onClick={ () => (life_of_player >= 10 ? "": setLife_of_player(life_of_player + 1))}>Increase the life of player</button>
    <button className ="button" onClick={ () => (life_of_player >= 10 ? "":setLife_of_player(life_of_player - 1))}>Decrease the life of player</button>
</div>
  )
}
export default App
