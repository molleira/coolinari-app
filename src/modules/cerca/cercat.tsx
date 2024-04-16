import { useLocation } from 'react-router-dom'

// styles
// import './Search.css'
import { Recepta } from '../recepta/recepta'
import { useFetch } from '../../lib/useFetch'

export default function Search() {
  const queryString = useLocation().search
  const queryParams = new URLSearchParams(queryString)
  const query = queryParams.get('q')

  const url = 'http://localhost:5173/receptes?q=' + query
  const { error, isPending, data } = useFetch(url)

  return (
    <div>
      <h2 className="page-title">Recipes including "{query}"</h2>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <Recepta receptes={data} />}
    </div>
  )
}