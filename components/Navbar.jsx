import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center
        bg-slate-800 px-8 py-3">
            <Link className="text-white font-bold" href={"/"}>
                Task Management System
            </Link>
            <Link className="bg-black p-2" 
            href={"/addTopic"}>
                Add Task
            </Link>
        </nav>
    );
}