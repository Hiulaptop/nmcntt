import { Product } from "@/types";
import { create  } from "zustand";
import { persist } from "zustand/middleware";


interface State {
    cart: Product[],
    totalItems: number,
    totalPrice: number
}

interface Action {
    addToCart: (product: Product) => void,
    removeFromCart: (product: Product) => void,
    reduceQuantity: (product: Product) => void,
    restartCart: (product: Product) => void
}

export const useCartStore = create(
    persist<State & Action>(
        (set, get) => ({
            cart: [],
            totalItems: 0,
            totalPrice: 0,
            addToCart: (product: Product) => {
                const cart = get().cart
                const cartItem = cart.find(item => item.product.name === product.product.name)

                if (cartItem) {
                    const updatedCart = cart.map(item => item.product.name == product.product.name ? { ...item, quantity: item.quantity + 1 } : item)
                    set((state) => ({
                        cart: updatedCart,
                        totalItems: (state.totalItems ? state.totalItems : 0) + 1,
                        totalPrice: (state.totalPrice ? state.totalPrice : 0) + parseInt(product.product.price)
                    }))
                }
                else {
                    const updateCart = [...cart, {...product,quantity: 1}]
                    set((state) => ({
                        cart: updateCart,
                        totalItems: (state.totalItems ? state.totalItems : 0) + 1,
                        totalPrice: (state.totalPrice ? state.totalPrice : 0) + parseInt(product.product.price)
                    }))
                }
            },
            removeFromCart: (product: Product) => {
                set((state) => ({
                    cart: state.cart.filter(item => item.product.name != product.product.name),
                    totalItems: (state.totalItems ? state.totalItems : 0) - 1,
                    totalPrice: (state.totalPrice ? state.totalPrice : 0) - parseInt(product.product.price)
                }))
            },
            reduceQuantity(product: Product) {
                const cart = get().cart
                const cartItem = cart.find(item => item.product.name === product.product.name)
                if(cartItem){
                    if(cartItem.quantity == 1){
                        set((state) => ({
                            cart: state.cart.filter(item => item.product.name != product.product.name),
                            totalItems: (state.totalItems ? state.totalItems : 0) - 1,
                            totalPrice: (state.totalPrice ? state.totalPrice : 0) - parseInt(product.product.price)
                        }))
                    }
                    else{
                        const updatedCart = cart.map(item => item.product.name == product.product.name ? { ...item, quantity: item.quantity - 1 } : item)
                        set((state) => ({
                            cart: updatedCart,
                            totalItems: (state.totalItems ? state.totalItems : 0) - 1,
                            totalPrice: (state.totalPrice ? state.totalPrice : 0) - parseInt(product.product.price)
                        }))
                    }
                }
            },
            restartCart(product) {
                set((state) => ({
                    cart: [],
                    totalItems: 0,
                    totalPrice: 0
                }))
            },
        }),
        {
            name: "cart"
        }
    )
)