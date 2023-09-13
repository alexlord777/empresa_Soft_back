const { DataTypes} = require('sequelize');

const Usuario =(sequelize)=>{ sequelize.define('users', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    activo:{
      type:DataTypes.BOOLEAN,
      default:false
    }
  },{
    timestamps: false, 
  });
}
  module.exports= Usuario;