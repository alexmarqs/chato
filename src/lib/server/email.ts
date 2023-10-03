import nodemailer from 'nodemailer';
import postmarkTransport from 'nodemailer-postmark-transport';

const transport = nodemailer.createTransport(
  postmarkTransport({
    auth: {
      apiKey: process.env.POSTMARK_API_KEY || ''
    }
  })
);

export const sendTransactionalEmail = async (
  to: string,
  subject: string,
  html: string
) => {
  await transport.sendMail({
    from: process.env.SENDER_EMAIL || '',
    to: to,
    subject: subject,
    html: html,
    messageStream: 'outbound' // this means that the email will be sent through the transactional stream
  });
};
