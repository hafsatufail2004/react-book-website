import "./Footer.css";
import { FootersLinksData } from "../../Data/Data";
import { Link } from "react-router-dom";
import CopyRight from "../CopyRight/CopyRight";


export default function Footer() {
  return (
    <footer>
      <div className="container footer-container">
        {/* ----------------------about params------------------------ */}
        <div>
          <h4>About us</h4>
          <ul className="about-params param-links">
            {FootersLinksData.Aboutus.map(({ link, linkname }, index) => {
              return (
                <li key={index}>
                  <Link to={link}>{linkname}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        {/* ---------------------- Discover params------------------------ */}
        <div>
          <h4> Discover us</h4>
          <ul className="Discover-params param-links">
            {FootersLinksData.Discover.map(({ link, linkname }, index) => {
              return (
                <li key={index}>
                  <Link to={link}>{linkname}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        {/* ---------------------- Myaccount params------------------------ */}
        <div>
          <h4> Myaccount</h4>
          <ul className="Myaccount-params param-links">
            {FootersLinksData.Myaccount.map(({ link, linkname }, index) => {
              return (
                <li key={index}>
                  <Link to={link}>{linkname}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        {/* ----------------------Help params------------------------ */}
        <div>
          <h4>Help</h4>
          <ul className="Help-params param-links">
            {FootersLinksData.Help.map(({ link, linkname }, index) => {
              return (
                <li key={index}>
                  <Link to={link}>{linkname}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <CopyRight />
    </footer>
  );
}
