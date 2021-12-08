# Getting Started with Create React App

# Color Keep

## Responsive web app designed to track hairstylists' clientele and hold info from previous visits.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Instructions to Get Started

1. Download the code or open terminal &
   git clone git@github.com:llau08/lida-lau-capstone-color-keep.git
2. In one terminal, cd into the client file and run `npm install`
3. In a seperate terminal, cd into server file and run `npm install`
4. Open mysql and create a database, call it 'color_keepdb'
5. In the server terminal run `npm run migrate`
6. Followed by `npm run seed`
7. Create .env file in the server folder, add the following "PORT = 8080"
8. You will need a secret key. In server terminal, run:
   `node -e "console.log(require('crypto').randomBytes(256).toString('base64'));"`
9. Take the key and copy/paste the key to the .env file. It should read the following: JWT*SECRET= <--\_insert key here*-->
10. Run `npm start` on both client and server terminals

### Features Included:

- Make a new user
- Login to the app
- Add a client profile and upload a photo of their hairstyle
- Search for existing clients
- Edit existing profiles
- Delete a profile entirely

### Next Steps

Continue to add more features such as:

- Appointment booking system
- Proper sign out functionality & use of protected routes

### Tech Stack:

- React, HTML, SASS, Express, Axios, Javascript, MySQL, Node.js, Knex.js, Postman

- API used for this project: https://cloudinary.com/
