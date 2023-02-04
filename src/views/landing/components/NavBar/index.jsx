import useTasks from "@/utils/store/tasksStore";
import Menu from "./Menu"
const NavBar = () => {

  const { modalMenu } = useTasks()
  console.log(modalMenu)

  return ( 
    <nav className="navbar">
      <h1 className="text-gradient">taski</h1>

      <div className="nav-list" id={modalMenu}>
        <a href="">App</a>
        <a href="">About</a>
        <a href="">Contact</a>
      </div>
      <Menu />
    </nav>
   );
}
 
export default NavBar;