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
    await sendMail('contact@beautytotalaccess.com', data.subject, data.content);
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
    const { email, store } = req.body;
    if (!email || !store) {
      return res.status(300).json({
        status: 'FAIL',
        message: 'Missing Fields',
      });
    }
    const storeAdd =
      parseInt(store) === 0
        ? 'https://sementy.store/cart/47062053257528:1?channel=buy_button'
        : 'https://sementy.store/cart/47144286159160:1?channel=buy_button';
    const data = emailToUser(storeAdd);
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
