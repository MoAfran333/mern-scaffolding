# This is a Scaffolding of basic MERN projects

## **Warning** - It only Works for Ubuntu

## This Repo has TailwindCSS initiated in it

### To use it -

- Clone this Repo.
- Delete the .git file in the root directory of your Project using `rm -rf .git`.
- Check if the Packages are outdated using `npm run check-updates` and update if needed using `npm run update-all`
- Install the Dependencies using `npm run install-all`.
- Connect to MongoDB and paste the URI in the .env file.
- Do the Needed Modifications to your Project.
- Add and Commit to your Repo.
- push to your Repo.

### Additional Points -

* This Repo has TailwindCSS initiated.
*  It uses vite-react for its frontend and the PORT is set to 3000.
* It uses proxy for /api requests and redirects them to localhost:5000.
* The server is set to run on PORT 5000.
* You can use Concurrently from the root directory to start both the server and the client simultaneously using `npm run dev`.
* You can also start the client and server individually using `npm run dev-client` and `npm run dev-server.

### Note - if you get `unknown at rule @tailwind` Error

- Try to install Tailwind CSS intellisense extension for VS Code
- Configure the files.associations - Add "\*.css" : tailwindcss.
- Change the language of the index.css file to tailwindcss
