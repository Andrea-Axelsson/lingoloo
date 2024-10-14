import React, { useState, FormEvent, useEffect, useRef } from 'react';
import OpenAI from 'openai';

interface Message {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

const Chatwindow = () => {

    // State to handle user input, selected language, and any error messages
    const [inputValue, setInputValue] = useState<string>('');
    const [selectedLanguage, setSelectedLanguage] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');

    // Reference to the message container for scrolling to the bottom automatically
    const messageContainerRef = useRef<HTMLDivElement>(null);

    // State to hold all messages, including both user inputs and translations
    const [chatArrray, setChatArray] = useState<({ type: string; content: string })[]>([]);

    console.log("Chat Array", chatArrray);

    // useEffect runs whenever chatArray updates to automatically scroll to the bottom of the message window
    useEffect(() => {
      if (messageContainerRef.current) {
        messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
      }
    }, [chatArrray]); // Listens to changes in chatArray

    // Function to fetch a translation from the OpenAI API
    const fetchOpenAiResponse = async (): Promise<void> => {
      const openai = new OpenAI({
        apiKey: import.meta.env.VITE_OPENAI_API_KEY || '',
        dangerouslyAllowBrowser: true // Allows calls from the browser
      });

      // Prepare the messages to send to OpenAI for translation
      const messages: Message[] = [
        {
          role: 'system',
          content: 'You are a language translator.'
        },
        {
          role: 'user',
          content: `Translate: ${inputValue}, to ${selectedLanguage}, Give only the translation. No quotation marks`
        }
      ];

      try {
        // Send the messages to OpenAI API and receive the translation response
        const res = await openai.chat.completions.create({
          model: 'gpt-3.5-turbo',
          messages: messages
        });

        const translatedResponse = res.choices[0]?.message?.content ?? 'No content available';

        // Check if the user has entered text and selected a language
        if (!inputValue || !selectedLanguage) {
          setErrorMessage("You need to write something and pick a language!");
        } else {
          // Add the translation to the chatArray
          setChatArray((prevArray) => [...prevArray, { type: 'translation', content: translatedResponse }]);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Handles language selection
    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedLanguage(e.target.value);
      console.log("Selected Language", selectedLanguage);
    };

    // Handles form submission (when the user clicks "send")
    const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
      event.preventDefault();
      console.log("Input value", inputValue);

      // Check to make sure the user has selected a language and entered text
      if (!inputValue || !selectedLanguage) {
        setErrorMessage("You need to write something and pick a language!");
      } else {
        // Add the user's input to the chatArray
        setChatArray((prevArray) => [...prevArray, { type: 'input', content: inputValue }]);
        setErrorMessage('');
        setInputValue(''); // Clear the input field after the message is sent
      }
    };

  return (
    <>
      <main className='container'>
        <div className='window-container'>
          {/* Message window that shows all user inputs and translations */}
          <div className='message-container' ref={messageContainerRef}>
            <div className='message translation-style'>
              <p>✨ Select the language you want me to translate into, type your text, and send it off!✈️</p>
            </div>
            {/* Loops through chatArray and renders each message */}
            {chatArrray.map((chat, index) => (
              <div className={`message ${chat.type === 'input' ? 'input-style' : 'translation-style'}`} key={index}>
                <p>{chat.content}</p>
              </div>
            ))}
          </div>
          
          {/* Displays error messages if something is missing (like text or language selection) */}
          <p className="error-message">{errorMessage}</p>

          {/* Form for entering messages and selecting a language */}
          <form onSubmit={handleSubmit}>
            <div className='form-div'>
              <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder='Write something'
              />
              <button onClick={fetchOpenAiResponse} className='submit-btn' type="submit">
                <i className="fa fa-paper-plane"></i>
              </button>
            </div>

            {/* Radio buttons to select the language */}
            <div className='radio-buttons'>
              <label>
                <input
                  type="radio"
                  name="language"
                  value="german"
                  onChange={handleRadioChange}
                />
                <span className="flag">🇩🇪</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="language"
                  value="spanish"
                  onChange={handleRadioChange}
                />
                <span className="flag">🇪🇸</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="language"
                  value="french"
                  onChange={handleRadioChange}
                />
                <span className="flag">🇫🇷</span>
              </label>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default Chatwindow;