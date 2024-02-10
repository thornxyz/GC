import "../src/index.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="headings">
        <div className="sections">
          <div className="top"><a href="">About Us</a></div>
          <li><a href="">Overview</a></li>
          <li><a href="">Investor Relations</a></li>
          <li><a href="">Careers</a></li>
          <li><a href="">Other Stakeholders Information</a></li>
          <li><a href="">News Room</a></li>
          <li><a href="">Corporate Governance</a></li>
          <li><a href="">CSR</a></li>
          <li><a href="">Link to ODR Portal</a></li>
          <li><a href="">Regulatory Disclosures</a></li>
        </div>
        <div className="sections">
          <div className="top"><a href="">Connect</a></div>
          <li><a href=""><FaFacebookSquare className="logo"/>Facebook</a></li>
          <li><a href=""><FaInstagram className="logo"/>Instagram</a></li>
          <li><a href=""><FaYoutube className="logo"/>Youtube</a></li>
          <li><a href=""><FaTwitter className="logo"/>Twitter</a></li>
          <li><a href=""><FaPinterest className="logo"/>Pinterest</a></li>
          <li><a href=""><FaLinkedin className="logo"/>Linkedin</a></li>
        </div>
        <div className="sections">
          <div className="top"><a href="">HDFC Bank Offshore Branches</a></div>
          <li><a href="">HDFC Bank Bahrain Branch</a></li>
          <li><a href="">HDFC Bank Gift City Branch</a></li>
          <li><a href="">HDFC Bank DIFC Branch</a></li>
          <li><a href="">HDFC Bank Hong Kong Branch</a></li>
          <li><a href="">HDFC Bank OFFSHORE</a></li>
          <li><a href="">Representative Office</a></li>
        </div>
        <div className="sections">
          <div className="top"><a href="">HDFC Group Websites</a></div>
          <li><a href="">HDFC Credila</a></li>
          <li><a href="">HDFC Securities</a></li>
          <li><a href="">HDFC Mutual Fund</a></li>
          <li><a href="">HDFC Life</a></li>
          <li><a href="">HDFC ERGO</a></li>
          <li><a href="">HDFC Pension</a></li>
          <li><a href="">HDB Financial Services</a></li>
          <li><a href="">HDFC Sales</a></li>
          <li><a href="">HDFC Capital</a></li>
        </div>
      </div>
      <div className="borderbelow"></div>
      <div className="below">
        <li><a href="">Useful Links</a></li>
        <li><a href="">Resources</a></li>
        <li><a href="">Calculators</a></li>
        <li><a href="">Need Help</a></li>
        <li><a href="">Tele Assist Nurture</a></li>
      </div>
      <div className="end">
        <li><a href="">© Copyright HDFC Bank Ltd</a></li>
        <li><a href="">Terms and Conditions</a></li>
        <li><a href="">Privacy Policy</a></li>
      </div>
    </footer>
  );
}

export default Footer;