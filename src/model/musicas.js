import Sequelize from 'sequelize'
import {connection} from '../database/connection.js'

export const musicas_info = connection.define('musicas_info',{
    id:{
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    nome:{
        type: Sequelize.TEXT,
        allowNull: false,

    },
    banda:{
        type: Sequelize.TEXT,
        allowNull: false,

    },
    ano:{
       type: Sequelize.TEXT,
       
    },
    linky:{
        type: Sequelize.TEXT,
    },
    img:{
        type: Sequelize.TEXT,
    }
      
}, {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
    timestamps: false
})