import { FunctionComponent, useEffect, useRef, useState } from 'react';
import { useFetch } from '../../lib/useFetch';
// import { useHistory } from 'react-router-dom'
import './crea.css';
import { projectFirestore } from '../../firebase/config';
import { useNavigate } from 'react-router-dom';

export const Crea: FunctionComponent = () => {
  const [titol, setTitle] = useState('')
  const [temps, setTemps] = useState('')

  const [newIngredient, setNewIngredient] = useState('')
  const [ingredients, setIngredients] = useState([])
  
  const [pas, setPas] = useState('')
  const [instruccions, setInstruccions] = useState([])
  
  const ingredientInput = useRef(null)
  const instruccionsInput = useRef(null);

  // const { postData, data } = useFetch('http://localhost:3000/recipes', 'POST')
  // const history = useHistory()
  
  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   postData({ titol, ingredients, instruccions, temps })
  // }

const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    const doc = { titol, ingredients, instruccions, temps }

    try {
      await projectFirestore.collection('receptes').add(doc)
      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }

  const handleAdd = (e) => {
    e.preventDefault()
    const ing = newIngredient.trim()

    if (ing && !ingredients.includes(ing)) {
      setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }
    setNewIngredient('')
    ingredientInput.current.focus()
  }

  const handleAddI = (e) => {
    e.preventDefault()
    const step = pas.trim()
    console.log('step: ', step)

    if (step && !instruccions.includes(step)) {
      setInstruccions(prevPas => [...prevPas, pas])
    }
    setPas('')
    console.log('pas: ', pas)
    instruccionsInput.current.focus()
  }

  // redirect the user when we get data response
  // useEffect(() => {
  //   if (data) {
  //     history.push('/')
  //   }
  // }, [data, history])

  return (
    <div className="contingut">
      {/* <h2 className="page-title">Add a New Recipe</h2> */}
      <form onSubmit={handleSubmit}>

        <label>
          <span>Títol:</span>
          <input 
            type="text" 
            onChange={(e) => setTitle(e.target.value)}
            value={titol}
            required
          />
        </label>

        <br />

        <label>
          <span>Ingredients:</span>
          <div className="ingredients">
            <input 
              type="text" 
              onChange={(e) => setNewIngredient(e.target.value)}
              value={newIngredient}
              ref={ingredientInput}
            />
            <button onClick={handleAdd} className="btn">Afegir</button>
          </div>
        </label>
        <p>{ingredients.map(i => <em key={i}>{i}, </em>)}</p>

        <br />

        <label>
          <span>Instruccions:</span>
          <div className="instruccions">
            <input 
              type="text" 
              onChange={(e) => setPas(e.target.value)}
              value={pas}
              ref={instruccionsInput}
            />
            <button onClick={handleAddI} className="btn">Afegir</button>
          </div>
        </label>
        <p>{instruccions.map(i => <em key={i}>{i}, </em>)}</p>

        {/* <label>
          <span>Recipe Method:</span>
          <textarea 
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            required
          />
        </label> */}

        <label>
          <span>Temps:</span>
          <input 
            type="number" 
            onChange={(e) => setTemps(e.target.value)}
            value={temps}
            required 
          />
        </label>

        <button className="btn">submit</button>
      </form>
    </div>
  )
}
