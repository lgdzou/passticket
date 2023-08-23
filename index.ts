type Func = {
  a: string,
  b: number,
  c: string[]
}

type Obj = {
  d: boolean,
  e: string,
  a: string,
}

type Test = Exclude<Obj, Func>