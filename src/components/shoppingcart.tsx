"use client"

import { useState } from "react";
import { Drawer } from "./drawer";
import { useCartStore } from "@/store/cartStore";
import { ProductCard } from "./productscard";
import Form from "./form";

export function Cart() {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false)

	const cart = useCartStore((state) => state.cart)
	const totalPrice = useCartStore((state) => state.totalPrice)
	const totalItems = useCartStore((state) => state.totalItems)

	const [form, setForm] = useState(true)
	function handleForm(){
		setForm(!form);
	}

	return (
		<>
			<button className="fixed top-2 right-6 z-20 text-center w-14 min-h-14 rounded-xl bg-red-700 hover:scale-110 duration-200" onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
				<span>
				<svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
				</span>
				<span className="badge absolute text-white font-bold right-[5px] top-[2px]">{totalItems}</span>
			</button>
			<Drawer isOpen={isDrawerOpen} onCartIconClick={() => setIsDrawerOpen(!isDrawerOpen)}>
				<div className="flex flex-col gap-4">
					{cart?.map(product => (
						<ProductCard product={product}/>
					))}
				</div>
				<div className='flex mt-auto w-full justify-between items-center'>
					<span className='text-lg font-bold'>Total:</span>
					<span className='text-xl font-bold'>{Intl.NumberFormat("vn-VN",{style: 'currency', currency: 'VND'}).format(totalPrice)}</span>
				</div>
				<div></div>
				<button onClick={handleForm} className="h-12 w-24 self-end rounded-lg border-2 border-black bg-red-50 hover:bg-green-300">
					OHSHIT
				</button>
				<Form isHidden={form} onExit={handleForm}>

				</Form>
			</Drawer>
		</>
	);
}