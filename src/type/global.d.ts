export interface GoalData {
  goal: string[][];
}

export interface PolyanetParams {
  row: number;
  column: number;
}

export interface SoloonParams extends PolyanetParams {
  color: 'blue' | 'red' | 'purple' | 'white';
}

export interface ComethParams extends PolyanetParams {
  direction: 'up' | 'down' | 'right' | 'left';
}