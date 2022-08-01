import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    passsword: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "john@example.com",
    passsword: bcrypt.hashSync("123456", 10),

    //already set as false by default in userSchema
    // isAdmin: false,
  },
  {
    name: "Jane Doe",
    email: "jane@example.com",
    passsword: bcrypt.hashSync("123456", 10),
  },
];

export default users;
