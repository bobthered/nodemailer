// imports
import _dotenv from 'dotenv/config';

export default {
  service: 'gmail',
  auth: {
    pass: process.env.NODEMAILER_PASS,
    user: process.env.NODEMAILER_USER,
  },
}