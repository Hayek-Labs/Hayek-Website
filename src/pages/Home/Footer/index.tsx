import { useEffect } from 'react';
import styles from './index.less';
import { FaTelegram } from 'react-icons/fa';
import { FaMedium } from 'react-icons/fa';
import { FiYoutube } from 'react-icons/fi';
import { IconContext } from 'react-icons';
import { FiTwitter } from 'react-icons/fi';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <footer className="site-footer">
        <div className="container ">
          <div className="row top-row">
            <div className="col-sm-12 col-md-6">
              <h6>About</h6>
              <p className="text-justify">
                Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative
                to help the upcoming programmers with the code. Scanfcode
                focuses on providing the most efficient code or snippets as the
                code wants to be simple. We will help programmers build up
                concepts in different programming languages that include C, C++,
                Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and
                Algorithm.
              </p>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Categories</h6>
              <ul className="footer-links">
                <li>
                  <a href="http://scanfcode.com/category/c-language/">C</a>
                </li>
                <li>
                  <a href="http://scanfcode.com/category/front-end-development/">
                    UI Design
                  </a>
                </li>
                <li>
                  <a href="http://scanfcode.com/category/back-end-development/">
                    PHP
                  </a>
                </li>
                <li>
                  <a href="http://scanfcode.com/category/java-programming-language/">
                    Java
                  </a>
                </li>
                <li>
                  <a href="http://scanfcode.com/category/android/">Android</a>
                </li>
                <li>
                  <a href="http://scanfcode.com/category/templates/">
                    Templates
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul className="footer-links">
                <li>
                  <a href="http://scanfcode.com/about/">About Us</a>
                </li>
                <li>
                  <a href="http://scanfcode.com/contact/">Contact Us</a>
                </li>
                <li>
                  <a href="http://scanfcode.com/contribute-at-scanfcode/">
                    Contribute
                  </a>
                </li>
                <li>
                  <a href="http://scanfcode.com/privacy-policy/">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="http://scanfcode.com/sitemap/">Sitemap</a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">
                Copyright &copy; 2017 All Rights Reserved by
                <a href="#">Scanfcode</a>.
              </p>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li>
                  <a className="telegram" href="#">
                    {/* <i className="fa fa-facebook"></i> */}
                    <IconContext.Provider
                      value={{ size: '25px', className: 'telegramicon' }}
                    >
                      <div>
                        <FaTelegram />
                      </div>
                    </IconContext.Provider>
                  </a>
                </li>
                <li>
                  <a className="twitter" href="#">
                    {/* <i className="fa fa-twitter"></i> */}
                    <IconContext.Provider
                      value={{ size: '25px', className: 'twittericon' }}
                    >
                      <div>
                        <FiTwitter />
                      </div>
                    </IconContext.Provider>
                  </a>
                </li>
                <li>
                  <a className="dribbble" href="#">
                    {/* <i className="fa fa-dribbble"></i> */}
                    <IconContext.Provider
                      value={{ size: '25px', className: 'mediumicon' }}
                    >
                      <div>
                        <FaMedium />
                      </div>
                    </IconContext.Provider>
                  </a>
                </li>
                <li>
                  <a className="linkedin" href="#">
                    {/* <i className="fa fa-linkedin"></i> */}
                    <IconContext.Provider
                      value={{ size: '25px', className: 'youtubeicon' }}
                    >
                      <div>
                        <FiYoutube />
                      </div>
                    </IconContext.Provider>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
