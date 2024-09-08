# React Native Template with Authentication

This is a React Native template that includes basic authentication functionality (sign-in and sign-out) using Redux for state management. The template provides a starting point for building mobile apps with authentication workflows, such as login, logout, and handling user tokens.

## Features

- **Authentication:** Sign-in and sign-out functionality using redux and redux-thunk.
- **React Navigation:** Stack and Tab navigation with screens for login, home, and settings.
  Styled Components: Modular and customizable component styling using styled-components.
- **Redux Store:** Centralized state management for handling authentication and other state.

## Technologies Used

- **React Native:** Mobile framework for building cross-platform apps.
- **Redux:** State management for handling authentication and other app state.
- **Redux Thunk:** Middleware for handling async actions in Redux.
- **React Navigation:** For handling navigation between different screens (stack and tab navigation).
- **Styled Components:** CSS-in-JS for styling components.

## Screens

- **Login Screen:** Users can enter their username and password to sign in.
- **Home Screen:** Main screen of the app accessible after sign-in.
- **Settings Screen:** Includes a sign-out button that logs the user out.

## Folder Structure

```arduino
/screens
  LoginScreen.tsx // Screen for user login
  HomeScreen.tsx // Main screen after login
  SettingsScreen.tsx // Settings screen with sign out button
/styles
  // Contains separated styled components for various screens
/store
  authSlice.ts // Redux slice for authentication (login and logout logic)
  index.ts // Store setup for the application
/navigation
  index.tsx // Main navigation setup (Tab and Stack Navigators)
```

# Setup and Installation

## Clone the repository:

```bash
git clone https://github.com/AlanFnz/rn-auth-template.git
cd rn-auth-template
```

## Install dependencies:

```bash
npm install
```

or with Yarn:

```bash
yarn install
```

Install CocoaPods dependencies (iOS only)

```bash
cd ios
pod install
cd ..
```

## Run the app:

For iOS:

```bash
npx react-native run-ios
```

For Android:

```bash
npx react-native run-android
```

Run tests:

```bash
npm test
```

# Authentication Flow

When a user opens the app, they are prompted with the Login Screen.
After entering valid credentials, the user is authenticated, and the app navigates to the Home Screen.

The user can navigate to the Settings Screen and sign out, returning them to the Login Screen.

# Customization

- **Styling:** All components are styled using styled-components. You can find and modify the styles in the /styles folder.
- **State Management:** The authentication logic (sign-in, sign-out) is handled using Redux. The store is set up in /store/authSlice.ts.
- **Navigation:** Stack and tab navigation are configured in the /navigation/index.tsx file. You can easily add more screens or customize navigation behavior
