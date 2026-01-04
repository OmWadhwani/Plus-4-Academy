import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";
import PurchaseModal from "./PurchaseModal";

export default function Cart() {
  const { cart, removeFromCart, clearCart, getTotalPrice } = useCart();
  const [showModal, setShowModal] = useState(false);

  const handleBuyNow = () => {
    setShowModal(true);
    setTimeout(() => {
      clearCart();
      setShowModal(false);
    }, 2500);
  };

  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <header className="cart-header">
          <div className="cart-header-container">
            <h1 className="cart-logo">Plus 4 Academy</h1>
            <Link to="/" className="cart-nav-link">
              Home
            </Link>
          </div>
        </header>

        <main className="cart-main">
          <div className="empty-cart">
            <div className="empty-cart-icon">🛒</div>
            <h2 className="empty-cart-title">Your Cart is Empty</h2>
            <p className="empty-cart-text">
              Add courses to get started with your learning journey
            </p>
            <Link to="/courses" className="empty-cart-btn">
              Browse Courses
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <header className="cart-header">
        <div className="cart-header-container">
          <h1 className="cart-logo">Plus 4 Academy</h1>
          <div className="cart-nav">
            <Link to="/" className="cart-nav-link">
              Home
            </Link>
            <Link to="/courses" className="cart-nav-link">
              Courses
            </Link>
          </div>
        </div>
      </header>

      <main className="cart-main">
        <div className="cart-title-section">
          <h2 className="cart-page-title">Shopping Cart</h2>
          <div className="cart-title-divider"></div>
          <p className="cart-item-count">
            {cart.length} {cart.length === 1 ? "Course" : "Courses"} in Cart
          </p>
        </div>

        <div className="cart-content">
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img
                  src={item.image}
                  alt={item.title}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <h3 className="cart-item-title">{item.title}</h3>
                  <p className="cart-item-description">{item.description}</p>
                  <div className="cart-item-price">
                    ₹{item.price.toLocaleString("en-IN")}
                  </div>
                </div>
                <button
                  className="cart-item-remove"
                  onClick={() => removeFromCart(item.id)}
                  aria-label="Remove item"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="cart-summary-content">
              <h3 className="cart-summary-title">Order Summary</h3>
              <div className="cart-summary-row">
                <span>Subtotal ({cart.length} items)</span>
                <span>₹{getTotalPrice().toLocaleString("en-IN")}</span>
              </div>
              <div className="cart-summary-row">
                <span>Tax</span>
                <span>₹0</span>
              </div>
              <div className="cart-summary-divider"></div>
              <div className="cart-summary-row cart-summary-total">
                <span>Total</span>
                <span>₹{getTotalPrice().toLocaleString("en-IN")}</span>
              </div>
              <button className="cart-buy-btn" onClick={handleBuyNow}>
                Buy Now
              </button>
              <Link to="/courses" className="cart-continue-shopping">
                ← Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </main>

      {showModal && <PurchaseModal />}
    </div>
  );
}
