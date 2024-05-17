import React, { useState, useRef, useEffect } from 'react';
import './App.css';

function App() {
  const [suggestion, setSuggestion] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const thankYouRef = useRef(null);

  const handleInputChange = (event) => {
    setSuggestion(event.target.value);
  };

  const handleSubmit = () => {
    if (suggestion.trim() !== '') {
      console.log('Suggestion submitted:', suggestion);
      setSuggestion('');
      setSubmitted(true);

       //clears "thank you " message after 5 seconds
       setTimeout(() => {
        setSubmitted(false);


       }, 5000);// time in milliseconds.
        
      }

  };




  useEffect(() => {
    if (submitted && thankYouRef.current) {
      thankYouRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      //clears "thank you " message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);


       }, 5000);// time in milliseconds.



    }
  }, [submitted]);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="Communet-heading"><span className="span_1">Comm</span>unet</h1>
        <p>
          Speed your way to the perfect destination: Reach the right place, audience, and opportunities at the right time.
        </p>
      </header>
      <div className="communet-info">
        <p>
          The Concept of COLD MAILING — a potential game-changer for snagging opportunities and fostering meaningful connections.
        </p>
        <p>
          It is an opportunity to embark on a learning journey and contribute to the community by building a utility that could benefit others sending mails in bulk.
        </p>
        <h2 className="using-communet-we-can">Using COMMUNET we can</h2>
        <ul className="no-bullets">
          <li>
            <strong><h3 className="sub-heading">Log in with Ease</h3></strong>
            <p>Start by logging in to Communet using your Google account. Our authentication mechanism powered by Google ensures the highest level of security, giving you peace of mind while accessing the platform.</p>
          </li>
          <li>
            <strong><h3 className="sub-heading">Add Profiles Effortlessly</h3></strong>
            <p>Once logged in, you can begin adding profiles to your Communet account. Whether you prefer manual entry, uploading profiles via an Excel sheet, or scraping them directly from LinkedIn using our handy extension.</p>
          </li>
          <li>
            <strong><h3 className="sub-heading">Manage Saved Profiles</h3></strong>
            <p>With your profiles added, you have full control over managing them within Communet. Update, delete, or add new profiles as needed, ensuring your database stays up-to-date and organized.</p>
          </li>
          <li>
            <strong><h3 className="sub-heading">Select Recipients with Precision</h3></strong>
            <p>When it’s time to send out emails, Communet makes it easy to select recipients from your list of profiles. Use filters, sorting options, and search functionality to narrow down your choices and target the right audience for your outreach.</p>
          </li>
          <li>
            <strong><h3 className="sub-heading">Personalize Your Emails</h3></strong>
            <p> Crafting personalized emails -- Utilize special tags like @name, @company, and @occupation to dynamically insert recipient-specific information, ensuring each email feels tailored and genuine.</p>
          </li>
        </ul>
      </div>
      <div className="suggestion-box">
        <h2>Communet Customer Suggestion Box</h2>
        <p>We value your feedback! Share your ideas, suggestions, and comments with us to help improve Communet.</p>
        <input
          type="text"
          value={suggestion}
          onChange={handleInputChange}
          placeholder="Type your suggestion here..."
          className="suggestion-input" />
        <br />
        <button onClick={handleSubmit} className="submit-button">Submit</button>
        {submitted && <p className="thank-you-message" ref={thankYouRef}>Thank you for your valuable insight!</p>}
        {!submitted && suggestion.trim() === '' && <p className="record-suggestion-message">Record your suggestion/input</p>}
      </div>
    </div>
  );
}

export default App;
