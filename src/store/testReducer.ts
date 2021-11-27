import { testAPI } from "../api/api"

export const fetchDataAC = (items: Array<itemType>) => {
    return {
        type: 'TEST/fetchData',
        items
    } as const
}

export const selectMinPriceAC = () => {
    return {
        type: 'TEST/selectMinPrice'
    } as const
}

export type fetchDataAT = ReturnType<typeof fetchDataAC>
export type selectMinPriceAT = ReturnType<typeof selectMinPriceAC>

export type actionType = fetchDataAT | selectMinPriceAT

export type itemType = {
    name: string,
    category: string,
    price: number,
}

type InitStateType = {
    items: Array<itemType>,
    minPriceItem: itemType
}

export const initState: InitStateType = {
    items: [],
    minPriceItem: {
        name: '',
        category: '',
        price: 0,
    }
}

export const testReducer = (state: InitStateType = initState, action: actionType): InitStateType => {
    switch(action.type) {
        case 'TEST/fetchData': {
            return {...state, items: action.items}
        }
        case 'TEST/selectMinPrice': {
            let copyState = {...state}
            let minPriceItem = copyState.items.reduce((acc, el) => acc.price < el.price ? acc: el)
            copyState.minPriceItem = minPriceItem
            return copyState
        }
        default: {
            return state
        }
    }
}

//thunk
export const getTC = () => {
    return (dispatch: any) => {
        testAPI.getResponse()
            .then(res => {
                dispatch(fetchDataAC(res.data))
                dispatch(selectMinPriceAC())
            })
            .catch(e => {
                alert('error')
            })
    }
}