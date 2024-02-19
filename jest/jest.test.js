const supertest = require('supertest');
const app = require('../server.js');
const request = supertest(app);


// import { render, fireEvent } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect'; // for better matchers
// import NavBar from '../src/components/NavBar.jsx';

// describe('NavBar component', () => {
//   it('should change hamburger menu icon when clicked', () => {
//     const { container } = render(<NavBar />);
//     const mobileNavbar = container.querySelector('.mobile-navbar');
//     const hamburgerIcon = container.querySelector('#bar');

//     // Initial state check
//     expect(hamburgerIcon).toHaveClass('fa-bars');

//     // Simulate click event
//     fireEvent.click(mobileNavbar);

//     // Updated state check
//     expect(hamburgerIcon).toHaveClass('fa-times');
//   });
// });





// const request = require('supertest');
// const app = require('../server.js');
// const QuizPage = require('../QuizPage.js');


// describe('POST /QuizPage', () => {
//     it('should generate a quiz successfully', async () => {
//       const response = await request(app)
//         .post('/QuizPage')
//         .send({
//           language: 'JavaScript',
//           difficulty: 'novice',
//           number: 5,
//           type: 'normal'
//         });
//       expect(response.statusCode).toBe(200);
//       expect(response.text).toContain('1.');
//     });
//   });