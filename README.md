# DevTinder
- Create a vite + React application 
- Install Tailwind
- Install Daisy UI
- Add NavBar component to App.jsx
- Create a NavBar.jsx seprate Componet file
- Install react router dom 
- Create BrowseRouter > Roters> Route =/Body > RouterChildren
- Create an Outlet in Body Component
- Create a footer


- Install Axios
- CORS - Install core in backend  => add middleware configurations : origin, credentials : true
- Whenever making API call so pass axios => { withCredentials : true }


- Install Redux Toolkit
- ConfigureStore => Provider => createSlice => add reduces to store
- Login and see data is coming properly in the store
- NavBar sholud update as soon as user logs in 
- Refactor folder structure 
- Should not be access other routes without login(protected routes)
- if token is not present redirect user to login page
- Logout feature 
- Profile Page 
- Get the feed and and the feed in the store 
- bulid user card on feed 
- Edit profile feature
- Show Toast message on Save profile 
- New page for See all my connections 
- New page for See all ny connection Requests
- Feature- Accept/Reject Connection Request

- Send/ignore the user card from Feed
- Signup New User
- E2E Testing 


# Deployment
 - signup on AWS
 - Launch instance
 - chmod 400 <secret>.pem
 - ssh -i "dec-Tinder-secret.pem" ubuntu@ec2-54-206-86-145 ap-southeast-2.compute.amazonaws.com
 - Install Node version 24.11.1
 - Git clone backend and frontend files 

- Frontend
  - npm install  => install dependencies
  - npm run build
  - 



Body 
    NavBar
    Route = / => Feed
    Route = /login  => Login
    Route = /connections => Connections
    Route = /profile  => Profile
    