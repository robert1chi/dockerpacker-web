import { createHash } from "crypto";

const currentDate = new Date().toString()
const randomNumber = (Math.random() + 0.1).toString()
const hash = createHash('sha1').update(currentDate + randomNumber).digest('hex')

export const TOKEN_NAME = hash