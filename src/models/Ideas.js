const { DataTypes} = require('sequelize');

const Ideas =(sequelize)=>{ sequelize.define('ideas', {
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
    },
    usada:{
        type:DataTypes.BOOLEAN,
        default:false
    }
   },{
    timestamps: false, 
  });
}
  module.exports= Ideas;