import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './ProductCards.css';

import Navbar from '../Navbar';
import HomeSlider from '../HomeSlider/HomeSlider';

import ForMobile from '../HomeSlider/ForMobile';

const ProductsCards = () => {
  const arr = [1, 1, 1, 1];
  return (
    <div >
      <div className="mt-4 d-none d-md-block p-0 ">
        <div className=" m-0 row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
          <div className="col bg-danger">
            <div className="card bg-secondary  border-0 h-100 shadow-lg">
              <div class="card-footer bg-success d-flex ">
                <div className="MarginLeeft">
                  <p>Arafat</p>
                </div>
                <div>
                  <p>Sarker</p>
                </div>
              </div>
              <img
                src="https://i.ibb.co/GRJh5Yj/Golden-Field-1091-B-Mid-Tower-Gaming-Casing-1.png"
                className="card-img-top img-fluid"
                alt="..."
              />
              <div className="card-body ">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          {arr.map((one) => (
            <>
              <div className="col">
                <div className="card bg-secondary  border-0 h-100 shadow-lg">
                  <div class="card-footer bg-success d-flex ">
                    <div className="MarginLeeft">
                      <p>Arafat</p>
                    </div>
                    <div>
                      <p>Sarker</p>
                    </div>
                  </div>
                  <img
                    src="https://i.ibb.co/GRJh5Yj/Golden-Field-1091-B-Mid-Tower-Gaming-Casing-1.png"
                    className="card-img-top img-fluid"
                    alt="..."
                  />
                  <div className="card-body ">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
      <div className="d-block d-md-none">
        <ForMobile></ForMobile>
      </div>
    </div>
  );
};

export default ProductsCards;
