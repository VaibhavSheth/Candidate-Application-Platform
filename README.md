Candidate Application Platform
This project aims to create a candidate application platform where users can browse job listings, apply filters to refine their search, and experience infinite scroll for a seamless browsing experience. The platform prioritizes user-friendliness and intuitive design for easy navigation and application to jobs.

Requirements
Job Cards: Display each job listing as a card with the following details:
Job title
Company name
Location
Job description (limited with option to expand)
Experience required
Apply button/link
Filters: Implement filters for refining job listings based on:
Minimum experience
Company name
Location
Remote/on-site availability
Tech stack
Role
Minimum base pay
Infinite Scroll: Enable infinite scroll functionality to load additional job listings as users scroll down the page. No "Load More" button should be required.
Responsive Design: Ensure the platform is responsive across different screen sizes, including mobile devices (optional but recommended).

Technology Stack
ReactJs: Frontend library for building user interfaces.
Redux: State management library for managing application state.
CSS: Styling language for designing the user interface.
Material UI: UI component library for React applications.

Project Structure
src/components/: Contains reusable UI components like JobCard and Filter.
src/containers/: Holds container components like JobListContainer responsible for managing state and data fetching.
src/services/: Includes apiService.js for making HTTP requests to fetch job listings.
src/redux/: Houses Redux actions and reducers for managing job listings state.
public/: Holds index.html and other public assets.
README.md: Documentation for the project.

Setup
Clone the repository.
Navigate to the project directory.
Run npm install to install dependencies.
Start the development server with npm start.
Access the application in your browser.

Notes
For the scope of this assignment, focus on implementing the search jobs section only, excluding post-apply logic/UI.
Ensure that API endpoints match the requirements for fetching job listings.
Test the application thoroughly to ensure proper functionality and responsiveness.
Contributors
Vaibhav Sheth
Feel free to reach out for any clarifications or assistance. Happy coding!
