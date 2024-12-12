import './App.css';

function App() {

//########################################### Challenge 1

  const nums = [1, 2, 3, 4, 5];

  const squares = nums.map(num => num * num);

//########################################### Challenge 2

  const names = ["alice", "bob", "charlie", "danielle"]

  const formattedNames = names.map(name => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  });


//########################################### Challenge 3

  const pokemon = ["bulbasaur", "Charamander", "Squirtle"]

  const p = pokemon.map(mon => {
    return `<p>${mon}</p>`
  })



  return (
    <>
    <div>
      <h1>Squared Numbers:</h1>
      <p>{squares.join(', ')}</p>
      <hr></hr>
    </div>

    <div>
      <h1>Names Formatted:</h1>
      <p>{formattedNames.join(', ')}</p>
      <hr></hr>
    </div>

    <div>
      <h1>Paragraph:</h1>
      <p>{p.join(', ')}</p>
      <hr></hr>
    </div>
    </>
  );
}

export default App;

