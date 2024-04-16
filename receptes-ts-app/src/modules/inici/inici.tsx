import { FunctionComponent, useEffect, useState } from 'react';
import { projectFirestore } from '../../firebase/config';
import './inici.css';

// import { QuerySnapshot } from "@firebase/firestore-types";
import { Recepta } from '../recepta/recepta';

export const Inici: FunctionComponent = () => {

  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setIsPending(true)

    projectFirestore.collection('receptes').get().then(snapshot => {
      // console.log(snapshot);
      if (snapshot.empty) {
        setError('No recipes to load')
        setIsPending(false)
      } else {
        let results = []
        snapshot.docs.forEach(doc => {
          // console.log(doc)
          results.push({ ...doc.data(), id: doc.id })
        })
        setData(results)
        // console.log(data);
        setIsPending(false)
      }
    }).catch(err => {
      setError(err.message)
      setIsPending(false)
    })

  }, [])

  return (
    <div className='contingut'>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {/* {data && data.map((recepta: Recepta) => (
        <h2 key={recepta.id}>{recepta.titol}</h2>
      ))} */}
      {data && <Recepta receptes={data} />}
    </div>
  )
}