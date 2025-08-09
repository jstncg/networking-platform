const { db } = require('../lib/db.ts')

async function addTestUser() {
  try {
    const newUser = await db.user.create({
      data: {
        email: 'test@example.com',
        name: 'Test User',
        password: 'temporary123'
      }
    })
    
    console.log('✅ User created:', newUser)
    await db.$disconnect()
  } catch (error) {
    console.error('❌ Failed to create user:', error.message)
  }
}

addTestUser()
