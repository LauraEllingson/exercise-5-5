const db = require('./db')

async function main() {
  const [table] = await db.query(`SELECT * FROM users`)
  console.log(table)
  await db.end()
}

main()
