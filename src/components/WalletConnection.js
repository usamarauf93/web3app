import React, { useEffect, useState } from 'react';
// import { Connection, PublicKey, clusterApiUrl, Transaction, SystemProgram } from '@solana/web3.js';

const WalletConnection = () => {
  const [walletAddress, setWalletAddress] = useState(null);

  const getProvider = () => {
    if ('phantom' in window) {
      const provider = window.phantom?.solana;
      if (provider?.isPhantom) {
        return provider;
      }
    }
    window.open('https://phantom.app/', '_blank');
  };

  const connectWallet = async () => {
    const provider = getProvider();
    try {
      const resp = await provider.request({ method: "connect", params: { onlyIfTrusted: true } });
      setWalletAddress(resp.publicKey.toString());
      localStorage.setItem('walletAddress', resp.publicKey.toString());
      console.log('Connected with Public key:', resp.publicKey.toString());
    } catch (err) {
        if (err.code === 4001) {
            console.log('User rejected the request.', err);
        } else {
            console.error('Error connecting wallet:', err);
        }
    }
  };

  const disconnectWallet = async () => {
    const provider = getProvider();
    const confirmed = window.confirm('Are you sure you want to disconnect?');
    
    if (confirmed) {
      try {
        await provider.request({ method: "disconnect" });
        setWalletAddress(null);
        localStorage.removeItem('walletAddress');
        console.log('Wallet disconnected');
      } catch (error) {
        console.error('Error disconnecting wallet:', error);
      }
    } else {
      console.log('Disconnect cancelled.');
    }
  };
  

  useEffect(() => {
    const provider = getProvider();
    const storedWalletAddress = localStorage.getItem('walletAddress');

    if (storedWalletAddress) {
      setWalletAddress(storedWalletAddress);
    } else {
      const handleConnect = (publicKey) => {
        setWalletAddress(publicKey.toString());
        localStorage.setItem('walletAddress', publicKey.toString());
      };

      const handleDisconnect = () => {
        setWalletAddress(null);
        localStorage.removeItem('walletAddress');
      };

      provider.on("connect", handleConnect);
      provider.on("disconnect", handleDisconnect);

      return () => {
        provider.off("connect", handleConnect);
        provider.off("disconnect", handleDisconnect);
      };
    }
  }, []);

  return (
    <div>
      {walletAddress ? (
        <div>
          <button className="btn btn-main disconnect"  title={`Wallet Address: ${walletAddress}`} wallet-address={walletAddress} onClick={disconnectWallet}>Disconnect</button>
        </div>
      ) : (
        <button className="btn btn-main " onClick={connectWallet}>Connect Wallet</button>
      )}
    </div>
  );
};

export default WalletConnection;
