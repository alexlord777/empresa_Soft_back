const { DataTypes} = require('sequelize');

const Contenido =(sequelize)=>{ 
    sequelize.define('contenido', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description:{
        type: DataTypes.STRING,
        allowNull: true,
    }
   },{
    timestamps: false, 
  });
}
  module.exports= Contenido;