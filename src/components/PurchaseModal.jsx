import React from "react";

export default function PurchaseModal() {
  return (
    <div className="purchase-modal-overlay">
      <div className="purchase-modal">
        <div className="purchase-modal-icon">🎉</div>
        <h2 className="purchase-modal-title">Purchase Successful!</h2>
        <p className="purchase-modal-text">
          Thank you for your purchase. You'll receive a confirmation email
          shortly.
        </p>
        <div className="purchase-modal-checkmark">✓</div>
      </div>
    </div>
  );
}
