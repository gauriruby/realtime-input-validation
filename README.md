# realtime-input-validation


## Project Overview
This project demonstrates how to create a simple HTML form with real-time validation for name, email, and password fields using JavaScript. It uses event listeners to validate the input as the user types or moves between fields, displaying error messages when the input is invalid and removing them when corrected.

## Features
- Real-time input validation for:
  Name: Must not be empty.
  Email: Must follow a valid email format.
  Password: Must be at least 8 characters long.
- Dynamic error messages that:
  - Appear when input is invalid.
  - Disappear as soon as the input is corrected.
- Event listeners attached to the form inputs for the following events:
  - `input`: Validates input as the user types.
  - `blur`: Validates when the field loses focus.
  - `submit`: Prevents form submission if there are validation errors.

## Technologies Used
HTML: Provides the structure of the form.
CSS: Styles the form and error messages.
JavaScript: Implements the real-time validation logic.

## How It Works
1. Name Validation: Ensures the name field is not empty.
2. Email Validation: Uses a regular expression to validate the email format.
3. Password Validation: Ensures the password is at least 8 characters long.

When the user interacts with the form, error messages will appear beneath each input field if the data entered is invalid. The error messages will disappear as soon as the input meets the validation criteria.

## File Structure
