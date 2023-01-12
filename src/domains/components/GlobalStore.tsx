import { createSimpleStore } from 'react-simple-reducer'

export const GlogalStore = createSimpleStore(
  {
    value: 0,
  },
  {
    incrementValue: (state) => ({ ...state, value: state.value + 1 }),
  }
)
