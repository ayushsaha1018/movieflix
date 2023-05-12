"use server";

const { default: Contact } = require("@/models/contact");
const { default: dbConnect } = require("@/utils/connectDB");

export const submitForm = async (data) => {
  try {
    await dbConnect();
    await Contact.create(data);
    return { status: "OK", message: "Message sent successfully!" };
  } catch (error) {
    return { status: "ERROR", message: "Server error!, please try again!" };
  }
};
