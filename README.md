# Weather Search App

Welcome to the Weather Search App! This repository contains a simple and user-friendly web application built with React.js. The application allows users to search for weather conditions of various places. By entering a location in the search box and clicking the search button, users can view detailed weather information displayed in a card format.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Search Functionality:** Users can search for the weather conditions of any place by entering the location in the search box and clicking the search button.
- **Weather Information Display:** The weather information card displays:
  - Temperature
  - Humidity
  - Minimum Temperature
  - Maximum Temperature
  - Weather Description
  - Feels Like Temperature
- **Responsive Design:** The application is built with MaterialUI components for a responsive and modern user interface.

## Technologies Used

- **Frontend:**
  - [React.js](https://reactjs.org/)
  - [MaterialUI](https://material-ui.com/) for components and styling
  - React Hooks for managing state and lifecycle events
  - Props and events for component communication

## Installation

1. **Clone the repository:**
   ```
   git clone https://github.com/NandanAdi/WeatherCard.git
   cd weather-search-app
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add your API key for the weather service:
   ```sh
   REACT_APP_WEATHER_API_KEY=your_api_key
   ```

4. **Run the application:**
   ```sh
   npm run dev
   ```

5. **Visit the application:**
   Open your browser and go to `(http://localhost:5173/)`

## Usage

- **Search for Weather:** Enter a location in the search box and click the search button.
- **View Weather Information:** The weather information card will display detailed weather data for the searched location.

## Project Structure

```
.
├── public/
│   ├── index.html       # Main HTML file
├── src/
│   ├── App.css          # App-specific styles
│   ├── App.jsx          # Main React component
│   ├── index.css        # Global styles
│   ├── InfoBox.jsx      # Info box component
│   ├── main.jsx         # Entry point
│   ├── SearchBox.css    # Search box styles
│   ├── SearchBox.jsx    # Search box component
│   ├── WeatherApp.jsx   # Weather app component
├── .env                 # Environment variables
├── package.json         # NPM dependencies and scripts
```


## Contributing

Contributions are welcome! Please fork the repository and use a feature branch. Pull requests are warmly welcome.

1. **Fork the repository**
2. **Create a new branch:**
   ```sh
   git checkout -b feature-branch-name
   ```
3. **Make your changes**
4. **Commit your changes:**
   ```sh
   git commit -m 'Add some feature'
   ```
5. **Push to the branch:**
   ```sh
   git push origin feature-branch-name
   ```
6. **Create a pull request**


[Instagram](https://www.instagram.com/aditya_nandan._/)
<img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" />


# (PS: This site is a simple representation of React.js as is built for understanding of its funcationality and not the UI part)

Thank you for visiting the Weather Search App project! If you have any questions or feedback, feel free to open an issue. Happy coding!

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
