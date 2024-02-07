"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const twilio_1 = require("twilio");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
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
const client = new twilio_1.Twilio(accountSid, authToken);
const sendSMS = (body) => __awaiter(void 0, void 0, void 0, function* () {
    const msgOptions = {
        from: twilioNumber,
        to: myNumber,
        body
    };
    try {
        const message = yield client.messages.create(msgOptions);
        console.log(message);
    }
    catch (error) {
        console.error(error);
    }
});
sendSMS("Hello, this is KMI!");
