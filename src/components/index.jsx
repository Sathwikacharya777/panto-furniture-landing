import React from 'react';
import './index.css';

const Index = () => {
  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <div className="logo">Panto</div>
        <div className="menu-toggle" onClick={() => {
          document.querySelector('.nav').classList.toggle('active');
        }}>
          ☰
        </div>
        <nav className="nav">
          <ul>
            <li>Furniture</li>
            <li>Shop</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>


      {/* Hero Section */}
      <section className="hero">
        <img src={process.env.PUBLIC_URL +"/images/landing.jpg"} alt="landing" />
        <h1>Make Your Interior More <br /> Minimalistic & Modern</h1>
        <p>Turn your room with panto into a lot more minimalist <br /> and modern with ease and speed</p>
        <input type="text" placeholder="Search furniture" className="search" />
        
      </section>

      {/* Why Choosing Us */}
      <section className="why">
        <h2>Why Choosing Us</h2>
        <div className="why-cards">
          <div>
            <h3>Luxury facilities</h3>
            <p>The advantage of hiring a workspace...</p>
          </div>
          <div>
            <h3>Affordable Price</h3>
            <p>You can get workspace at the price...</p>
          </div>
          <div>
            <h3>Many Choices</h3>
            <p>We provide many unique spaces...</p>
          </div>
        </div>
      </section>

      {/* Best Selling Products */}
      <section className="products">
        <h2>Best Selling Product</h2>
        <div className="product-cards">
          <div className="product-card">
            <img src={process.env.PUBLIC_URL +"/images/chair1.jpeg"} alt="Chair" />
            <h3>Sakarias Armchair</h3>
            <p>$392</p>
          </div>
          <div className="product-card">
            <img src={process.env.PUBLIC_URL +"/images/chair2.jpeg"} alt="Chair" />
            <h3>Baltzar Chair</h3>
            <p>$299</p>
          </div>
          <div className="product-card">
            <img src={process.env.PUBLIC_URL +"/images/chair3.jpeg"} alt="Chair" />
            <h3>Anjay Chair</h3>
            <p>$519</p>
          </div>
          <div className="product-card">
            <img src={process.env.PUBLIC_URL +"/images/chair4.jpeg"} alt="Chair" />
            <h3>Nyantuy Chair</h3>
            <p>$921</p>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="experience-section">
        <div className="experience-image">
          <img src={process.env.PUBLIC_URL +"/images/experiance.jpg"} alt="Experience" />
        </div>
        <div className="experience-content">
          <h5>EXPERIENCES</h5>
          <h2>We Provide You The Best Experience</h2>
          <p>You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and luxurious style and with premium quality materials.</p>
          <a href="#">More info →</a>
        </div>
      </section>

      {/* MATERIALS SECTION */}
      <section className="materials-section">
        <div className="materials-content">
          <h5>MATERIALS</h5>
          <h2>Very Serious Materials For Making Furniture</h2>
          <p>Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price</p>
          <a href="#">More info →</a>
        </div>
        <div className="materials-images">
          <img src={process.env.PUBLIC_URL +"/images/matirial1.jpeg"} alt="Material 1" />
          <img src={process.env.PUBLIC_URL +"/images/matirial2.jpeg"} alt="Material 2" />
          <img src={process.env.PUBLIC_URL +"/images/matirial3.jpeg"} alt="Material 3" />
        </div>
      </section>

      {/* TESTIMONIAL SECTION */}
      <section className="testimonial-section">
        <h5>TESTIMONIALS</h5>
        <h2>Our Client Reviews</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <div className="testimonial-image">
              <img src={process.env.PUBLIC_URL +"/images/client1.jpeg"} alt="Client 1" />
              <div className="testimonial-content">
                <h4>Bang Upin</h4>
                <p>Pelanggan Anging</p>
                <p>“Temanku banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal.”</p>
              </div>
            </div>
          </div>
      
          <div className="testimonial-card">
            <div className="testimonial-image">
              <img src={process.env.PUBLIC_URL +"/images/client2.jpeg"} alt="Client 2" />
              <div className="testimonial-content">
                <h4>Ibuk Sukijan</h4>
                <p>Ibu Rumah Tangga</p>
                <p>“Makasih Panto, aku sekarang berasa tinggal di apartment karena barang-barang yang terlihat mewah.”</p>
              </div>
            </div>
          </div>
      
          <div className="testimonial-card">
            <div className="testimonial-image">
              <img src={process.env.PUBLIC_URL +"/images/client4.jpeg"} alt="Client 3" />
              <div className="testimonial-content">
                <h4>Mpol Ina</h4>
                <p>Content Creator</p>
                <p>“Sangat terjangkau untuk kantong saya yang tidak terlalu banyak.”</p>
              </div>
            </div>
          </div>
        </div>
    </section>


      {/* FOOTER SECTION */}
      <footer className="footer">
        <div className="footer-left">
          <h3>Panto</h3>
          <p>The advantage of hiring a workspace with us is that gives you comfortable service and all-around facilities.</p>
          <p>Copyright © 2021</p>
        </div>
        <div className="footer-links">
          <div>
            <h4>Services</h4>
            <ul>
              <li>Email Marketing</li>
              <li>Campaigns</li>
              <li>Branding</li>
            </ul>
          </div>
          <div>
            <h4>Furniture</h4>
            <ul>
              <li>Beds</li>
              <li>Chair</li>
              <li>All</li>
            </ul>
          </div>
          <div>
            <h4>Follow Us</h4>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
};

export default Index; 
