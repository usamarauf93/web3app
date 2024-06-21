import React, { useState, useEffect } from 'react';
import './CardDetails.css';
import { useParams } from 'react-router-dom';
import data from '../../data.json'; 
const CardDetails = () => {
  const [projects, setProjects] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    // Simulating fetching data from JSON file
    setProjects(data);
  }, []);
  const project = projects.find((project) => project.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }
  const basePath = '../images/';
  return (
    <div className="row p-5">
      <div className="col-sm-8">
        <div className="cont" style={{ height: '25rem' }}>
          <div className="tradingview-widget-container" style={{ height: '100%', width: '100%' }}>
            <iframe 
              scrolling="no" 
              allowTransparency="true" 
              frameBorder="0" 
              src="https://www.tradingview-widget.com/embed-widget/advanced-chart/?locale=en#%7B%22autosize%22%3Atrue%2C%22symbol%22%3A%22SOL%22%2C%22interval%22%3A%22D%22%2C%22timezone%22%3A%22Etc%2FUTC%22%2C%22theme%22%3A%22light%22%2C%22style%22%3A%221%22%2C%22allow_symbol_change%22%3Atrue%2C%22calendar%22%3Afalse%2C%22support_host%22%3A%22https%3A%2F%2Fwww.tradingview.com%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22utm_source%22%3A%22web3-blush-five.vercel.app%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22advanced-chart%22%2C%22page-uri%22%3A%22web3-blush-five.vercel.app%2Fdetails%2F5%22%7D" 
              title="advanced chart TradingView widget" 
              lang="en" 
              style={{ userSelect: 'none', boxSizing: 'border-box', display: 'block', height: '100%', width: '100%' }}
            ></iframe>
          </div>
        </div>
        <div className="viewtoken card mt-3">
          <div className="card-header">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button 
                  className="nav-link active" 
                  id="discussion-tab" 
                  data-bs-toggle="tab" 
                  data-bs-target="#discussion-tab-pane" 
                  type="button" 
                  role="tab" 
                  aria-controls="discussion-tab-pane" 
                  aria-selected="true"
                >
                  Discussion
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button 
                  className="nav-link" 
                  id="trade-tab" 
                  data-bs-toggle="tab" 
                  data-bs-target="#trade-tab-pane" 
                  type="button" 
                  role="tab" 
                  aria-controls="trade-tab-pane" 
                  aria-selected="false"
                >
                  Trade
                </button>
              </li>
            </ul>
          </div>
          <div className="tab-content" id="myTabContent">
            <div 
              className="tab-pane fade show discussion-tab active p-3" 
              id="discussion-tab-pane" 
              role="tabpanel" 
              aria-labelledby="discussion-tab" 
              tabIndex="0"
            >
              <div className="row">
                <div className="col-1 p-3">
                  <div className="profile-box"></div>
                </div>
                <div className="col-11">
                  <textarea className="form-control" id=""></textarea>
                </div>
              </div>
              <div className="comments row mt-4">
                <div className="comment mb-3">
                  <div className="row">
                    <div className="col-1 p-3">
                      <div className="profile-box" style={{ backgroundColor: 'rgb(14, 165, 233)' }}></div>
                    </div>
                    <div className="col-11">
                      <h5 className="text-main-dark">Honour</h5>
                      <span className="time text-main-muted">28th April 2023 at 12:34</span>
                      <p className="text-main-dark">This is a great post!</p>
                      <div className="d-flex gap-3 mt-1">
                        <span className="likecount text-main-dark">
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="12" 
                            height="12" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            className="lucide lucide-heart"
                          >
                            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                          </svg> 5
                        </span>
                        <span className="reply text-main-dark">
                          Reply 
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="12" 
                            height="12" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            className="lucide lucide-send"
                          >
                            <path d="m22 2-7 20-4-9-9-4Z"></path>
                            <path d="M22 2 11 13"></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="comment mb-3">
                  <div className="row">
                    <div className="col-1 p-3">
                      <div className="profile-box" style={{ backgroundColor: 'rgb(139, 92, 246)' }}></div>
                    </div>
                    <div className="col-11">
                      <h5 className="text-main-dark">Bob</h5>
                      <span className="time text-main-muted">28th April 2023 at 13:00</span>
                      <p className="text-main-dark">Thanks for sharing this!</p>
                      <div className="d-flex gap-3 mt-1">
                        <span className="likecount text-main-dark">
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="12" 
                            height="12" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            className="lucide lucide-heart"
                          >
                            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                          </svg> 3
                        </span>
                        <span className="reply text-main-dark">
                          Reply 
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="12" 
                            height="12" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            className="lucide lucide-send"
                          >
                            <path d="m22 2-7 20-4-9-9-4Z"></path>
                            <path d="M22 2 11 13"></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="comment mb-3">
                  <div className="row">
                    <div className="col-1 p-3">
                      <div className="profile-box" style={{ backgroundColor: 'rgb(251, 191, 36)' }}></div>
                    </div>
                    <div className="col-11">
                      <h5 className="text-main-dark">Alice</h5>
                      <span className="time text-main-muted">28th April 2023 at 13:30</span>
                      <p className="text-main-dark">Interesting analysis, looking forward to more!</p>
                      <div className="d-flex gap-3 mt-1">
                        <span className="likecount text-main-dark">
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="12" 
                            height="12" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            className="lucide lucide-heart"
                          >
                            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                          </svg> 8
                        </span>
                        <span className="reply text-main-dark">
                          Reply 
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="12" 
                            height="12" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            className="lucide lucide-send"
                          >
                            <path d="m22 2-7 20-4-9-9-4Z"></path>
                            <path d="M22 2 11 13"></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div 
              className="tab-pane fade trade-tab p-3" 
              id="trade-tab-pane" 
              role="tabpanel" 
              aria-labelledby="trade-tab" 
              tabIndex="0"
            >
              <div className="row">
                <div className="col-12">
                  <button className="btn btn-success btn-block" id="tradeButton">
                    Trade Now
                  </button>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-6">
                  <button className="btn btn-outline-secondary btn-block">Sell</button>
                </div>
                <div className="col-6">
                  <button className="btn btn-outline-secondary btn-block">Buy</button>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-12">
                  <div className="input-group">
                    <input 
                      type="text" 
                      className="form-control" 
                      placeholder="Enter amount" 
                      aria-label="Enter amount" 
                    />
                    <button className="btn btn-primary" type="button">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-4">
        <div className="row">
            <div className="col-12">
              <div className="card DetailsCard pt-3 px-4 pb-1">
                <div className="row mb-0">
                  <div className="col-4 mb-0">
                    <div className="banner-card-avatar">
                      <img    src={`${basePath}${project.image}`}  alt="banner card" className="banner-avatar" />
                    </div>
                  </div>
                  <div className="col-8 mb-0">
                    <h4>{project.name} [ticker: {project.ticker}]</h4>
                    <p className="text-muted text-m">{project.description}</p>
                  </div>
                </div>
                <div className="mt-2">
                  <div className="progress-container">
                    <div className="progress-bar" style={{ width: `${project.progress}%` }}></div>
                  </div>
                </div>
                <div className="mt-2">
                  <p>Bonding curve progress: {project.progress}</p>
                </div>
                <div className="d-flex justify-content-between align-items-end">
                  <h6>Amount</h6>
                  <div className="d-flex gap-1">
                    <a href="/" className="btn btn-main mt-1 btn-sm">Buy</a>
                    <a href="/" className="btn btn-secondary mt-1 btn-sm">Sell</a>
                  </div>
                </div>
                <input type="number" name="" className="mt-2 form-control bordered" id="" />
                <div className="col-6 mb-2">
                  <a href="/createtoken" className="btn btn-main mt-3 btn-lg">Place Trade</a>
                </div>
              </div>
            </div>
            <div className="col-12 mt-3">
                <div className="card DetailsCard pt-3 px-4 pb-1">
                    <div className="row mb-0">
                        <p className="text-center">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="pink" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M213.66,122.34a8,8,0,0,1,0,11.32l-80,80a8,8,0,0,1-11.32,0l-80-80a8,8,0,0,1,11.32-11.32L128,196.69l74.34-74.35A8,8,0,0,1,213.66,122.34Zm-91.32,11.32a8,8,0,0,0,11.32,0l80-80a8,8,0,0,0-11.32-11.32L128,116.69,53.66,42.34A8,8,0,0,0,42.34,53.66Z"></path>
                            </svg>
                        </p>
                        <div className="mt-0 mb-2">
                            <div className="progress-container">
                                <div className="progress-bar" style={{ width: '70%' }}></div>
                            </div>
                        </div>
                        <div className="mb-0 mt-2">
                            <p>When the market cap reaches $0 all the liquidity from the bonding curve will be deposited into Raydium and burned. Progression increases as the price goes up. There are tokens still available for sale in the bonding curve and there is SOL in the bonding curve.</p>
                            <p>TELEGRAM: <a href="https://t.me/DOgewitPEpe" className="text-main-muted">https://t.me/DOgewitPEpe</a><br />TWITTER: <a href="https://twitter.com/dogewitpepe" className="text-main-muted">https://twitter.com/dogewitpepe</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 mt-3">
                <div className="card DetailsCard pt-3 px-4 pb-1">
                    <div className="row mb-0">
                        <h5 className="fw-bold">Holder distribution</h5>
                        <div className="col-12 row">
                            <div className="col-8">
                                <p>ErjaXB</p>
                            </div>
                            <div className="col-4">
                                <p>32.25%</p>
                            </div>
                        </div>
                        <div className="col-12 row">
                            <div className="col-8">
                                <p>AnotherHolder</p>
                            </div>
                            <div className="col-4">
                                <p>15.00%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
