# @bobthered/nodemailer

## Description
Nodemailer wrapper helper.

## Installation
```
npm i @bobthered/nodemailer
```

## Basic Usage
```js
// import sendMail from repo
import { sendMail } from '@bobthered/nodemailer'

// initiate mail transport
const transport = {
  service: 'gmail',
  auth: {
    pass: 'gmail_password',
    user: 'gmail_username_with_email'
  }
}

// initiate mail options
const options = {
  transport,
  from: 'John Doe <john.doe@johndoe.com>',
  to: 'jane.doe@janedoe.com',
  subject: 'Email Subject',
  text: 'Body of the email goes here',
  html: '<b>Body> of the email goes here',
}

try {
  await sendMail(options);
} catch (error) {
  console.error(error)
}
```