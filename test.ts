type Para<T extends (...args: any[]) => any> = T extends (
  ...args: infer A
) => any
  ? A
  : never

type a = Para<(a: string, b: number) => void>
