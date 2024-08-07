import React, { useEffect, useState } from 'react';

const WalletConnection = () => {
  const [walletAddress, setWalletAddress] = useState(null);
  const [provider, setProvider] = useState(null);

  const getProvider = () => {
    if ('phantom' in window) {
      const p = window.phantom?.solana;
      if (p?.isPhantom) {
        return p;
      }
    }
    return null;
  };

  const connectWallet = async () => {
    const p = getProvider();
    if (!p) {
      alert('Phantom wallet is not installed. Please install it to connect your wallet.');
      window.open('https://phantom.app/', '_blank');
      return;
    }

    try {
      const resp = await p.request({ method: 'connect' });
      setWalletAddress(resp.publicKey.toString());
      localStorage.setItem('walletAddress', resp.publicKey.toString());
      console.log('Connected with Public key:', resp.publicKey.toString());
    } catch (err) {
      if (err.code === 4001) {
        alert('User rejected the request.', err);
      }else if(err.code == -32603){
        alert('Please attach a account first in wallet');
      } else {
        console.log(err.code);
        console.error('Error connecting wallet:', err);
      }
    }
  };

  const disconnectWallet = async () => {
    const p = getProvider();
    if (!p) {
      alert('Phantom wallet is not installed. Unable to disconnect.');
      return;
    }

    const confirmed = window.confirm('Are you sure you want to disconnect?');

    if (confirmed) {
      try {
        await p.request({ method: 'disconnect' });
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
    const p = getProvider();
    setProvider(p);

    const storedWalletAddress = localStorage.getItem('walletAddress');
    if (storedWalletAddress) {
      setWalletAddress(storedWalletAddress);
    }

    if (p) {
      const handleConnect = (publicKey) => {
        setWalletAddress(publicKey.toString());
        localStorage.setItem('walletAddress', publicKey.toString());
      };

      const handleDisconnect = () => {
        setWalletAddress(null);
        localStorage.removeItem('walletAddress');
      };

      p.on('connect', handleConnect);
      p.on('disconnect', handleDisconnect);

      return () => {
        p.off('connect', handleConnect);
        p.off('disconnect', handleDisconnect);
      };
    }
  }, []);

  return (
    <div>
      {walletAddress ? (
        <div>
          <button className="btn btn-main disconnect" title={`Wallet Address: ${walletAddress}`} onClick={disconnectWallet}>Disconnect</button>
        </div>
      ) : (
        <button className="btn btn-main" onClick={connectWallet}>Connect Wallet</button>
      )}
    </div>
  );
};

export default WalletConnection;
