# Playwright Project

This project is a test automation framework built using Playwright, designed for testing order placements and handling edge cases in a web application. It follows the Page Object Model (POM) design pattern to ensure maintainability and scalability.

## Project Structure

The project is organized as follows:

$ ./tree-md .
# Project tree

 * /playwright-project
   * /fixtures
     * orderData.json
     * userData.json
   * /tests
     * orders.spec.js
   * /pages
     * homePage.js  
     * .
     * .
   * playwright.config.js
   * package.json


## Getting Started

### Prerequisites

- Node.js (version 14 or later)
- npm or yarn (Node Package Manager)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd playwright-project

2. Install the dependencies:
 ```bash
 yarn install
```
### Configuration
The Playwright configuration file (playwright.config.js) contains settings for the Playwright test runner, including browser options, timeout settings, and test directory paths.

### Running Tests
To run the tests, use the following command:
```bash
yarn playwright test --ui
```
you can see ScreenReordingOfTests as well to check execution

This will execute all tests located in the /tests directory.

### Writing New Tests
New test files can be created in the /tests directory, following the naming convention *.spec.js.
Utilize the Page Object Model by creating or modifying page objects in the /pages directory to keep your tests clean and maintainable.

### Fixtures
The /fixtures directory contains JSON files with test data, such as user login credentials, which can be used across different test files.

### Example Usage of Fixtures
```bash 
const userLoginDetails = require('../fixtures/userLogin.json');
```
