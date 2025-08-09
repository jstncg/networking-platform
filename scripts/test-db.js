const { db } = require('../lib/db.ts')

async function testConnection() {
  try {
    const userCount = await db.user.count()
    console.log('✅ Database connected! User count:', userCount)
    await db.$disconnect()
  } catch (error) {
    console.error('❌ Database connection failed:', error.message)
  }
}

testConnection()
