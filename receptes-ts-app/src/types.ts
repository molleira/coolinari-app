export interface Recepta {
  readonly id: number;
  readonly titol: string;
  readonly temps: string;
  readonly ingredients: string[];
  readonly instruccions: string[];
}