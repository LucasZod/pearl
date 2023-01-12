import { ReactNode } from 'react'

export const Show = ({ condition, children }: { condition: boolean; children: any }) =>
  condition ? children : null
