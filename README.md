# 🎯 Learning Objectives

- Manual testing using TestRail
- Unit testing with Jest
- Integration testing
- End-to-End (E2E) testing
- Test-Driven Development (TDD)
- API testing
- Frontend testing

# 📁 Project Structure

    ```bash

    qa-testing-project/
    ├── src/
    │ └── api/
    │ └── productAPI.js # Product management logic
    ├── tests/
    │ ├── unit/
    │ │ └── productAPI.test.js # Unit tests
    │ └── integration/
    │ └── productWorkflow.test.js # Integration tests
    ├── public/
    │ └── index.html # Frontend interface
    ├── server.js # Express server
    ├── package.json
    └── README.md


# 🚀 Getting Started

## Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)

## Installation

1. Clone the repository:

   ```bash
   git clone <https://github.com/Dave-Vermeulen/QA-Testing.git>
   cd qa-testing-project

2. Install dependencies:

    ```bash
    npm init -y
    npm install express jest @babel/core @babel/preset-env

3. Add test script to package.json:

    ```bash
    {
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "start": "node server.js"
       }
    }

4. Create Jest config file (jest.config.js):
    
    ```bash
    module.exports = {
        testEnvironment: 'node',
        verbose: true
    };

## Running the Application

1. Start the server:
    ```bash
    npm start

2. Visit http://localhost:3000 in your browser.

## Running Tests

1. Run all tests:
    ```bash
    npm test
    npm run test:watch 

# 📝 Testing Approach

1. Manual Testing with TestRail

- Use TestRail Free Acc.
- Test cases cover:
    - Product creation
    - Input validation
    - Error handling
    - UI responsiveness

2. Unit Tests

Located in ./tests/unit/productAPI.test.js:

3. Integration Tests

Located in tests/integration/productWorkflow.test.js:

## 🧪 Jest Testing Guide

### Basic Test Structure
    ```bash
    describe('Group description', () => {
    test('test description', () => {
        // Arrange
        const input = {};
        
        // Act
        const result = someFunction(input);
        
        // Assert
        expect(result).toBe(expected);
        });
    });

### Common Jest Assertions
    
    ```bash
    expect(value).toBe(other)           // Strict equality
    expect(value).toEqual(other)        // Deep equality
    expect(value).toHaveProperty('key') // Object has property
    expect(fn).toThrow()                // Function throws
    expect(value).toBeTruthy()          // Value is truthy
    expect(array).toContain(item)       // Array contains item

### Test Hooks

    ```bash
    beforeAll(() => {})    // Runs once before all tests
    afterAll(() => {})     // Runs once after all tests
    beforeEach(() => {})   // Runs before each test
    afterEach(() => {})    // Runs after each test

# 📚 Learning Path

## Start with Manual Testing:

- Review the UI at [http://localhost:3000](http://localhost:3000)
- Create test cases in TestRail
- Practice exploratory testing

## Move to Unit Testing:

- Study `productAPI.test.js`
- Add new test cases
- Learn Jest assertions

## Progress to Integration Testing:

- Study `productWorkflow.test.js`
- Test multiple operations together
- Handle async operations

## Advanced Topics:

- Add E2E tests with Cypress/Selenium
- Implement test coverage reporting
- Practice TDD

# 🤝 Contributing

Feel free to submit issues and enhancement requests!

# 📖 Additional Resources

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [TestRail Documentation](https://docs.gurock.com/testrail-userguide/start)
- [Express.js Documentation](https://expressjs.com/)
- [Testing Best Practices](https://martinfowler.com/articles/practical-test-pyramid.html)

# 📋 TODO List
- [ ] Add E2E tests
- [ ] Implement test coverage reporting
- [ ] Add more complex product validation
- [ ] Create API documentation
- [ ] Add authentication system

