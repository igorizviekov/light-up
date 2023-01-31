export interface ISpoilerChild {
  label: string;
  children: string[];
}

export interface ISpoilerProps {
  label: string;
  children: ISpoilerChild[];
}
