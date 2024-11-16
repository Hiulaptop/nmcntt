"use client"
interface Props {
    isOpen: boolean
    children: React.ReactNode
    onCartIconClick: () => void
}
export const Drawer = ({ children, isOpen, onCartIconClick }: Props) => {
    return (
        <div className='relative'>
            <div
                className={`fixed top-0 right-0 h-full w-80 bg-gray-900 text-white transition duration-700 ease-in-out transform z-50 ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                style={{ boxShadow: `${isOpen ? "rgba(0, 0, 0, 0.4) 0px 30px 30px" : ""}` }}
            >
                <aside className='h-full overflow-y-auto'>
                    <header className='bg-gray-900 text-white py-4 flex items-center justify-end px-4 h-14'>
                        <div className="flex flex-row w-full justify-between">
                            <div className='text-2xl font-bold ml-0'>Shopping Cart</div>
                            <button onClick={onCartIconClick}>Close</button>
                        </div>
                    </header>
                    <main className='flex flex-col gap-2 h-auto min-h-[90%] p-4 text-black bg-white'>{children}</main>
                </aside>
            </div>
        </div>
    )
}