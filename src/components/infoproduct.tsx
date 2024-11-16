import { Product } from "@/types";

interface Props {
    isHidden: boolean
    onExit: () => void
    product: Product
}
export default function Info({ isHidden, onExit, product }: Props){
    return(
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
                        <div id = "pic" className="w-96 h-96 rounded-xl border-2">
                            PIC HERE
                        </div>
                        <div className="w-full h-24 border-2">
                            STH
                        </div>
                        <div className="font-bold text-lg text-center break-words select-none line-clamp-2">
                            {product.product.name}
                        </div>
                        <div className="text-md text-center break-words select-none">
                            PRICE HERE
                        </div>
                        <button id="button" className="flex flex-row w-full h-12 gap-2 items-center justify-center mt-auto self-end font-bold text-center text-sm text-white  bg-black rounded-lg hover:transition hover:-translate-y-1">
                            <p>Thêm vào giỏ hàng</p> 
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-scroll break-words select-none line-clamp-2">
                        DESCRIPTION HERE
                    </div>

                    <div className="flex flex-col ml-auto mt-14 w-72 h-fit gap-1 p-2 rounded-lg border-2 bg-black">
                        <div className="w-full h-fit text-center font-bold text-xl bg-white">
                            THÔNG SỐ KỸ THUẬT
                        </div>
                        <div className="grid grid-cols-2 gap-[2px] w-full bg-black">
                            <div className="font-bold h-8 text-center bg-white">
                                SIZE
                            </div>
                            <div className="bg-white text-center">
                                abc
                            </div>
                            <div className="font-bold h-8 text-center bg-white">
                                Thương hiệu
                            </div>
                            <div className="bg-white text-center">
                                abc
                            </div>
                            <div className="font-bold h-8 text-center bg-white">
                                Switch
                            </div>
                            <div className="bg-white text-center">
                                abc
                            </div>
                            <div className="font-bold h-8 text-center bg-white">
                                Keycap
                            </div>
                            <div className="bg-white text-center">
                                abc
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