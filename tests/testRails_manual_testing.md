# E2E Product Creation Test Cases for Product Management System

## Getting Started with TestRail

### Quick Setup Guide
1. Log in to your TestRail account
2. Create a new project for this Product Management System
3. Create a new test suite called "Product Creation E2E"
4. Add the following test cases to your suite

## Test Suite: Product Creation

### Test Case TC001: Basic Product Creation

**Objective**: Verify that a new product can be created with valid inputs

**Preconditions**:
- Web application is running
- User is on the product creation page

**Steps**:
1. Enter "Test Product" in the Name field
2. Enter "99.99" in the Price field
3. Enter "A sample description" in the Description field
4. Click "Create Product" button


**Expected Results**:
- Success message appears
- Product is added to the product list
- Input fields are cleared
- New product is visible in the product list

**Test Data**:
- Name: test Product
- Price: 99.99
- Description: A sample description

### Test Case TC002: Validation - Empty Name Field

**Objective:** Verify name field validation

**Precondition**
- Web application is running
- User is on the product creation page

**Steps**:
1. Leave Name field empty
2. Enter valid price
3. Enter description
4. Click "Create Product" button


**Expected Results**:
- Error message displayed
- Product is NOT created
- Form remains populated with entered data

**Test Data**:
- Name: 
- Price: 99.99
- Description: A sample description

### Test Case TC003: Validation - Invalid Price

**Objective:** Verify price field validation

**Precondition**
- Web application is running
- User is on the product creation page

**Steps**:
1. Enter valid product name
2. Enter invalid price (e.g. negative or non-numeric)
3. Enter description
4. Click "Create Product" button


**Expected Results**:
- Error message displayed
- Product is NOT created
- Form remains populated with entered data

**Test Data**:
- Name: test Product
- Price: gg.ff
- Description: A sample description

### Test Case TC004: Maximum Products List

**Objective:** Verify product list functionality

**Precondition**
- Web application is running
- User is on the product creation page
- Multiple products have been created

**Steps**:
1. Create multiple products (more than 10)
2. Observe the product list


**Expected Results**:
- All created products are displayed
- Scrolling or pagination works correctly
- No performance issues with multiple products

**Test Data**:
- Name: test Product ++, 
- Price: 99.99 ++,
- Description: A sample description ++

### Test Case TC005: Long Input Handling

**Objective:** Test handling of long input

**Precondition**
- Web application is running
- User is on the product creation page

**Steps**:
1. Enter a very long product name (>100 characters)
2. Enter valid price
3. Enter long description
4. Click "Create Product" button


**Expected Results**:
- Appropriate validation occurs
- Error message if inputs exceed maximum length
- Product is NOT created if validation fails

**Test Data**:
- Name: test Product (add 100 more char)
- Price: 99.99
- Description: A sample description (that needs to be made ridiculously long)

### TestRail Quick Tips

- Use the "Add Case" button to create new test cases
- Tag cases with appropriate sections
- Use labels to categorize test types (e.g., "Validation", "Positive", "Negative")
- Consider creating test runs to track execution
- Document any bugs or issues directly in TestRail

### Recommended Workflow

- Create test cases in TestRail
- Manually execute each test case
- Log results (Pass/Fail)
- If failed, create a bug report
- Retest after fixes are implemented