import React, { useState } from 'react';
import styles from './style';

const API = 'http://localhost:4600';

function App() {
  const [recipient, setRecipient] = useState([]);
  const [result, setResult] = useState(null);
  
  const sendMessage = () => {
    fetch(`${API}/send`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ sendTo: recipient }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.status > 200) {
          setResult({ type: 'error', message: res.message });
        } else {
          setResult({ type: 'success', message: `Message to ${recipient} was delivered`});
        }
      })
      .catch(() => {
        setResult({ type: 'error', message: 'Something bad happened' });
      });
  };
  
  return (
    <div style={styles.main}>
      <div style={styles.wrapper}>
        <p style={styles.text}>Enter phone number</p>
        <div>
          <input
            placeholder={'+380'}
            style={styles.input}
            value={recipient}
            onChange={e => {
              const value = e.target.value;
              const regular = new RegExp("^[0-9+/]*$");
              if(value.match(regular) || value === '+' || !value) setRecipient(value);
            }}
          />
        </div>
        <div style={styles.buttonWrapper}>
          <button onClick={sendMessage} style={styles.button}>Send</button>
        </div>
        <div style={styles.textContainer}>
          {result && (
            <div style={result.type === 'error' ? styles.errorMessage : styles.successMessage}>
              {result.message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
