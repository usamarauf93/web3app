// ShowcaseComponent.js

import React, { useState, useEffect } from 'react';
import data from '../../data.json'; // Assuming data.json is in the same directory

const Showcase = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [sortBy, setSortBy] = useState('price'); // Default sort by price

  useEffect(() => {
    // Simulating fetching data from JSON file
    setProjects(data);
    setFilteredProjects(data);
  }, []);

  const handleSortChange = (sortByValue) => {
    setSortBy(sortByValue);
    sortProjects(sortByValue);
  };

  const sortProjects = (sortByValue) => {
    let sortedProjects = [...filteredProjects];
    switch (sortByValue) {
      case 'price':
        sortedProjects.sort((a, b) => a.price - b.price);
        break;
      case 'progress':
        sortedProjects.sort((a, b) => a.presaleprogress - b.presaleprogress);
        break;
      default:
        sortedProjects.sort((a, b) => a.price - b.price);
    }
    setFilteredProjects(sortedProjects);
  };

  return (
    <div className="showcase mt-3">
      <div className="row">
        <div className="col-11">
          {/* Search bar and dropdowns */}
          {/* Omitted for brevity */}

          {/* Cards */}
          <div className="row mt-4 col-11 offset-1 showcase-filter-box">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <div key={index} className="col-sm-4 mb-3 showcase-filter">
                  <div className="col-sm-12 showcase_card shadow pt-3 px-4 pb-1">
                    <div className="row">
                      <div
                        className="col-12 topbg-bar"
                        style={{
                            backgroundImage: `url('/images/${project.image}')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center center',
                            backgroundRepeat: 'no-repeat',
                            height: '10rem'
                          }}
                      ></div>
                    </div>
                    <div className="mt-4">
                      <h6 className="fw-bold m-0">{project.name} [ticker: {project.ticker}]</h6>
                      <span className="mt-0">Created {project.created} ago</span>
                    </div>
                    <p className="mt-2 mb-2">
                      Progress <span>({project.presaleprogress}%)</span>
                      <div className="progress-container">
                        <div className="progress-bar" style={{ width: `${project.presaleprogress}%` }}></div>
                      </div>
                      <div className="d-flex mt-2 justify-content-between">
                        <span>{project.price} {project.chain}</span>
                        <span>{project.cap} {project.chain}</span>
                      </div>
                    </p>
                    <p className="pink mt-2 fw-8">Market cap: {project.marketcap}</p>
                    <hr className="mt-0" />
                    <div className="row mt-0 mb-0">
                      <div className="col-9">
                        <div className="grid">
                          <p className="mb-0">Sale Ends In</p>
                          <p>{project.saleends}</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <a href={`details/${project.id}`} className="btn btn-main mt-1 btn-sm">
                          View
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-records text-center pink">No record found</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
