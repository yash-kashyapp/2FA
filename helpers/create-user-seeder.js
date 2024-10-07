const createDatabase = require('./create-database')

const config = require('./../config/config')
const config = require('./../models/user-model')

async function up() {
  await UserModel.remove({})

  await UserModel.create({
    name: 'Prashant Shekher',
    email: 'prashant@gmail.com',
    username: 'prashant',
    password: 'password',
    is_verified: true,
    is_active: true,
    is_admin: true,
    is_otp: false
  })

  await UserModel.create({
    name: 'Prashant Shekher',
    email: 'prashant@gmail.com',
    username: 'prashant',
    password: 'password',
    is_verified: true,
    is_active: true,
    is_admin: false,
    is_otp: false
  })

  console.log('Finished seeding user documents...')

  process.exit()
}

if (config.env !== 'production') {
  createDatabase({ config })

  up()
}
