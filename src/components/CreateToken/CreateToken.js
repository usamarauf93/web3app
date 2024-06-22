import './CreateToken.css';
import React, { useState, useRef } from 'react';

const CreateToken = () => {
  const [formData, setFormData] = useState({
    name: '',
    decimals: '',
    supply: '',
    network: 'SOL',
    symbol: '',
    description: '',
    image: null,
    twitter: '',
    telegram: '',
    discord: '',
  });

  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  const handleFileUploadClick = () => {
    fileInputRef.current.click();
  };
  return (
    <div className="row p-5">
      <div className="col-sm-10 offset-1">
        <div>
          <h6 className="text-center mb-5">Creating a token, became a whole lot easier</h6>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-6">
                <div className="row">
                  <div className="col-12 mt-3">
                    <div className="form-group">
                      <label>Name <span className="pink">*</span></label>
                      <input
                        required
                        type="text"
                        className="form-control"
                        placeholder="Put the name of your Token"
                        value={formData.name}
                        name="name"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-12 mt-3">
                    <div className="form-group">
                      <label>Decimals <span className="pink">*</span></label>
                      <input
                        required
                        type="text"
                        className="form-control"
                        placeholder="6"
                        value={formData.decimals}
                        name="decimals"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-12 mt-3">
                    <div className="form-group">
                      <label>Supply <span className="pink">*</span></label>
                      <input
                        required
                        type="text"
                        className="form-control"
                        placeholder="!"
                        value={formData.supply}
                        name="supply"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-12 mt-3">
                    <div className="form-group">
                      <label>Network <span className="pink">*</span></label>
                      <select
                        className="form-control"
                        required
                        value={formData.network}
                        name="network"
                        onChange={handleChange}
                      >
                        <option value="SOL">Solana Mainnet</option>
                        <option value="Blast">Blast</option>
                        <option value="Base Chain">Base Chain</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="row">
                  <div className="col-12 mt-3">
                    <div className="form-group">
                      <label>Symbol <span className="pink">*</span></label>
                      <input
                        required
                        type="text"
                        className="form-control"
                        placeholder="Put the symbol of your Token"
                        value={formData.symbol}
                        name="symbol"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-12 mt-3">
                    <div className="form-group">
                      <label>Description <span className="pink">*</span></label>
                      <textarea
                        required
                        className="form-control textarea-lg"
                        value={formData.description}
                        name="description"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 mt-3">
                <div className="form-group">
                  <label>Image <span className="pink">*</span></label>
                  <div role="presentation" className="cursor-pointer dropzone form-control"   onClick={handleFileUploadClick} >
                    <input
                      multiple
                      type="file"
                      ref={fileInputRef}
                      style={{ display: 'none' }}
                      name="image"
                      onChange={handleChange}
                    />
                    <p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-upload mx-3"
                      >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="17 8 12 3 7 8" />
                        <line x1="12" x2="12" y1="3" y2="15" />
                      </svg>
                      Upload Image
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-4 mt-3">
                <div className="form-group">
                  <label>Twitter</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Twitter link"
                    value={formData.twitter}
                    name="twitter"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-4 mt-3">
                <div className="form-group">
                  <label>Telegram</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Telegram link"
                    value={formData.telegram}
                    name="telegram"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-4 mt-3">
                <div className="form-group">
                  <label>Discord</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Discord link"
                    value={formData.discord}
                    name="discord"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="col-12 mt-5 d-flex justify-content-center">
              <button type="submit" className="btn btn-main">Create Token</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateToken;
