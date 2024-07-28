import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

export const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await userModel.findOne({ email });
    if (!existingUser) return res.status(404).json("User doesn`t exist");
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect) return res.status(400).json("Incorrect Password");
    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      "test"
    );
    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    console.log(error);
  }
};

export const signup = async (req, res) => {
  const { email, password, firstName, secondName, confirmPassword } = req.body;
  try {
    const existingUser = await userModel.findOne({ email });
    if (existingUser) return res.status(400).json("User already exist");
    if (password !== confirmPassword)
      return res.status(400).json("Password doesn`t match");
    const hashedPassword = await bcrypt.hash(password, 12);
    const result = await userModel.create({
      email,
      password:hashedPassword,
      name: `${firstName} ${secondName}`,
    });
    const token = jwt.sign({ email: result.email, id: result._id }, "test");
    res.status(200).json({ result, token });
  } catch (error) {
    console.log(error);
  }
};
export const fechUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    if (!users) {
      res.status(404).json("no users found");
    }
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await userModel.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json("User Not Found");
    }
    res.status(200).json(deletedUser);
  } catch (error) {
    console.log(error);
  }
};
