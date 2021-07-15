import React from "react";
import "./topcard.css";

export default function TopCard(props) {
  const { icon, number, amount, colour } = props;

  const styles = {
    background: colour,
  };
  return (
    <>
      <div className="card">
          <div className="card-radius" style={styles}>
            <div className="card-body">
              <div className="d-flex">
                <h5 className="mb-0">{amount}</h5>
                <div className="ms-auto">
                  <i className="bx-cart">{icon}</i>
                </div>
              </div>
              <div className="progress">
                <div
                  className="progress-bar"
                  style={{ width: `${amount}%` }}
                ></div>
              </div>
              <div className="d-flex">
                <p className="mb-0">{number} Tickets</p>
              </div>
            </div>
          </div>
      </div>
    </>
  );
}
