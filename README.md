# automation

**Automation Assignment – Playwright

  This repository contains UI and API automation tests implemented using Playwright as part of the internship automation assignment.

**Framework & Tools Used** 

  1. Playwright (UI + API automation)
  2. JavaScript (Node.js)
  3. Page Object Model (POM) for UI tests
  4. Automation Anywhere Community Cloud (test application).

**Project Structure**

  automation-project/
    ├── pages/                  # Page Object Model files
    │   ├── login.page.js
    │   ├── automation.page.js
    │   └── form.page.js
    │
    ├── tests/                  # Test specifications
    │   ├── messageBox.spec.js
    │   ├── formUpload.spec.js
    │   └── learningInstance.api.spec.js
    │
    ├── auth.json                # Stored login session
    ├── playwright.config.js
    ├── package.json
    └── README.md



**Test Coverage**

🔹 Use Case 1: Message Box Task (UI Automation)

   1. Automated login using stored session

   2. Navigated to Automation
    
   3. Created Task Bot
    
   4. Added Message Box action
    
   5. Validated UI elements and save functionality


🔹 Use Case 2: Form with File Upload (UI Automation)

   1. Navigated to Automation

   2. Validated Create → Form option
    
   3. Verified availability of Textbox and File Upload controls
    
   4. UI behavior validated as per platform limitations



🔹 Use Case 3: Learning Instance API Flow (API Automation)

   Identified API endpoint:
   POST /cognitive/v3/learninginstances

   Validated:

   1. HTTP status code

   2. Response time
    
   3. Error response schema
    
   4. Confirmed backend authorization behavior (API is protected in Community Edition)

**Setup & Execution**

   1. Install dependencies
      npm install
      
   2️. Install Playwright browsers
      npx playwright install
      
   3️. Run UI tests
      npx playwright test
      
   4️. Run a specific test
      npx playwright test tests/messageBox.spec.js --headed (so on for different tests).

 **Notes & Environment Details**

   1. Login is handled via auth.json using Playwright’s storageState
    
   2. Some APIs (e.g., Learning Instance creation) are restricted in Automation Anywhere Community Edition
    
   3. API automation validates security enforcement where direct creation is not permitted
    
   4. UI actions may rely on human-like interactions due to platform behavior

**Conclusion**

  This project demonstrates:
    
  1. Practical UI automation using Playwright
    
  2. Structured test design with POM
    
  3. API validation using real backend endpoints
    
  4. Understanding of platform security and limitations


    
    
    
    
