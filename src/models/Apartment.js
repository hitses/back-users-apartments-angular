import { DataTypes } from 'sequelize'
import sequelize from '../config/db.js'

const Apartment = sequelize.define(
  'Apartment',
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    rooms: { type: DataTypes.INTEGER, allowNull: false },
    bathrooms: { type: DataTypes.INTEGER, allowNull: false },
    area: { type: DataTypes.INTEGER, allowNull: false },
    floor: { type: DataTypes.INTEGER, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
    // Se han añadido las propiedades createdAt y updatedAt para llevar un control de las fechas de creación y actualización del modelo y por costumbre, aunque no se usen en el proyecto
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
  },
  {
    tableName: 'apartments',
    timestamps: true
  }
)

export default Apartment
