declare global {
  export type Nullable<T> = T | null;
  export type ValuesUnion<T> = T[keyof T];
  export type KeysUnion<T> = keyof T;
}

export {};
