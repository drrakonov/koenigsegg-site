import KoenigseggLogo from "@/svgs/KoenigseggLogo";
import Menu from "@/svgs/Menu";

const NavBar = () => {
    return (
        <div className="w-full mt-4 h-15 py-1 px-10 flex justify-between items-center">
            <KoenigseggLogo className="h-[80%]" />
            <Menu className="h-[2em] w-[3em] cursor-pointer" />
        </div>
    )
}

export default NavBar;