
require( 'dotenv' ).config()
const { Pool } = require( 'pg' )

const pool = new Pool( {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASS || 'postgres',
  database: process.env.DB_NAME || 'likeme',
  allowExitOnIdle: true
} )

module.exports = pool


// NOTE: Probar si la conexion a la base de datos funciona:
// const testConnection = async () => {
//   const consulta = "SELECT NOW()"
//   const result = await pool.query( consulta )
//   result
//     ? console.log( 'Conexion exitosa' )
//     : console.log( 'Conexion fallida' )
// }
// testConnection()


// NOTE: Saber a que base de datos esta conectado:
// const testBase = async () => {
//   const consulta = "SELECT current_database()"
//   const result = await pool.query( consulta )
//   console.log( result.rows )
// }
// testBase()
