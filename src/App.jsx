import './App.css'
import Card from './components/Card/Card'

function App() {
  return (
    <>
      <Card />
      <div className="card">
        <h2>Rick Sanchez</h2>

        <div className='tags'>
          <span className='tag'>Status: Vivo</span>
          <span className='tag'>Espécie: Humana</span>
          <span className="tag">Origem: Terra C-137</span>
        </div>

        <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="Rick Sanchez"/>
      </div>
    </>
  )
}

export default App
