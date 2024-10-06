import Link from "next/link";
export default function Header() {
    return (
        <header>
            <nav className="flex flex-row gap-10 justify-center bg-slate-800 h-11 items-center">
                <Link href="/">
                    Home
                </Link>
                <Link href="/products">
                    <h1 >Products</h1>
                </Link>
                <Link href="/cart">
                    <h1 >Cart</h1>
                </Link>
                <Link href="/mongoProducts">
                    <h1 >Mongo Products</h1>
                </Link>

                <Link href="/login">
                    <h1 >Login</h1>
                </Link>
                <Link href="/signup">
                    <h1 >Sign up</h1>
                </Link>
            </nav>
        </header>
    )
}