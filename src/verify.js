// imports
import gmail from './transport/index.js';
import nodemailer from 'nodemailer';

const verify = async (options) => {
  // destructure options
  const transport = options?.transport || gmail

  // create transporter
  const transporter = nodemailer.createTransport(transport);

  // verify
  try {
    const result = await transporter.verify();
    return result;
  } catch (error) {
    throw error;
  }
}

export default verify;