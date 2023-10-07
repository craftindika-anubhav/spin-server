import express from 'express';
import Email from '../models/email.model.js';
import sendMail from '../utils/nodemailer.util.js';
import { emailToAdmin, emailToUser } from '../constants/constant.js';

const router = express.Router();

router.post('/send-admin', async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(300).json({
        status: 'FAIL',
        message: 'Missing Fields',
      });
    }
    const data = emailToAdmin(email);
    await sendMail('noreply@sementy.shop', data.subject, data.content);
    const newEmail = new Email({
      email,
    });
    await newEmail.save();
    res.status(200).json({
      response: 'SUCCESS',
      message: 'Email Sent to Admin',
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: 'FAIL',
      message: 'Internal Server Error',
    });
  }
});

router.post('/send-user', async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(300).json({
        status: 'FAIL',
        message: 'Missing Fields',
      });
    }
    const data = emailToUser();
    await sendMail(email, data.subject, data.content);
    res.status(200).json({
      response: 'SUCCESS',
      message: 'Email Sent to User',
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: 'FAIL',
      message: 'Internal Server Error',
    });
  }
});

export default router;
