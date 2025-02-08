## Test Suite: Product Creation

### Test Case TC001: Create Basic Product

**Objective**: Verify that a new product can be created with valid data

**Preconditions**:
- System is accessible
- User has appropriate permissions

**Steps**:
1. Navigate to product creation page
2. Enter valid product name: "Magic Sword"
3. Enter valid price: 99.99
4. Enter description: "A beginner's practice sword"
5. Select category: "Equipment"
6. Click "Create Product" button

**Expected Results**:
- Product is created successfully
- System displays success message
- New product appears in product list
- All entered data is saved correctly

### Test Case TC002: Validate Price Input

**Objective:** Verify that system properly validates price input

**Steps**:
1. Navigate to product creation page
2. Enter valid product name
3. Enter invalid price: "not a number"
4. Complete other required fields
5. Attempt to submit form

**Expected Results**:
- System prevents form submission
- Error message indicates price must be a number
- Form data is preserved
