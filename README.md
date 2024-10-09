# 2FA Authentication System

This project implements a Two-Factor Authentication (2FA) system without using third-party services. It is built using **Node.js**, **jQuery**, **Pug** for templating, and **MongoDB** as the database.

## Features
- **User Signup**: Users can create accounts through a signup page.
- **User Verification**: After signing up, users are verified via an OTP (One-Time Password) sent to their email.
- **2FA with OTP**: An OTP verification mechanism ensures that users are authenticated with an additional security layer.
- **Login without OTP**: Users can log in without OTP (for faster access) but with lower security.
- **Login with OTP**: Users can also opt for an additional OTP verification during login for enhanced security.

## Technology Stack
- **Node.js**: Backend server logic
- **jQuery**: Frontend interactivity
- **Pug**: Templating engine for rendering HTML pages
- **MongoDB**: NoSQL database for storing user details
- **Express.js**: Node.js framework for handling routes and server requests
