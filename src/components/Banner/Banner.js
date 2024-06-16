import React ,  { useState, useEffect } from 'react';
import './Banner.css'; // Assuming you have a corresponding SCSS file for styling

const Banner = () => {
    const getRandomTime = () => {
        // Generate random hours, minutes, and seconds between 0 and 59
        const hours = Math.floor(Math.random() * 24);
        const minutes = Math.floor(Math.random() * 60);
        const seconds = Math.floor(Math.random() * 60);
    
        // Format time with leading zeros if needed
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
      };
    const [countdown, setCountdown] = useState(getRandomTime); // Initial countdown time

    useEffect(() => {
      const interval = setInterval(() => {
        // Split countdown time into hours, minutes, seconds
        let [hours, minutes, seconds] = countdown.split(':').map(Number);
  
        // Calculate total seconds
        let totalSeconds = hours * 3600 + minutes * 60 + seconds;
  
        if (totalSeconds > 0) {
          totalSeconds--;
  
          // Convert totalSeconds back to hours, minutes, seconds
          hours = Math.floor(totalSeconds / 3600);
          minutes = Math.floor((totalSeconds % 3600) / 60);
          seconds = totalSeconds % 60;
  
          // Format time with leading zeros if needed
          let formattedTime = `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
          
          // Update countdown state
          setCountdown(formattedTime);
        } else {
          clearInterval(interval);
          // Optionally, you can perform an action when countdown reaches zero
          // For example: redirect user, display a message, etc.
        }
      }, 1000); // Update every second
  
      // Clear interval on component unmount
      return () => clearInterval(interval);
    }, [countdown]); // Run effect whenever countdown state changes
  
  return (
    <div className="banner col-10 offset-1">
      <div className="row">
        <div className="col-sm-6 banner-left">
          <div className="banner-text-section">
            <h3>Dittoswaps: Launchpad Protocol</h3>
            <p>
              Join in on the fun with many different networks and Launchpad types to choose from. Feel free to browse new listings from Base, Blast, and Solana Network Chains. Our site hosts 3 types of Launchpad, Free-for-all where you can buy/sell, traditional where it is buy only and lastly private that are partner hosted and invite only.
            </p>
          </div>
          <div className="banner-action-buttons">
            <a href="/createtoken" className="btn btn-main">Create Token</a>
            <button className="btn btn-plain btn-transparent">Learn more</button>
          </div>
        </div>
        <div className="col-sm-2"></div>
        <div className="col-sm-4 banner-right">
          <div className="row">
            <div className="col-12">
              <div className="card banner-card shadow pt-4 px-4 pb-1">
                <div className="row">
                  <div className="col-8">
                    <div className="banner-card-avatar">
                      <img src="/images/bg-1.jpg" alt="banner" className="banner-avatar" />
                      <img src="data:image/png;base64,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" alt="banner" className="banner-addon" />
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="badge mx-2">🔥  HOT DROP</div>
                  </div>
                </div>
                <div className="mt-4">
                  <h4>IronMan [ticker: IRON]</h4>
                  <p className="text-muted text-m">Market cap : 1.75K</p>
                </div>
                <p className="mt-2 fs-6 mb-0">Soft/Hard</p>
                <h4 className="text-main banner-amount-text">1.75 <span className="text-dard">-</span> 260 Blast</h4>
                <hr className="mt-2" />
                <div className="row mb-0">
                  <div className="col-9">
                    <div className="grid">
                      <p className="mb-0">Sale Starts In</p>
                      <p  id="countdown">{countdown}</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <a href="details/1" className="btn btn-main mt-1 btn-sm">View</a>
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

export default Banner;
