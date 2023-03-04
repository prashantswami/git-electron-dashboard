# Git Dashboard

This ElectronJS application displays different charts related to the Git repository's commits, such as the number of commits per user, the number of commits per date, and more. The app uses the simple-git package to interact with the Git repository and Chart.js for data visualization.

## Installation

1. Clone the repository using the following command:
```
    git clone https://github.com/prashantswami/git-electron-dashboard.git
```
2. Install the dependencies using npm:


## Usage
1. Start the app using the following command:

```
    npm start
```
This will launch the Electron app and display the dashboard.

2. Select the repository path by clicking the "Choose Repository" button and selecting the path to the Git repository.

3. Click the "Render Charts" button to generate the charts based on the repository's data.

4. The app displays the following charts:

    - Commits by Author: This chart displays the number of commits made by each author in the repository.

    - Commits by Date: This chart displays the number of commits made on each date in the repository.

## Contributing

Contributions are always welcome! Please follow the standard Git workflow:

1. Fork the repository.

2. Create a new branch with a descriptive name.

3. Make the desired changes.

4. Commit your changes with a descriptive commit message.

5. Push your changes to your fork.

6. Submit a pull request to the main repository.

## License

This project is licensed under the MIT License.