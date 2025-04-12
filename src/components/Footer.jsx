import React from "react";
import { FaGithub, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-4 pb-2">
      <div className="container">
        <div className="row">
          {/* معلومات المتجر */}
          <div className="col-md-4 mb-4">
            <h5 className="text-warning">ShopNesta</h5>
            <p>متجرك الإلكتروني المفضل لجميع احتياجاتك</p>
            <p>جودة عالية - أسعار منافسة - توصيل سريع</p>
          </div>

          {/* روابط سريعة */}
          <div className="col-md-4 mb-4">
            <h5 className="text-warning">روابط سريعة</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white">الرئيسية</a></li>
              <li><a href="/products" className="text-white">المنتجات</a></li>
              <li><a href="/about" className="text-white">من نحن</a></li>
              <li><a href="/contact" className="text-white">اتصل بنا</a></li>
            </ul>
          </div>

          {/* وسائل التواصل */}
          <div className="col-md-4 mb-4">
            <h5 className="text-warning">تواصل معنا</h5>
            <div className="social-links">
              <a 
                href="https://github.com/ahmedsaeednoaman/shopnesta" 
                className="text-white me-3"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaGithub className="me-1" /> GitHub
              </a>
              <a 
                href="#" 
                className="text-white me-3"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaFacebook className="me-1" /> Facebook
              </a>
              <a 
                href="#" 
                className="text-white me-3"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaTwitter className="me-1" /> Twitter
              </a>
            </div>
          </div>
        </div>

        {/* حقوق النشر */}
        <div className="text-center pt-3 border-top border-secondary">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} ShopNesta. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;