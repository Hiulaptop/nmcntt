import { useCartStore } from "@/store/cartStore";
import { useState } from "react";

interface Props {
    isHidden: boolean
    onExit: () => void
}
export default function Form({ isHidden, onExit }: Props){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [locate, setLocate] = useState("")
    const restartCart = useCartStore((state) => state.restartCart)

    return(
        <>
            <div onClick={onExit} className={`${isHidden ? "hidden" : "visible"} fixed w-screen h-screen top-0 -left-[1580px] backdrop-blur-sm z-30`}>
            </div>
            <div className={`${isHidden ? "hidden" : "visible"} fixed w-[1000px] h-[700px] -left-[1100px] top-20 p-2 rounded-xl info shadow-2xl border-1 border-black bg-white z-50`}>
                <button onClick={onExit} className="fixed w-16 h-12 font-bold text-center p-2 top-2 right-2 rounded-lg hover:-translate-y-1 hover:bg-red-500 hover:text-white bg-slate-300">
                    Đóng
                </button>
                <div className="flex flex-col mx-auto w-[50%] h-full gap-2">
                    <div className="w-full text-center text-[30px] font-extrabold">
                        Thông tin giao hàng.
                    </div>
                    <div className="flex flex-col gap-1 w-full">
                        <div className="ml-8 text-xl font-extrabold">
                            Họ và tên
                        </div>
                        <input className="flex px-2 w-[90%] h-10 mx-auto rounded-2xl border-2 border-black" type="text" id="fullname" name="fullname" value={name} autoFocus onChange={(e) => setName(e.target.value)}></input>
                    </div>
                    <div className="flex flex-col gap-1 w-full">
                        <div className="ml-8 text-xl font-extrabold">
                            Số điện thoại
                        </div>
                        <input className="flex px-2 w-[90%] h-10 mx-auto rounded-2xl border-2 border-black" type="text" id="fullname" name="fullname" value={phone} onChange={(e) => setPhone(e.target.value)}></input>
                    </div>
                    <div className="flex flex-col gap-1 w-full">
                        <div className="ml-8 text-xl font-extrabold">
                            Email
                        </div>
                        <input className="flex px-2 w-[90%] h-10 mx-auto rounded-2xl border-2 border-black" type="email" id="fullname" name="fullname" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    </div>
                    <div className="flex flex-col gap-1 w-full">
                        <div className="ml-8 text-xl font-extrabold">
                            Địa chỉ
                        </div>
                        <input className="flex px-2 w-[90%] h-10 mx-auto rounded-2xl border-2 border-black" type="text" id="fullname" name="fullname" value={locate} onChange={(e) => setLocate(e.target.value)}></input>
                    </div>
                </div>
            </div>
        </>
    );
}
