import Link from "next/link"

const Navbar = () => {
    return (
        //incase not sticky, give h to parent div and plan accordingly
        <div className=" flex sticky top-0 z-50">
            <div className="flex bg-blue-900 h-16 justify-between place-items-center w-full px-6 shadow-lg">
                <Link href="/"><a className="text-white text-2xl font-bold">amazona</a></Link>
                {/* used px again in below div, be carefull. */}
                <div className="space-x-10 px-16">
                <Link href="/"><a className="text-white font-bold">Cart</a></Link>
                <Link href="/"><a className="text-white font-bold">LogIn</a></Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
