import { createSimpleStore } from 'react-simple-reducer'
import { createSelector } from 'reselect'

export const HomeStore = createSimpleStore(
  {
    countrys: [] as any[],
    loadingCountry: false,
  },
  {
    fetchCountryStated: (state) => ({ ...state, loadingCountry: true }),
    fetchCountrySuccess: (state, { countrys }) => ({ ...state, loadingCountry: false, countrys }),
    fetchCountryError: (state) => ({ ...state, loadingCountry: false }),
  },
  {
    thunks: {
      getAllCountry: () => {
        return async (dispatch: any, getState: any) => {
          try {
            dispatch(HomeStore.actions.fetchCountryStated())
            const countrys = await fetch('https://restcountries.com/v3.1/all').then((response) =>
              response.json()
            )
            dispatch(HomeStore.actions.fetchCountrySuccess({ countrys }))
          } catch (error) {
            dispatch(HomeStore.actions.fetchCountryError())
            console.log(error)
          }
        }
      },
    },
  }
)
type TState = ReturnType<typeof HomeStore.useState>
export const selectJustCountryName = createSelector(
  (s: TState) => s.countrys,
  (countrys) => {
    console.log(countrys)
    return countrys?.map((item) => item?.name?.common)
  }
)
