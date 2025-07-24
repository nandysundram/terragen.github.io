# Terraform Tools UI

## Overview
Terraform Tools UI is a web application designed to provide users with tools for generating and checking Terraform configurations. The application features a stylish user interface with animations and transitions to enhance user experience.

## Project Structure
```
terraform-tools-ui
├── public
│   ├── index.html        # Main HTML structure for the Terraform Tools UI
│   └── login.html       # HTML structure for the login page
├── src
│   ├── styles
│   │   ├── main.css     # Main styles for the Terraform Tools UI
│   │   └── login.css    # Styles specific to the login page
│   ├── scripts
│   │   ├── main.js      # JavaScript logic for the Terraform Tools UI
│   │   └── login.js     # JavaScript logic for the login page
│   └── assets
│       └── fonts        # Custom font files used throughout the project
├── package.json          # Configuration file for npm
└── README.md             # Documentation for the project
```

## Features
- **Terraform Generation**: Users can input descriptions to generate Terraform configurations.
- **Compliance Checking**: Users can check their Terraform configurations for compliance.
- **Image to Terraform**: Users can upload images to generate Terraform code based on the architecture depicted.
- **User Authentication**: A login page for user authentication to access the tools.

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd terraform-tools-ui
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Start the application:
   ```
   npm start
   ```

## Usage
- Access the main application at `public/index.html`.
- Navigate to the login page at `public/login.html` for user authentication.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.