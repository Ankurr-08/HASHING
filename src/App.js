import React, { useState } from 'react';
import NodeRSA from 'node-rsa';

const App = () => {
  const [message, setMessage] = useState('');
  const [encryptedMessage, setEncryptedMessage] = useState('');
  const [decryptedMessage, setDecryptedMessage] = useState('');

  const publicKey = `
    -----BEGIN PUBLIC KEY-----
    YourPublicKeyHere
    -----END PUBLIC KEY-----
  `;

  const privateKey = `
    -----BEGIN PRIVATE KEY-----
    YourPrivateKeyHere
    -----END PRIVATE KEY-----
  `;

  const handleEncrypt = () => {
    const key = new NodeRSA();
    key.importKey(publicKey, 'pkcs8-public-pem');

    const encrypted = key.encrypt(message, 'base64');
    setEncryptedMessage(encrypted);
  };

  const handleDecrypt = () => {
    const key = new NodeRSA();
    key.importKey(privateKey, 'pkcs8-private-pem');

    const decrypted = key.decrypt(encryptedMessage, 'utf8');
    setDecryptedMessage(decrypted);
  };

  return (
    <div>
      <h1>RSA Encryption and Decryption Example</h1>
      <div>
        <label>Message:</label>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button onClick={handleEncrypt}>Encrypt</button>
      <div>
        <label>Encrypted Message:</label>
        <textarea value={encryptedMessage} readOnly />
      </div>
      <button onClick={handleDecrypt}>Decrypt</button>
      <div>
        <label>Decrypted Message:</label>
        <textarea value={decryptedMessage} readOnly />
      </div>
    </div>
  );
};

export default App;
