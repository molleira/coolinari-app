import React from 'react';
import { GridItemProps } from '../../types';
import './grid.css';

export const GridItem: React.FC<GridItemProps> = ({ children, colSpan = 1, rowSpan = 1 }) => {
  const gridItemStyle = {
    '--grid-item-col-span': colSpan,
    '--grid-item-row-span': rowSpan,
  } as React.CSSProperties;

  return (
    <div className="grid-item" style={gridItemStyle}>
      {children}
    </div>
  );
};
