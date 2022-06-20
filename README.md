# Blog Client 

This application was coded in ReactJS and created with create-react-app. This application is the user-client for people to see blog posts as well as be able to post comments on posts. This project is part of "The Odin Project's" Javascript webdev curriculum. This project is my first fullstack application and consists of a React frontend and Express backend.

# Frontend

As said before, this application was written in ReactJS with the help of create-react-app. The routing between pages was implemented with react-router-dom. The only functionality on this frontend client is the ability to view posts as well as create comments. 

## Client

As said above, this application can only send get requests for retrieving posts and posting comments to the backend. There is no way to create posts, delete posts, etc. in this application, and even if someone tries to do it indirectly, the routes require a jwt sent in the headers. You can checkout the CMS [here](https://github.com/Jerriath/blog-cms)

# Backend

The backend for this app was created using NodeJS and Express. The frontend makes RESTful api calls to the backend which will then send the appropriate information back to the frontend to be rendered. You can checkout the backend api [here](https://github.com/Jerriath/blog-api)