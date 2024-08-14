import { ReactNode } from "react";

// Grid types
export interface GridProps {
  columns?: number;  // Number of columns in the grid
  gap?: string;      // Gap between columns and rows
  rows?: number;     // Optional number of rows if needed
  children: ReactNode;  // Children that will be rendered inside the grid
}

export interface GridItemProps {
  colSpan?: number;  // How many columns should the item span
  rowSpan?: number;  // How many rows should the item span
  children: ReactNode;  // Children that will be rendered inside the grid item
}

// Recepta
export interface Recepta {
  readonly id: number;
  readonly titol: string;
  readonly temps: string;
  readonly ingredients: string[];
  readonly instruccions: string[];
}