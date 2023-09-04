import styles from "./navbar.module.css";
import { Link, Location, useLocation } from "react-router-dom";
export function Navbar() {
  const location: Location = useLocation();

  interface StyleProps {
    fontWeight?: string;
  }

  // According to the pathname of the page changing the color of a link indicates what page users are on
  const acitveLink = (link: string): StyleProps => {
    return location.pathname === link ? { fontWeight: "bold" } : {};
  };

  return (
    <div className={styles.navbar}>
      <div className={styles["nav-links"]}>
        <Link style={{ color: "inherit" }} to="/">
          <h1 className={styles["nav-title"]}>Mr. Johnny</h1>
        </Link>

        <nav>
          <ul className={styles.categories}>
            <li>
              <Link
                className={styles.link}
                to="tshirts"
                style={acitveLink("/tshirts")}
              >
                T-shirts
              </Link>
            </li>
            <li>
              <Link
                className={styles.link}
                to="jackest"
                style={acitveLink("/jackest")}
              >
                Jackets
              </Link>
            </li>
            <li>
              <Link
                className={styles.link}
                to="pants"
                style={acitveLink("/pants")}
              >
                Pants
              </Link>
            </li>
            <li>
              <Link
                className={styles.link}
                to="accessories"
                style={acitveLink("/accessories")}
              >
                Accessories
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles["icon-bag-div"]}>
        <svg
          aria-hidden="true"
          focusable="false"
          role="presentation"
          className={styles["icon-bag"]}
          viewBox="0 0 64 64"
        >
          <g fill="none" stroke="#000" stroke-width="2">
            <path d="M25 26c0-15.79 3.57-20 8-20s8 4.21 8 20"></path>
            <path d="M14.74 18h36.51l3.59 36.73h-43.7z"></path>
          </g>
        </svg>
      </div>
    </div>
  );
}
