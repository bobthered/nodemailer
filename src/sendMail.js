// imports
import gmail from './transport/index.js';
import nodemailer from 'nodemailer';

const sendMail = async (options) => {
  // destructure options
  const transport = options?.transport || gmail

  // create transporter
  const transporter = nodemailer.createTransport(transport);

  // send mail
  try {
    const info = await transporter.sendMail(options);
    return info;
  } catch (error) {
    throw error;
  }
}

export default sendMail;