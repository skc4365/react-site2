import { Link, Outlet } from "react-router-dom";

function Layout() {
    return (
        <div>
            <h2>홈 페이지</h2>
            <nav>
                <ul>
                    <li>
                        <Link to="/react-site2/">Home</Link>
                    </li>
                    <li>
                        <Link to="/react-site2/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/react-site2/work1">Work1</Link>
                    </li>

                </ul>
            </nav>
            <Outlet></Outlet>
        </div>
    );
}
export default Layout;