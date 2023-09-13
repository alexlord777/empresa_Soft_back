const { DataTypes} = require('sequelize');

const Proyecto =(sequelize)=>{ 
    sequelize.define('proyects', {
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
    status:{
        type:DataTypes.BOOLEAN,
        default:false
    },
    repo:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    image:{
      type: DataTypes.STRING,
    },
    creat:{
      type:DataTypes.STRING,
    }
  },{
    timestamps: false, 
  });
}
  module.exports= Proyecto;