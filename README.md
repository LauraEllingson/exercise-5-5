# Connecting Node to MySQL

(**NOTE:** View a rendered version of this file in VS Code with `ctrl-shift-v` or `cmd-shift-v`)

&nbsp;
## The `mysql2` Package

We can use the [mysql2](https://github.com/sidorares/node-mysql2) package to connect to our MySQL databases from within Node.

Let's examine a typical setup:

```js
const mysql = require('mysql2')

const config = process.env.JAWSDB_URL || {
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  database: "my_db",
}

const db = mysql.createPool(config)

module.exports = db.promise()
```
&nbsp;

We require the `mysql2` package and then pass it configuration to connect to MySQL, much like we would do with an external tool like TablePlus or MySQL workbench. Then we export the configured connection to be used elsewhere in our project. We also call `.promise()` on the connection object to enable the use of promises.

The `process.env.JAWSDB_URL` inclusion allows our module to use an environmental variable to connect to MySQL if present. This will allow us to connect to JAWSDB when deployed to Heroku.

When we import from `db.js`, we can then call `.query()` on the connection to run queries against our database.

**NOTE:** You might remember that it takes a few moments for MySQL to start up, and so if we were to start the MySQL container and the application at the same time, we would likely see the connection fail. However, when working with web servers and Express, we often won't run queries immediately when the application starts because the queries will be run when requests come in. Also, in production, the cloud database we connect to will already be running and ready for requests.