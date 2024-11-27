# WordSphere: A Vocabulary Learning Application

## Purpose
WordSphere is an interactive and fun language-learning application designed to help users expand their vocabulary in Japanese. It simplifies the challenge of retaining vocabulary through structured lessons, engaging tutorials, and interactive features.

## Live Link
[Live Link](https://wordspheree.netlify.app/)

## Key Features
- **Firebase Authentication**:
  - User login and registration using email and Google authentication.
  - Password validation and "Forget Password" feature for easy account recovery.
  - Secure handling of authentication keys with environment variables.

- **Dynamic Vocabulary Lessons**:
  - Learn from over 50+ Japanese words, categorized by difficulty and lesson number.
  - Lesson-specific vocabulary cards with modal views for detailed explanations.
  - Speech synthesis for hearing the pronunciation of words.

- **Interactive Design**:
  - Embedded YouTube tutorials for learning Japanese alphabets and phrases.
  - Responsive design using Tailwind CSS and DaisyUI for seamless experience across devices.

- **Progressive Learning**:
  - "Start Learning" page with lessons divided into 10 structured levels.
  - Personalized "My Profile" page for viewing and updating user information.

- **Rich JSON Data**:
  - Vocabulary database includes word, pronunciation, meaning, part of speech, difficulty, lesson number, usage examples, and scenarios for use.

- **Animations**:
  - Eye-catching animations on the home page using the `animate.css` package.

- **Error Handling**:
  - 404 Error Page to redirect users to the home page when invalid routes are accessed.

## Technologies Used
- **React**: For building the user interface.
- **Firebase**: Authentication and user management.
- **Tailwind CSS**: For responsive styling.
- **DaisyUI**: For accessible and customizable UI components.

## NPM Packages Used
- **React Router**: For managing routes and private routes.
- **animate.css**: For adding animations to the home page.
- **React CountUp**: For animating success metrics on the home page.
- **React Helmet**: For change route title.
- **React Icons**: For using icon different purpose.

## Deployment
- Hosted on [Netlify](https://www.netlify.com) (or Firebase Hosting/Surge based on your choice).
- Environment variables are used to secure sensitive Firebase configuration.

## How to Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/programming-hero-web-course1/b10-a9-authentication-Jaber-riyan.git
   cd wordsphere
