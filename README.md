
# AP CSP Selection & Iteration Review Website

This is a classroom review website for an AP Computer Science Principles class. It uses original multiple-choice questions written in an AP-style format and uses AP CSP pseudocode conventions.

## Topics
- Flowcharts
- Conditionals
- Booleans
- Boolean operators
- Nested conditionals
- While loops
- For loops
- Nested for loops
- General iteration

## Files
- `index.html` — student-facing website
- `styles.css` — layout and styling
- `app.js` — quiz logic, scoring, targeted practice, Google Sheets submission
- `config.js` — paste your Google Apps Script Web App URL here
- `Code.gs` — Google Apps Script backend
- `README.md` — setup instructions

## Google Sheets setup
1. Create a Google Sheet for the class.
2. Open **Extensions → Apps Script**.
3. Copy the contents of `Code.gs` into the Apps Script editor.
4. Save the project.
5. Choose **Deploy → New deployment**.
6. Select **Web app**.
7. Set **Execute as: Me**.
8. Set **Who has access: Anyone**.
9. Deploy and authorize if prompted.
10. Copy the web app `/exec` URL.
11. Open `config.js` and paste the URL into `GOOGLE_SHEET_ENDPOINT`.
12. Host the website files (GitHub Pages, Google Sites embed, school web server, Netlify, etc.).

## Data collected
The sheet stores:
- timestamp
- student name
- class period
- teacher
- score
- total questions
- percentage
- strengths
- areas for improvement
- topic scores
- individual question results

## Important privacy note
Because student names are being collected, use your school's approved account/domain and follow your district's student-data/privacy requirements. The website itself does not require student Google sign-in.

## Question design
The questions are original classroom practice questions, not copied College Board questions. The current AP CSP exam has 70 multiple-choice questions, including single-select and multiple-select questions. This review intentionally uses single-select questions for simplicity while emphasizing selection, Boolean logic, and iteration.
