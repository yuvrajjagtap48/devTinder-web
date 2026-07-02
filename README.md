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
- 


# Deployment
 - signup on AWS
 - Launch instance
 - chmod 400 <secret>.pem
 - ssh -i "dec-Tinder-secret.pem" ubuntu@ec2-54-206-86-145 ap-southeast-2.compute.amazonaws.com
 - Install Node version 24.11.1
 - Git clone backend and frontend files 


- Frontend    
    - npm install  -> dependencies install
    - npm run build
    - sudo apt update
    - sudo apt install nginx
    - sudo systemctl start nginx
    - sudo systemctl enable nginx
    - Copy code from dist(build files) to /var/www/html/
    - sudo scp -r dist/* /var/www/html/
    - Enable port :80 of your instance
- Backend
    - updated DB password
    - allowed ec2 instance public IP on mongodb server
    - npm intsall pm2 -g
    - pm2 start npm --name "devTinder-backend" -- start
    - pm2 logs
    - pm2 list, pm2 flush <name> , pm2 stop <name>, pm2 delete <name>
    - config nginx - /etc/nginx/sites-available/default
    - restart nginx - sudo systemctl restart nginx
    - Modify the BASEURL in frontend project to "/api"

# Ngxinx config:
  - Frontend = http://43.204.96.49/
  - Backend = http://43.204.96.49:7777/

  - Domain name = devtinder.com => 43.204.96.49

  - Frontend = devtinder.com
  - Backend = devtinder.com:7777 => devtinder.com/api

  - nginx config : 

  - server_name 43.204.96.49;

  - location /api/ {
      proxy_pass http://localhost:7777/;  # Pass the request to the Node.js app
      proxy_http_version 1.1;
      proxy_set_header Upgrade $http_upgrade;
      proxy_set_header Connection 'upgrade';
      proxy_set_header Host $host;
      proxy_cache_bypass $http_upgrade;
    }


# Addding a custom Domain name
- purchased domain name from godaddy
- signup on cloudflare & add a new domain name
- change the nameservers on godaddy and point it to cloudflare
- wait for sometime till your nameservers are updated ~15 minutes
- DNS record: A devtinder.in 43.204.96.49
- Enable SSL for website


# Sending Emails via SES
- Create a IAM user
- Give Access to AmazonSESFullAccess
- Amazon SES: Create an Identity
- Verify your domain name
- Verify an email address identity
- Install AWS SDK - v3 
- Code Example https://github.com/awsdocs/aws-doc-sdk-examples/tree/main/javascriptv3/example_code/ses#code-examples
- Setup SesClient
- Access Credentials should be created in IAm under SecurityCredentials Tab
- Add the credentials to the env file
- Write code for SESClient
- Write code for Sending email address
- Make the email dynamic by passing more params to the run function


# Scheduling cron jobs in NodeJS
- Installing node-cron
- Learning about cron expressions syntax - crontab.guru
- Schedule a job
- date-fns
- Find all the unique  email Id who have got connection Request in previous day
- Send Email
- Explore queue mechanim to send bulk emails
- Amazon SES Bulk Emails
- Make sendEmail function dynamic
- bee-queue & bull npm packages


# Razorpay Payment Gateway Inegration
- Sign up on Razorpay & complete KYC 
- Cerated a UI for premium page
- Creating an API for create order in backend
- added my key and secret in env file
- Intialized Razorpay in utils
- creating order on Razorpay
- create Schema and model
- saved the order in payments collection
- make the API dynamic
- Setup RRazorpay webhook on your live APi
- Ref - https://github.com/razorpay/razorpay-node/tree/master/documents
- Ref - https://razorpay.com/docs/payments/server-integration/nodejs/integration-steps #integrate-with-razorpay-payment-gateway
- Ref - https://razorpay.com/docs/webhooks/validate-test/
- Ref - https://razorpay.com/docs/webhooks/payloads/payments/



Body 
    NavBar
    Route = / => Feed
    Route = /login  => Login
    Route = /connections => Connections
    Route = /profile  => Profile
    