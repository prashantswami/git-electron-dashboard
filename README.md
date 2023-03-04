# Git Dashboard

This ElectronJS application displays different charts related to the Git repository's commits, such as the number of commits per user, the number of commits per date, and more. The app uses the simple-git package to interact with the Git repository and Chart.js for data visualization.

## Installation

1. Clone the repository using the following command:
```

```
2. nstall the dependencies using npm:


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