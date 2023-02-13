'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Categoria, {
        foreignKey: 'categoriaId',
        as: "categoria"
      });
    }
  }
  Produto.init({
    nome: DataTypes.STRING,
    foto: DataTypes.STRING,
    preco: DataTypes.DECIMAL,
    descricao: DataTypes.TEXT,
    categoriaId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Produto',
  });
  return Produto;
};