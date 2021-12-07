// imports
import sendMail from '../src/sendMail';

test('sendMail with default transport', async () => {
  const options = {
    from: process.env.NODEMAILER_FROM,
    to: 'bobmcaleavey@gmail.com',
    subject: '@bobthered/nodemailer TEST',
    text: 'Test',
    html: '<b>Test</b>'
  }
  await expect(sendMail(options)).resolves.not.toThrow();
})

test('sendMail custom transport', async () => {
  const transport = {
    service: 'gmail',
    auth: {
      pass: process.env.NODEMAILER_PASS,
      user: process.env.NODEMAILER_USER,
    },
  }
  const options = {
    transport,
    from: process.env.NODEMAILER_FROM,
    to: 'bobmcaleavey@gmail.com',
    subject: '@bobthered/nodemailer TEST',
    text: 'Test',
    html: '<b>Test</b>'
  }
  await expect(sendMail(options)).resolves.not.toThrow();
})

test('sendMail custom transport with error', async () => {
  const transport = {
    service: 'gmail',
    auth: {
      pass: 'wrongpassword',
      user: 'wrongemail',
    },
  }
  const options = {
    transport,
    from: process.env.NODEMAILER_FROM,
    to: 'bobmcaleavey@gmail.com',
    subject: '@bobthered/nodemailer TEST',
    text: 'Test',
    html: '<b>Test</b>'
  }
  await expect(sendMail(options)).rejects.toThrow();
})