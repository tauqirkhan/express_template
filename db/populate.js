const { Client } = require("pg");
require("dotenv").config();

const SQL = "your_SQL_query_here";

async function main() {
  console.log("seeding");
  const client = new Client({
    connectionString: `postgresql://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:${process.env.PGPORT}/${process.env.PGDATABASE}`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
}

main();
