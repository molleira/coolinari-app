// import { Link } from 'react-router-dom'
// // import { useTheme } from '../hooks/useTheme'

import { Grid, GridItem } from "../patterns/grid";

// // styles
// // import './RecipeList.css'
// import './recepta.css';



// export function Recepta({ receptes }) {
//   // const { mode } = useTheme()

//   if (receptes.length === 0) {
//     return <div className="error">Hi ha hagut un error...</div>
//   }

//   return (
//     <div className="recipe-list">
//       {receptes.map(recepta => (
//         <div key={recepta.id} className='recepta'>
//           <h1>{recepta.titol}</h1>
//           <p>{recepta.temps}</p>
//           <div className='llista'>
//             <div className='fila01'>
//                 {recepta.ingredients.map(ingredient => <p key={ingredient}>{[ingredient]}</p>)}
//             </div>
          
//           {/* <div className='fila02'> */}
//             {/* {recepta.ingredients.map(ingredient => <p key={ingredient}>{[ingredient]}</p>)} */}
//           {/* </div> */}

//             <div className='fila03'>
//               {recepta.instruccions.map(pas => <p key={pas}>{`. ${[pas]}`}</p>)}
//             </div>
//           </div>

//           {/* <div>{recipe.method.substring(0, 100)}...</div> */}
//           {/* <Link to={`/recipes/${recipe.id}`}>Cook This</Link> */}
//           <div className='separador'></div>
//         </div>
//       ))}
//     </div>
//   )
// }

// import React from 'react';
// import { Grid, GridItem } from './GridComponents'; // Import your Grid components

export function Recepta({ receptes }) {
  if (receptes.length === 0) {
    return <div className="error">Hi ha hagut un error...</div>;
  }

  return (
    <div className="recipe-list">
      {receptes.map(recepta => (
        <div key={recepta.id} className='recepta'>
          <h1>{recepta.titol}</h1>
          <p>{recepta.temps}</p>
          <Grid columns={12} gap="20px"> {/* Use Grid component */}
            <GridItem colSpan={4}> {/* Span 4 columns */}
              <div className='fila01'>
                {recepta.ingredients.map(ingredient => <p key={ingredient}>{ingredient}</p>)}
              </div>
            </GridItem>

            <GridItem colSpan={8}> {/* Span 8 columns */}
              <div className='fila03'>
                {recepta.instruccions.map(pas => <p key={pas}>{`. ${pas}`}</p>)}
              </div>
            </GridItem>
          </Grid>
          <div className='separador'></div>
        </div>
      ))}
    </div>
  );
}
