## Getting Started

Note: If the 100 api requests per month get exhausted it may throw errors, in that case please contact me using twitter or linkedin so that i can change the API KEY.

The app uses caching by default to avoid excess API calls and avoid breakage due to limitations on the free api of mediastack.

In the future i plan to add a better news api.

Make a .env file and add the following keys:
```bash
MEDIASTACK_API_KEY
STEPZEN_API_KEY
```
Stepzen needs to be setup it is mostly used to convert REST API to GraphQL in this project
Mediastack is the news api to fetch data


Run the following commands
```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the website.
