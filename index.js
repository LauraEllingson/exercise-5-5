const db = require('./db')

async function main() {
  const [rows] = await db.query(`SELECT * FROM users;`)
  console.table(rows)
  await db.end()
}

main()
