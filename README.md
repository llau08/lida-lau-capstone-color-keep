# Getting Started with Create React App

# Color Keep

## Responsive web app designed to track hairstylists' clientele and hold info from previous visits.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Instructions to Get Started

1. Download the code or open terminal &
   git clone git@github.com:llau08/lida-lau-capstone-color-keep.git
2. In one terminal, cd into the client file and run 'npm install'
3. In a seperate terminal, cd into server file and run 'npm install'
4. Open mysql and create a database, call it 'color_keepdb'
5. In the server terminal run 'npm run migrate'
6. Followed by 'npm run seed'
7. Create .env file in the server folder, add the following "PORT = 8080"
8. You will need a secret key. In server terminal, run:
   node -e "console.log(require('crypto').randomBytes(256).toString('base64'));"
9. Take the key and copy/paste the key to the .env file. It should read the following: JWT_SECRET= <--_insert key here_-->
10. Run 'npm start' on both client and server terminals

### Features Included:
- MAKE A NEW USER
- LOGIN TO THE APP
- ADD A CLIENT WITH A PHOTO OF THEIR HAIRSTYLE
- SEARCH FOR AN EXISTING CLIENT
- EDIT EXISTING INFO FROM A PROFILE
- DELETE A PROFILE ENTIRELY

### Next Steps
Continue to add more features such as:
- APPOINTMENT BOOKING SYSTEM,
- PROPER SIGN OUT FUNCTIONALITY

### Tech Stack:
- React, HTML, SASS, Express, Axios, Javascript, MySQL, Node.js, Knex.js, Postman

- API used for this project: https://cloudinary.com/

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
