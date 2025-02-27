const mongoose = require('mongoose')
require('dotenv').config()

module.exports = async () => {
	try {
		await mongoose.connect(process.env.DATABASE_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		console.log('Database successfully connected')
	} catch (error) {
		console.error(`Database Connectivity Error: ${error}`)
		throw new Error(error)
	}
}
