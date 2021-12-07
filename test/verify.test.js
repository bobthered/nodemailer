// imports
import _dotenv from 'dotenv/config';
import verify from '../src/verify.js';

test('verify default transporter', async () => {
  expect.assertions(1);
  const data = await verify();
  expect(data).toBe(true);
});

test('verify custom transport', async () => {
  expect.assertions(1);
  const transport = {
    service: 'gmail',
    auth: {
      pass: process.env.NODEMAILER_PASS,
      user: process.env.NODEMAILER_USER,
    },
  }
  const data = await verify({ transport });
  expect(data).toBe(true);
})

test('verify custom transporter with error', async () => {
  expect.assertions(1);
  const transport = {
    service: 'gmail',
    auth: {
      pass: 'wrongpassword',
      user: 'wrongemail',
    },
  }
  await expect(verify({ transport })).rejects.toThrow();
})