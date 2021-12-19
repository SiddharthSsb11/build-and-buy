import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'xyz',
    email: 'xyz@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'abc',
    email: 'abc@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users