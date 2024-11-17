"use client"
import { useCartStore } from "@/store/cartStore";
import { Asset, Keyboard, Keycap, Product, Switch } from "@/types";
import Image from 'next/image'
import {Info_Keyboard, Info_Keycap, Info_Switch} from "./infoproduct";
import { useState } from "react";

export function ProductCardKeyboard({product, key}: {product: Keyboard & Asset, key: string}){
    const addToCart = useCartStore((state) => state.addToCart)
    const [info, setInfo] = useState(true)
	function handleinfo(){
		setInfo(!info);
	}
    return(
        <>
            <div className="flex flex-col h-auto min-h-80 p-2 gap-2 rounded-xl shadow-2xl hover:bg-slate-300">
                <div onClick={handleinfo} className={`flex flex-col h-80 min-h-80 p-2 gap-2 hover:bg-slate-300`}>
                    <div id="img" className="h-[58%] w-full select-none">
                        <Image id={product.name} src={product.profile.url} draggable={false}  alt={product.shortName} height="1000" width="1000" className="h-full w-full rounded-xl hover:scale-105 duration-300 border-1 border-black"/>
                    </div>
                    <div id="name" className="flex-1 line-clamp-2 w-full h-24 font-bold text-lg text-center break-words select-none">
                        {product.name}  
                    </div>
                    <div id="price" className="w-full text-xs text-center select-none">
                        {parseInt(product.price) != 0 ? Intl.NumberFormat("vn-VN", { style: 'currency', currency: 'VND' }).format(parseInt(product.price)) : "Không còn bán"}
                    </div>
                </div>
                <button onClick={() => addToCart({product: product,quantity: 1, type: key})} id="button" className="flex flex-row w-full h-12 gap-2 items-center justify-center mt-auto self-end font-bold text-center text-sm text-white  bg-black rounded-lg hover:transition hover:-translate-y-1">
                    <p>Thêm vào giỏ hàng</p> 
                </button>
            </div>
            <Info_Keyboard isHidden={info} onExit={handleinfo} product={product} type={key}></Info_Keyboard>
        </>
    );
}
export function ProductCardKeycap({product, key}: {product: Keycap & Asset, key: string}){
    const addToCart = useCartStore((state) => state.addToCart)
    const [info, setInfo] = useState(true)
	function handleinfo(){
		setInfo(!info);
	}
    return(
        <>
            <div className="flex flex-col h-auto min-h-80 p-2 gap-2 rounded-xl shadow-2xl hover:bg-slate-300">
                <div onClick={handleinfo} className={`flex flex-col h-80 min-h-80 p-2 gap-2 hover:bg-slate-300`}>
                    <div id="img" className="h-[58%] w-full select-none">
                        <Image id={product.name} src={product.profile.url} draggable={false}  alt={product.shortName} height="1000" width="1000" className="h-full w-full rounded-xl hover:scale-105 duration-300 border-1 border-black"/>
                    </div>
                    <div id="name" className="flex-1 line-clamp-2 w-full h-24 font-bold text-lg text-center break-words select-none">
                        {product.name}  
                    </div>
                    <div id="price" className="w-full text-xs text-center select-none">
                        {parseInt(product.price) != 0 ? Intl.NumberFormat("vn-VN", { style: 'currency', currency: 'VND' }).format(parseInt(product.price)) : "Không còn bán"}
                    </div>
                </div>
                <button onClick={() => addToCart({product: product,quantity: 1, type: key})} id="button" className="flex flex-row w-full h-12 gap-2 items-center justify-center mt-auto self-end font-bold text-center text-sm text-white  bg-black rounded-lg hover:transition hover:-translate-y-1">
                    <p>Thêm vào giỏ hàng</p> 
                </button>
            </div>
            <Info_Keycap isHidden={info} onExit={handleinfo} product={product} type={key}></Info_Keycap>
            
        </>
    );
}
export function ProductCardSwitch({product, key}: {product: Switch & Asset, key: string}){
    const addToCart = useCartStore((state) => state.addToCart)
    const [info, setInfo] = useState(true)
	function handleinfo(){
		setInfo(!info);
	}
    return(
        <>
            <div className="flex flex-col h-auto min-h-80 p-2 gap-2 rounded-xl shadow-2xl hover:bg-slate-300">
                <div onClick={handleinfo} className={`flex flex-col h-80 min-h-80 p-2 gap-2 hover:bg-slate-300`}>
                    <div id="img" className="h-[58%] w-full select-none">
                        <Image id={product.name} src={product.profile.url} draggable={false}  alt={product.shortName} height="1000" width="1000" className="h-full w-full rounded-xl hover:scale-105 duration-300 border-1 border-black"/>
                    </div>
                    <div id="name" className="flex-1 line-clamp-2 w-full h-24 font-bold text-lg text-center break-words select-none">
                        {product.name}  
                    </div>
                    <div id="price" className="w-full text-xs text-center select-none">
                        {parseInt(product.price) != 0 ? Intl.NumberFormat("vn-VN", { style: 'currency', currency: 'VND' }).format(parseInt(product.price)) : "Không còn bán"}
                    </div>
                </div>
                <button onClick={() => addToCart({product: product,quantity: 1, type: key})} id="button" className="flex flex-row w-full h-12 gap-2 items-center justify-center mt-auto self-end font-bold text-center text-sm text-white  bg-black rounded-lg hover:transition hover:-translate-y-1">
                    <p>Thêm vào giỏ hàng</p> 
                </button>
            </div>
            <Info_Switch isHidden={info} onExit={handleinfo} product={product} type={key}></Info_Switch>
            
        </>
    );
}

export function ProductCard({product, key}: {product: Product, key: string}){
    const addToCart = useCartStore((state) => state.addToCart)
    const reduceQuantity = useCartStore((state) => state.reduceQuantity)
    return(
        <>
            <div className={`flex flex-row h-32 w-full p-2 gap-2 rounded-xl shadow-lg border-[1px] border-black hover:bg-slate-300`}>
                <div id="img" className="w-16 h-16 my-auto items-center selft-center select-none">
                    <Image id={product.product.name} alt={product.product.shortName} src={product.product.profile.url} width="64" height="64" draggable={false} className="h-full w-full rounded-xl border-1 border-black"/>
                </div>
                <div className="flex flex-col w-full h-full justify-between">
                    <div id="name" className="flex-grow w-full h-fit text-center">
                        <div className="line-clamp-3 font-bold text-sm select-none">
                            {product.product.shortName}
                        </div>
                    </div>
                    <div className="flex flex-row w-full justify-between">
                        <div id="price" className="w-[50%] max-w-[60%] line-clam-1 text-xs text-left my-auto select-none">
                            {Intl.NumberFormat("vn-VN",{style: 'currency', currency: 'VND'}).format(parseInt(product.product.price))}
                        </div>
                        <div className="flex flex-row w-[35%]">
                            <button className="text-xs w-4 bg-slate-200" onClick={() => reduceQuantity(product)}>
                                -    
                            </button>
                            <div className="flex-grow px-2 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)]">
                                {product.quantity}
                            </div>
                            <button className="text-xs w-4 bg-slate-200" onClick={() => addToCart(product)}>
                                +
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}