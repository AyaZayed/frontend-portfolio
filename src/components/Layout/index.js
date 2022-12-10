import Loader from "react-loaders";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";
import "./index.scss";

function Layout() {
  return (
    <>
      <Loader type="pacman" />
      <div>
        <Sidebar></Sidebar>
          <div className="page">
              <span className="tags top-tags">
                <span className="html-tag">
                  &lt;html&gt;
                  <br />
                </span>
                &lt;body&gt;
              </span>
              <Outlet></Outlet>
              <span className="tags bottom-tags">
                &lt;body&gt;
                <br />
                <span className="html-tag">&lt;html&gt;</span>
              </span>
        </div>
      </div>
    </>
  );
}

export default Layout;
