import { HomeIcon, LogIn, ShoppingCart } from "lucide-react"
import Link from "next/link"

export function Header(props) {
    return (
        <header className='w-screen'>
            <div className='header-container flex flex-row justify-between'>
                <div id='header-menu' className="flex flex-row text-center w-64 h-full">
                    <Link href='/'><div className='inline-block header-menu-item w-16 min-h-16 h-full'><HomeIcon /></div></Link>
                    <Link href="/shopping-cart"><div className='inline-block header-menu-item w-16 min-h-16 h-full'><ShoppingCart /></div></Link>
                    {!props.isLoggedIn ? <Link href='./account/login'><div className='inline-block header-menu-item w-16 min-h-16 h-full'><LogIn /></div></Link> : <></>}
                </div>
                <div className="logo whitespace-nowrap pr-1 pl-1 flex justify-end items-center text-xl mr-16"><Link href={"/"}><b><i>Dummy Products</i></b></Link></div>
            </div>
        </header >
    )
}

export default Header