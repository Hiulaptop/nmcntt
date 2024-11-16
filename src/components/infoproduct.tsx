"use client"
import { useCartStore } from "@/store/cartStore";
import { Asset, Keyboard, Keycap, Product, Switch } from "@/types";


export function Info_Keyboard({ isHidden, onExit, product, type }: {
    isHidden: boolean
    onExit: () => void
    product: Keyboard & Asset
    type: string
}) {
    const addToCart = useCartStore((state) => state.addToCart)
    return (
        <>
            <div onClick={onExit} className={`${isHidden ? "hidden" : "visible"} fixed w-full h-full top-0 left-0 backdrop-blur-sm`}>
            </div>
            <div className={`${isHidden ? "hidden" : "visible"} fixed w-[60%] h-[700px] left-96 top-40 p-2 rounded-xl info shadow-2xl border-1 border-black bg-white z-10`}>
                <button onClick={onExit} className="fixed w-16 h-12 font-bold text-center p-2 top-2 right-2 rounded-lg hover:-translate-y-1 hover:bg-red-500 hover:text-white bg-slate-300">
                    Đóng
                </button>
                <div className="flex flex-row w-full h-full gap-2">
                    {/* pic */}
                    <div className="flex flex-col w-96 h-full gap-2 ">
                        <div id="pic" className="w-96 h-96 rounded-xl border-2">
                            PIC HERE
                        </div>
                        <div className="w-full h-24 border-2">
                            STH
                        </div>
                        <div className="font-bold text-lg text-center break-words select-none line-clamp-2">
                            {product.name}
                        </div>
                        <div className="text-md text-center break-words select-none">
                            {Intl.NumberFormat("vn-VN", { style: 'currency', currency: 'VND' }).format(parseInt(product.price))}
                        </div>
                        <button id="button" onClick={() => { addToCart({ product: product, quantity: 1, type: type }) }} className="flex flex-row w-full h-12 gap-2 items-center justify-center mt-auto self-end font-bold text-center text-sm text-white  bg-black rounded-lg hover:transition hover:-translate-y-1">
                            <p>Thêm vào giỏ hàng</p>
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-scroll break-words select-none">
                        {(product.description).split('\n').map((i, key) => {
                            return <div key={key}>{i}</div>
                        })}
                    </div>

                    <div className="flex flex-col ml-auto mt-14 w-72 h-fit gap-1 p-2 rounded-lg border-2 bg-black">
                        <div className="w-full h-fit text-center font-bold text-xl bg-white">
                            THÔNG SỐ KỸ THUẬT
                        </div>
                        <div className="grid grid-cols-2 gap-[2px] w-full bg-black">
                            <div className="font-bold h-8 text-center bg-white">
                                Thương hiệu
                            </div>
                            <div className="bg-white text-center">
                                {product.brand}
                            </div>
                            <div className="font-bold h-8 text-center bg-white">
                                Mode
                            </div>
                            <div className="bg-white text-center">
                                {product.mode}
                            </div>
                            <div className="font-bold h-8 text-center bg-white">
                                Keyboard type
                            </div>
                            <div className="bg-white text-center">
                                {product.type}
                            </div>
                            <div className="font-bold h-8 text-center bg-white">
                                Loại case
                            </div>
                            <div className="bg-white text-center">
                                {product.case}
                            </div>
                            <div className="font-bold h-8 text-center bg-white">
                                Form của keyboard
                            </div>
                            <div className="bg-white text-center">
                                {product.form}%
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
export function Info_Switch({ isHidden, onExit, product, type }: {
    isHidden: boolean
    onExit: () => void
    product: Switch & Asset
    type: string
}) {
    const addToCart = useCartStore((state) => state.addToCart)
    return (
        <>
            <div onClick={onExit} className={`${isHidden ? "hidden" : "visible"} fixed w-full h-full top-0 left-0 backdrop-blur-sm`}>
            </div>
            <div className={`${isHidden ? "hidden" : "visible"} fixed w-[60%] h-[700px] left-96 top-40 p-2 rounded-xl info shadow-2xl border-1 border-black bg-white z-10`}>
                <button onClick={onExit} className="fixed w-16 h-12 font-bold text-center p-2 top-2 right-2 rounded-lg hover:-translate-y-1 hover:bg-red-500 hover:text-white bg-slate-300">
                    Đóng
                </button>
                <div className="flex flex-row w-full h-full gap-2">
                    {/* pic */}
                    <div className="flex flex-col w-96 h-full gap-2 ">
                        <div id="pic" className="w-96 h-96 rounded-xl border-2">
                            PIC HERE
                        </div>
                        <div className="w-full h-24 border-2">
                            STH
                        </div>
                        <div className="font-bold text-lg text-center break-words select-none line-clamp-2">
                            {product.name}
                        </div>
                        <div className="text-md text-center break-words select-none">
                            {Intl.NumberFormat("vn-VN", { style: 'currency', currency: 'VND' }).format(parseInt(product.price))}
                        </div>
                        <button id="button" onClick={() => { addToCart({ product: product, quantity: 1, type: type }) }} className="flex flex-row w-full h-12 gap-2 items-center justify-center mt-auto self-end font-bold text-center text-sm text-white  bg-black rounded-lg hover:transition hover:-translate-y-1">
                            <p>Thêm vào giỏ hàng</p>
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-scroll break-words select-none">
                        {product.description.split('\n').map((i, key) => {
                            return <div key={key}>{i}</div>
                        })}
                    </div>

                    <div className="flex flex-col ml-auto mt-14 w-72 h-fit gap-1 p-2 rounded-lg border-2 bg-black">
                        <div className="w-full h-fit text-center font-bold text-xl bg-white">
                            THÔNG SỐ KỸ THUẬT
                        </div>
                        <div className="grid grid-cols-2 gap-[2px] w-full bg-black">
                            <div className="font-bold h-8 text-center bg-white">
                                Thương hiệu
                            </div>
                            <div className="bg-white text-center">
                                {product.brand}
                            </div>
                            <div className="font-bold h-8 text-center bg-white">
                                Loại Switch
                            </div>
                            <div className="bg-white text-center">
                                {product.type}
                            </div>
                            <div className="font-bold h-8 text-center bg-white">
                                Pre-lubed
                            </div>
                            <div className="bg-white text-center">
                                {product.prelube ? "Có" : "Không"}
                            </div>
                            <div className="font-bold h-8 text-center bg-white">
                                Số pin
                            </div>
                            <div className="bg-white text-center">
                                {product.pin}
                            </div>
                            <div className="font-bold h-8 text-center bg-white">
                                Lực nhấn
                            </div>
                            <div className="bg-white text-center">
                                {product.force}g
                            </div>
                            <div className="font-bold h-8 text-center bg-white">
                                Số lần nhấn
                            </div>
                            <div className="bg-white text-center">
                                {product.lifeSpan} triệu lần bấm.
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
export function Info_Keycap({ isHidden, onExit, product, type }: {
    isHidden: boolean
    onExit: () => void
    product: Keycap & Asset
    type: string
}) {
    const addToCart = useCartStore((state) => state.addToCart)
    return (
        <>
            <div onClick={onExit} className={`${isHidden ? "hidden" : "visible"} fixed w-full h-full top-0 left-0 backdrop-blur-sm`}>
            </div>
            <div className={`${isHidden ? "hidden" : "visible"} fixed w-[60%] h-[700px] left-96 top-40 p-2 rounded-xl info shadow-2xl border-1 border-black bg-white z-10`}>
                <button onClick={onExit} className="fixed w-16 h-12 font-bold text-center p-2 top-2 right-2 rounded-lg hover:-translate-y-1 hover:bg-red-500 hover:text-white bg-slate-300">
                    Đóng
                </button>
                <div className="flex flex-row w-full h-full gap-2">
                    {/* pic */}
                    <div className="flex flex-col w-96 h-full gap-2 ">
                        <div id="pic" className="w-96 h-96 rounded-xl border-2">
                            PIC HERE
                        </div>
                        <div className="w-full h-24 border-2">
                            STH
                        </div>
                        <div className="font-bold text-lg text-center break-words select-none line-clamp-2">
                            {product.name}
                        </div>
                        <div className="text-md text-center break-words select-none">
                            {Intl.NumberFormat("vn-VN", { style: 'currency', currency: 'VND' }).format(parseInt(product.price))}
                        </div>
                        <button id="button" onClick={() => { addToCart({ product: product, quantity: 1, type: type }) }} className="flex flex-row w-full h-12 gap-2 items-center justify-center mt-auto self-end font-bold text-center text-sm text-white  bg-black rounded-lg hover:transition hover:-translate-y-1">
                            <p>Thêm vào giỏ hàng</p>
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-scroll break-words select-none">
                        {(product.description).split('\n').map((i, key) => {
                            return <div key={key}>{i}</div>
                        })}
                    </div>

                    <div className="flex flex-col ml-auto mt-14 w-72 h-fit gap-1 p-2 rounded-lg border-2 bg-black">
                        <div className="w-full h-fit text-center font-bold text-xl bg-white">
                            THÔNG SỐ KỸ THUẬT
                        </div>
                        <div className="grid grid-cols-2 gap-[2px] w-full bg-black">
                            <div className="font-bold h-8 text-center bg-white">
                                Thương hiệu
                            </div>
                            <div className="bg-white text-center">
                                {product.brand}
                            </div>
                            <div className="font-bold h-8 text-center bg-white">
                                Loại Keycap
                            </div>
                            <div className="bg-white text-center">
                                {product.type}
                            </div>
                            <div className="font-bold h-8 text-center bg-white">
                                Chất liệu
                            </div>
                            <div className="bg-white text-center">
                                {product.material}
                            </div>
                            <div className="font-bold h-8 text-center bg-white">
                                Layout
                            </div>
                            <div className="bg-white text-center">
                                {product.layout}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

// SIZE
// Thuong HIEU
// SWITCH
// KEYCAP