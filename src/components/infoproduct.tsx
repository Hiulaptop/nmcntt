"use client"
import { useCartStore } from "@/store/cartStore";
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import { Asset, Keyboard, Keycap, Product, Switch } from "@/types";
import { useRef } from "react";


export function Info_Keyboard({ isHidden, onExit, product, type }: {
    isHidden: boolean
    onExit: () => void
    product: Keyboard & Asset
    type: string
}) {
    const addToCart = useCartStore((state) => state.addToCart)
    const images = product.pictureCollection.items.map((val, idx) => {
        return {
            src: val.url,
            alt: product.shortName
        }
    })
    // const images = [9, 8, 7, 6, 5].map((number) => ({
    //     src: `https://placedog.net/${number}00/${number}00?id=${number}`
    //   }));
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
                        <Carousel images={images} isLoop={true} className="" style={{ maxHeight: 384, maxWidth: 384}} hasSizeButton="topLeft" hasThumbnails={true} hasLeftButton="centerLeft" hasRightButton="centerRight"></Carousel>
                        <div className="font-bold text-lg text-center break-words select-none line-clamp-2">
                            {product.name}
                        </div>
                        <div className="text-md text-center break-words select-none">
                            {parseInt(product.price) != 0 ? Intl.NumberFormat("vn-VN", { style: 'currency', currency: 'VND' }).format(parseInt(product.price)) : "Không còn bán"}
                        </div>
                        <button id="button" onClick={() => { addToCart({ product: product, quantity: 1, type: type }) }} className="flex flex-row w-full h-12 gap-2 items-center justify-center mt-auto self-end font-bold text-center text-sm text-white  bg-black rounded-lg hover:transition hover:-translate-y-1">
                            <p>Thêm vào giỏ hàng</p>
                        </button>
                    </div>

                    <div className="flex-1 flex flex-col overflow-y-scroll break-words select-none">
                        <div className="w-full text-center text-2xl font-extrabold pb-2">
                            Mô tả sản phẩm
                        </div>

                        {(product.description).split('\n').map((i, key) => {
                            return <div key={key}>{i}</div>
                        })}
                    </div>

                    <div className="flex flex-col ml-auto mt-14 w-72 h-fit gap-1 p-2 rounded-lg border-2 bg-black">
                        <div className="w-full h-fit text-center font-bold text-xl bg-white">
                            THÔNG SỐ KỸ THUẬT
                        </div>
                        <div className="flex flex-col gap-[2px] w-full bg-black">
                            <div className="flex flex-row h-fit w-full gap-1 items-center justify-center bg-white">
                                <div className="font-bold w-40 text-center">
                                    Thương hiệu
                                </div>
                                <div className="flex-1 text-center">
                                    {product.brand}
                                </div>
                            </div>
                            <div className="flex flex-row h-fit w-full gap-1 items-center justify-center bg-white">
                                <div className="font-bold w-40 text-center">
                                    Mode
                                </div>
                                <div className="flex-1 text-center">
                                    {product.mode}
                                </div>
                            </div>
                            <div className="flex flex-row h-fit w-full gap-1 items-center justify-center bg-white">
                                <div className="font-bold w-40 text-center">
                                    Keyboard type
                                </div>
                                <div className="flex-1 text-center">
                                    {product.type}
                                </div>
                            </div>
                            <div className="flex flex-row h-fit w-full gap-1 items-center justify-center bg-white">
                                <div className="font-bold w-40 text-center">
                                    Loại case
                                </div>
                                <div className="flex-1 text-center">
                                    {product.case}
                                </div>
                            </div>
                            <div className="flex flex-row h-fit w-full gap-1 items-center justify-center bg-white">
                                <div className="font-bold w-40 text-center">
                                    Form của keyboard
                                </div>
                                <div className="flex-1 text-center">
                                    {product.form}% 
                                </div>
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
    const images = product.pictureCollection.items.map((val, idx) => {
        return {
            src: val.url,
            alt: product.shortName
        }
    })
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
                    <Carousel images={images} isLoop={true} className="" style={{ maxHeight: 384, maxWidth: 384}} hasSizeButton="topLeft" hasThumbnails={true} hasLeftButton="centerLeft" hasRightButton="centerRight"></Carousel>
                        <div className="font-bold text-lg text-center break-words select-none line-clamp-2">
                            {product.name}
                        </div>
                        <div className="text-md text-center break-words select-none">
                            {parseInt(product.price) != 0 ? Intl.NumberFormat("vn-VN", { style: 'currency', currency: 'VND' }).format(parseInt(product.price)) : "Không còn bán"}
                        </div>
                        <button id="button" onClick={() => { addToCart({ product: product, quantity: 1, type: type }) }} className="flex flex-row w-full h-12 gap-2 items-center justify-center mt-auto self-end font-bold text-center text-sm text-white  bg-black rounded-lg hover:transition hover:-translate-y-1">
                            <p>Thêm vào giỏ hàng</p>
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-scroll break-words select-none">

                        <div className="w-full text-center text-2xl font-extrabold pb-2">
                            Mô tả sản phẩm
                        </div>

                        {product.description.split('\n').map((i, key) => {
                            return <div key={key}>{i}</div>
                        })}
                    </div>

                    <div className="flex flex-col ml-auto mt-14 w-72 h-fit gap-1 p-2 rounded-lg border-2 bg-black">
                        <div className="w-full h-fit text-center font-bold text-xl bg-white">
                            THÔNG SỐ KỸ THUẬT
                        </div>

                        <div className="flex flex-col gap-[2px] w-full bg-black">
                            <div className="flex flex-row h-fit w-full gap-1 items-center justify-center bg-white">
                                <div className="font-bold w-40 text-center">
                                    Thương hiệu
                                </div>
                                <div className="flex-1 text-center">
                                    {product.brand}
                                </div>
                            </div>
                            <div className="flex flex-row h-fit w-full gap-1 items-center justify-center bg-white">
                                <div className="font-bold w-40 text-center">
                                    Loại switch
                                </div>
                                <div className="flex-1 text-center">
                                    {product.type}
                                </div>
                            </div>
                            <div className="flex flex-row h-fit w-full gap-1 items-center justify-center bg-white">
                                <div className="font-bold w-40 text-center">
                                    Pre-lubed
                                </div>
                                <div className="flex-1 text-center">
                                    {product.prelube ? "Có" : "Không"}
                                </div>
                            </div>
                            <div className="flex flex-row h-fit w-full gap-1 items-center justify-center bg-white">
                                <div className="font-bold w-40 text-center">
                                    Số pin
                                </div>
                                <div className="flex-1 text-center">
                                    {product.pin}
                                </div>
                            </div>
                            <div className="flex flex-row h-fit w-full gap-1 items-center justify-center bg-white">
                                <div className="font-bold w-40 text-center">
                                    Lực nhấn
                                </div>
                                <div className="flex-1 text-center">
                                    {product.force}g
                                </div>
                            </div>
                            <div className="flex flex-row h-fit w-full gap-1 items-center justify-center bg-white">
                                <div className="font-bold w-40 text-center">
                                    Số lần nhấn
                                </div>
                                <div className="flex-1 text-center">
                                    {product.lifeSpan} triệu lần bấm.
                                </div>
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
    const images = product.pictureCollection.items.map((val, idx) => {
        return {
            src: val.url,
            alt: product.shortName
        }
    })
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
                    <Carousel images={images} isLoop={true} className="" style={{ maxHeight: 384, maxWidth: 384}} hasSizeButton="topLeft" hasThumbnails={true} hasLeftButton="centerLeft" hasRightButton="centerRight"></Carousel>
                        <div className="font-bold text-lg text-center break-words select-none line-clamp-2">
                            {product.name}
                        </div>
                        <div className="text-md text-center break-words select-none">
                            {parseInt(product.price) != 0 ? Intl.NumberFormat("vn-VN", { style: 'currency', currency: 'VND' }).format(parseInt(product.price)) : "Không còn bán"}
                        </div>
                        <button id="button" onClick={() => { addToCart({ product: product, quantity: 1, type: type }) }} className="flex flex-row w-full h-12 gap-2 items-center justify-center mt-auto self-end font-bold text-center text-sm text-white  bg-black rounded-lg hover:transition hover:-translate-y-1">
                            <p>Thêm vào giỏ hàng</p>
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-scroll break-words select-none">

                        <div className="w-full text-center text-2xl font-extrabold pb-2">
                            Mô tả sản phẩm
                        </div>

                        {(product.description).split('\n').map((i, key) => {
                            return <div key={key}>{i}</div>
                        })}
                    </div>

                    <div className="flex flex-col ml-auto mt-14 w-72 h-fit gap-1 p-2 rounded-lg border-2 bg-black">
                        <div className="w-full h-fit text-center font-bold text-xl bg-white">
                            THÔNG SỐ KỸ THUẬT
                        </div>

                        <div className="flex flex-col gap-[2px] w-full bg-black">
                            <div className="flex flex-row h-fit w-full gap-1 items-center justify-center bg-white">
                                <div className="font-bold w-40 text-center">
                                    Thương hiệu
                                </div>
                                <div className="flex-1 text-center">
                                    {product.brand}
                                </div>
                            </div>
                            <div className="flex flex-row h-fit w-full gap-1 items-center justify-center bg-white">
                                <div className="font-bold w-40 text-center">
                                    Loại Keycap
                                </div>
                                <div className="flex-1 text-center">
                                    {product.type}
                                </div>
                            </div>
                            <div className="flex flex-row h-fit w-full gap-1 items-center justify-center bg-white">
                                <div className="font-bold w-40 text-center">
                                    Chất liệu
                                </div>
                                <div className="flex-1 text-center">
                                    {product.material}
                                </div>
                            </div>
                            <div className="flex flex-row h-fit w-full gap-1 items-center justify-center bg-white">
                                <div className="font-bold w-40 text-center">
                                    Layout
                                </div>
                                <div className="flex-1 text-center">
                                    {product.layout}
                                </div>
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