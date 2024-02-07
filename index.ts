import { Twilio } from "twilio";
import dotenv from 'dotenv';

dotenv.config();

// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioNumber = process.env.TWILIO_FROM_NUMBER;
const myNumber = process.env.TO_NUMBER;

if (!accountSid || !authToken || !twilioNumber || !myNumber) {
    console.error('Twilio environment variables are not properly set.');
    process.exit(1);
}

const client = new Twilio(accountSid, authToken);

const sendSMS = async (body: string): Promise<void> => {
    const msgOptions = {
        from: twilioNumber,
        to: myNumber,
        body
    }
    try {
        const message = await client.messages.create(msgOptions);
        console.log(message);
    } catch (error) {
        console.error(error);
    }
}

sendSMS("Hello, this is KMI!");
