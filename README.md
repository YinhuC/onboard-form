# Onboarding Form

Staff member onboarding form along with a program to calculate annual tax and superannuation for a given salary.

## Prerequisites

- Node.js LTS version should be installed on your machine.

## Getting Started

---

To run the Agile Task App locally, follow these steps:

**1.** Clone the repository:

    git clone https://github.com/YinhuC/onboard-form.git

**2.** Install dependencies:

    npm install

**3.** Run tests:

    npm test

**4.** Start the application:

    npm start
    
**5.** Use application:
  - Enter a salary into the salary input field and hit the submit button.
  - Tax and super should be shown in an alert box to the user.


## Decisions
- I used the HTML/JS approach as using CRA allows for a quick set up enabling more focus on the form features. This allows for an interactive POC, getting a better feel for input fields and how to group everything.
- Personal information section, including name, d.o.b, adderss, email, phone. This information is kept to identify the user and enabling a way to communicate with them either through email or phone.
- Bank and tax information, this section includes tax number, bank account number, bank account number, and salary. These are needed for tax reporting purposes and salary payments to the bank account. I think in this case the salary would be a field that would be inputted by the company rather than the employee, so should be excluded or filled in and disabled, however, it is needed in this case for the tax calculation function part.
- Each input has an 'id', and a corresponding label with a 'for' attribute enabling screen readers to announce the purpose of each input. Grouping related fields with fieldsets and legends aiding the users understanding of the sections. The entire form can be navigated by tabbing improving accessiblity for those that rely on keyboard input.
- Assume tax rate follows as on PDF, and super is 11%.








