# Notification Service

![Expo](https://img.shields.io/badge/Expo-51-000020)
![React Native](https://img.shields.io/badge/React_Native-0.74-61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E)
![License](https://img.shields.io/badge/License-MIT-yellow)

A React Native (Expo) mobile application for scheduling and managing push notifications. Users can pick a future time and receive a notification at the halfway point between the current time and the selected time.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Screenshots](#screenshots)
- [Prerequisites](#prerequisites)
- [Installation and Setup](#installation-and-setup)
- [Running the Project](#running-the-project)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Time Picker UI** — Select a future time using an intuitive date/time picker modal
- **Halfway Notification** — Automatically schedules a push notification at the midpoint between the current time and the selected time
- **Cross-Platform** — Runs on iOS, Android, and web via Expo's managed workflow
- **Expo Notifications** — Uses Expo's built-in notification system for reliable push notifications

## Tech Stack

- **Framework:** Expo SDK 51
- **Language:** JavaScript (ES6+)
- **UI:** React Native (0.74.1)
- **Navigation:** Expo Router (file-based routing)
- **Notifications:** `expo-notifications`
- **Date/Time Picker:** `react-native-modal-datetime-picker` with `@react-native-community/datetimepicker`

## Project Structure

```
Notification_Service/
├── app/
│   ├── _layout.jsx          # Main app entry point with notification logic
│   └── ...                  # Additional routes (file-based routing)
├── assets/
│   ├── fonts/               # Custom fonts
│   ├── images/              # App icons, splash screen, favicon
│   └── ...
├── scripts/
│   └── reset-project.js     # Utility to reset project to blank state
├── babel.config.js          # Babel configuration (Expo preset)
├── app.json                 # Expo configuration
├── package.json             # Dependencies and scripts
└── README.md
```

## Screenshots

<!-- Add screenshots of your application here -->

> _Screenshots coming soon_

## Prerequisites

- **Node.js** (v18 or later recommended)
- **npm** or **yarn**
- **Expo CLI** (install globally: `npm install -g expo-cli`)
- **Expo Go** app on your mobile device (iOS/Android) for testing, or an emulator/simulator

## Installation and Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/shivanshsin0203/Notification_Service.git
   cd Notification_Service
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

## Running the Project

Start the Expo development server:

```bash
npx expo start
```

This will open the Expo developer tools in your browser. From there, you can:

- Scan the QR code with **Expo Go** on your mobile device
- Press `a` to open in an **Android emulator**
- Press `i` to open in an **iOS simulator**
- Press `w` to open in a **web browser**

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start the Expo development server |
| `npm run android` | Start and open on Android |
| `npm run ios` | Start and open on iOS |
| `npm run web` | Start and open on web |
| `npm run reset-project` | Reset the project to a blank state |
| `npm test` | Run tests with Jest |
| `npm run lint` | Run ESLint |

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some feature'`)
5. Push to the branch (`git push origin feature/your-feature`)
6. Open a Pull Request

Please ensure your code follows the existing style and passes linting.
![13142](readmeImages/img-sYbZz3Lr.gif)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.