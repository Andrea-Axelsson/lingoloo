# **Lingoloo: Language Translation App**

### Perfect Translation Every Time

## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation and Setup](#installation-and-setup)
- [How It Works](#how-it-works)
- [Future Improvements](#future-improvements)
- [Acknowledgments](#acknowledgments)

---

## **About the Project**

**Lingoloo** is a language translation web application that allows users to translate their text into multiple languages. The project leverages the powerful **OpenAI API** to generate accurate and context-aware translations in real-time.

This is a passion project where I have explored the possibilities of integrating the OpenAI API with React and Vite to build a responsive, user-friendly translation tool.

The goal of this project is to demonstrate how modern web technologies and AI can be combined to create seamless language translation experiences.

## **Features**

- **Real-time translations**: Submit a text, choose a target language, and receive an instant translation.
- **Multiple language support**: Currently supports German, Spanish, and French.
- **Simple, intuitive user interface**: A clean and minimal design that ensures a smooth user experience.
- **Animation**: Smooth animations when new messages are added, creating a dynamic chat-like interface.
- **Responsive design**: Works seamlessly on mobile, tablet, and desktop devices.

## **Tech Stack**

This project is built with modern tools and technologies to ensure high performance and scalability.

- **React**: UI components and state management.
- **Vite**: Build tool for fast development and optimized builds.
- **OpenAI API**: For generating language translations.
- **TypeScript**: For type-safe code and better development experience.
- **CSS**: Custom styling with animations.

## **Installation and Setup**

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Andrea-Axelsson/lingoloo.git
   ```

2. Navigate to the project directory:

   ```bash
   cd lingoloo
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add your **OpenAI API key**:

   ```bash
   VITE_OPENAI_API_KEY=your-openai-api-key-here
   ```

5. Run the development server:

   ```bash
   npm run dev
   ```

6. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## **How It Works**

Lingoloo allows users to:

1. Select the language into which they want to translate their text.
2. Type their message in the input box.
3. Send the message, which is then processed by the **OpenAI API**.
4. The translation is displayed in a dynamic chat window, with animations enhancing the user experience.

**Key Components**:

- **App.tsx**: The root component that renders the navigation and chat window.
- **Chatwindow.tsx**: Handles user input, interaction with the OpenAI API, and rendering the translated text.

The API calls are handled asynchronously, ensuring a smooth experience even when translation requests are being processed.

## **Future Improvements**

While this project is functional and serves as a great exploration of OpenAI's capabilities, there are several potential improvements for future versions:

- **Add more languages**: Expand the list of available languages for translation.
- **Improve error handling**: More robust error messages when the OpenAI API fails or when the input is invalid.
- **User authentication**: Allow users to save translation history by creating accounts.
- **Voice input/output**: Implement voice-to-text and text-to-speech functionality for more interactive translations.

## **Acknowledgments**

- **OpenAI**: For providing the translation engine that powers this app.
- **Vite**: For making the development process fast and smooth.
- **React**: For providing the framework to build a dynamic user interface.

This project was built as a way to learn more about the OpenAI API and explore the intersection between AI and front-end development.

### **Author**

**Andrea Axelsson**  
[GitHub](https://github.com/Andrea-Axelsson)
