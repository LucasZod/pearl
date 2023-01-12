import { createSimpleStore } from 'react-simple-reducer'
import { createSelector } from 'reselect'

export const HomeStore = createSimpleStore(
  {
    countrys: [] as any[],
    changeStyleMenu: false,
    loadingCountry: false,
  },
  {
    fetchCountryStated: (state) => ({ ...state, loadingCountry: true }),
    fetchCountrySuccess: (state, { countrys }) => ({ ...state, loadingCountry: false, countrys }),
    fetchCountryError: (state) => ({ ...state, loadingCountry: false }),
    setChangeStyleMenu: (state, value) => ({ ...state, changeStyleMenu: value }),
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
    return countrys?.map((item) => item?.name?.common)
  }
)
