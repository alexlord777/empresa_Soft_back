const { DataTypes} = require('sequelize');

const Tasks =(sequelize)=>{ 
    sequelize.define('tasks', {
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
      allowNull: false,
    },
    status:{
        type: DataTypes.STRING,
        allowNull: true,
    }
   },{
    timestamps: false, 
  });
}
  module.exports= Tasks;