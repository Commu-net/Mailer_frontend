import React, { useState } from 'react';
import './App.css'; // You may need to adjust the path based on your file structure

function CustomerSuggestionBox() {
  const [suggestion, setSuggestion] = useState('');

  const handleInputChange = (event) => {
    setSuggestion(event.target.value);
  };

  const handleSubmit = () => {
    if (suggestion.trim() !== '') {
      console.log('Suggestion submitted:', suggestion);
      setSuggestion('');
    }
  };

  return (
    <div className="suggestion-box">
      <h2>Comm-unet Customer Suggestion Box</h2>
      <p>We value your feedback! Share your ideas, suggestions, and comments with us to help improve Comm-unet.</p>
      <input
        type="text"
        value={suggestion}
        onChange={handleInputChange}
        placeholder="Type your suggestion here..."
        className="suggestion-input"
      />
      <br />
      <button onClick={handleSubmit} className="submit-button">Submit</button>
      {suggestion.trim() === '' && <p className="record-suggestion-message">Record your suggestion/input</p>}
    </div>
  );
}

export default CustomerSuggestionBox;
