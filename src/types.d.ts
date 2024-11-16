export interface Keyboard {
    name: string,
    shortName: string,
    brand: string,
    type: string,
    price: string,
    case: string,
    form: number,
    mode: string,
    description: string,
}

export interface Keycap {
    name: string,
    description: string,
    brand: string,
    type: string,
    price: string,
    material: string,
    shortName: string,
    layout: number
}

export interface Switch {
    shortName: string,
    name: string,
    brand: string,
    description: string,
    price: string,
    type: string,
    prelube: boolean,
    pin: string,
    force: number,
    lifeSpan: string
}

export interface Asset{
    profile: {
        url: string
    },
    pictureCollection: {
        items: {
            url: string
        }[]
    }
}

export interface Product {
    product: (Keyboard | Keycap | Switch) & Asset,
    quantity: number,
    type: string
}