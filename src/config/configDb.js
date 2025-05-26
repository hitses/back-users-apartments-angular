// Configuración de conexión a la base de datos
const dbConfig = {
  host: 'localhost', // Dirección IP o nombre de host
  port: 3306, // Puerto de conexión
  username: 'root', // Nombre de usuario (CAMBIAR EN CASO DE CAMBIO CUENTA)
  password: '', // Contraseña (CAMBIAR EN CASO DE CAMBIO CUENTA)
  database: 'db_jero', // Nombre de la base de datos (CAMBIAR EN CASO DE QUE NO GUSTE O ESTÉ DUPLICADO, pero si es porque no gusta, mu feo, ¿eh?)
  dialect: 'mysql' // Tipo de base de datos (usado por Sequelize y mejor no tocar si se usa una base de datos MySQL)
}

export default dbConfig
