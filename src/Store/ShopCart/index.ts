import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'shopCart',
  initialState: { data: null, total: 0, totalItems: 0 } as ShopCartState,
  reducers: {
    addProduct: (state, { payload }: ShopCartPayload) => {
      console.log('aqui')
      if (typeof payload !== 'undefined') {
        if (state.data === null) {
          state.data = [payload]
        } else {
          let product = state.data.find( item => item.id === payload.id )
          if (product) {
            let products = (state.data?.filter( item => item.id != payload.id)) as Product[]
            product.amount += payload.amount
            products.push(product)
            state.data = products
          } else {
            state.data.push(payload)
          }
        }

        state.totalItems += payload.amount
        state.total += (payload.amount * payload.price)
      }
    },
    increment: (state, { payload }: ShopCartPayload) => {
      if (typeof payload !== 'undefined') {
        let products = state.data
        products?.map( item => {
          if (item.id === payload.id)
            item.amount++

          return item
        })
        state.data = products
        state.totalItems++
        state.total += payload.price
      }
    },
    decrement: (state, { payload }: ShopCartPayload) => {
      if (typeof payload !== 'undefined') {
        if (payload.amount <= 1) {
          let products = (state.data?.filter( item => item.id !== payload.id)) as Product[]
          state.data = products
        } else {
          let products = state.data
          products?.map( item => {
            if (item.id === payload.id)
              item.amount--
            return item
          })
          state.data = products
        }
        state.totalItems--
        state.total -= payload.price
      }
    }
  },
})

export const { addProduct, increment, decrement } = slice.actions

export const shopCartSelector = (state: any) => state.shopCart

export default slice.reducer

export type Product = {
  id: string | number,
  name: string | null,
  image: string | null,
  price: number,
  amount: number,
}

export type ShopCartState = {
  data: Array<Product> | null,
  total: number,
  totalItems: number,
  loading: boolean
}

type ShopCartPayload = {
  payload: Product
}
