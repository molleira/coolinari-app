// import React from 'react';
// import { GridProps } from '../../types';
// import './grid.css';

// export const Grid: React.FC<GridProps> = ({ children, columns = 12, gap = '16px', rows }) => {
//   const gridStyle = {
//     '--grid-columns': columns,
//     '--grid-gap': gap,
//     '--grid-rows': rows || 'auto',
//   } as React.CSSProperties;

//   return (
//     <div className="grid" style={gridStyle}>
//       {children}
//     </div>
//   );
// };

// import React from 'react';
// import './grid.css'; // Import the CSS file

// interface GridProps {
//   columns?: number;
//   gap?: string;
//   children: React.ReactNode;
// }

// const Grid: React.FC<GridProps> = ({ columns = 12, gap = '20px', children }) => {
//   return (
//     <div
//       className="grid"
//       style={{
//         '--columns': columns,
//         '--gap': gap,
//       }}
//     >
//       {children}
//     </div>
//   );
// };

// interface GridItemProps {
//   colSpan: number;
//   children: React.ReactNode;
// }

// const GridItem: React.FC<GridItemProps> = ({ colSpan, children }) => {
//   return (
//     <div
//       className="grid-item"
//       data-col-span={colSpan}
//       style={{ '--col-span': colSpan }}
//     >
//       {children}
//     </div>
//   );
// };

// export { Grid, GridItem };

// import React from 'react';
// import './grid.css'; // Import the CSS file

// interface GridProps {
//   columns?: number;
//   gap?: string;
//   children: React.ReactNode;
// }

// const Grid: React.FC<GridProps> = ({ columns = 12, gap = '20px', children }) => {
//   return (
//     <div
//       className="grid"
//       style={{
//         // Use a type assertion to tell TypeScript that these are valid CSS properties
//         '--columns': `${columns}`,
//         '--gap': gap,
//       } as React.CSSProperties}
//     >
//       {children}
//     </div>
//   );
// };

// interface GridItemProps {
//   colSpan: number;
//   children: React.ReactNode;
// }

// const GridItem: React.FC<GridItemProps> = ({ colSpan, children }) => {
//   return (
//     <div
//       className="grid-item"
//       data-col-span={colSpan}
//       style={{ '--col-span': `${colSpan}` } as React.CSSProperties}
//     >
//       {children}
//     </div>
//   );
// };

// export { Grid, GridItem };

import React from 'react';
import './grid.css'; // Import the CSS file

interface GridProps {
  columns?: number;
  gap?: string;
  children: React.ReactNode;
}

const Grid: React.FC<GridProps> = ({ columns = 12, gap = '20px', children }) => {
  return (
    <div
      className="grid"
      style={{
        // Use a type assertion to tell TypeScript that these are valid CSS properties
        '--columns': `${columns}`,
        '--gap': gap,
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
};

interface GridItemProps {
  colSpan: number;
  children: React.ReactNode;
}

const GridItem: React.FC<GridItemProps> = ({ colSpan, children }) => {
  return (
    <div
      className="grid-item"
      style={{ '--col-span': `${colSpan}` } as React.CSSProperties}
    >
      {children}
    </div>
  );
};

export { Grid, GridItem };

