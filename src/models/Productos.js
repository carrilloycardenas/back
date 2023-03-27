const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Productos', {
    idProductos: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    Nombre: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    Descripcion: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Stock: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    precioUnitario: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    Color: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Categoria_idCategoria: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'productos_Categoria',
        key: 'idCategoria'
      }
    },
    tipoTela_idTipoTela: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'producto_tipoTela',
        key: 'idTipoTela'
      }
    },
    TipoStock_idTipoStock: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'TipoStock',
        key: 'idTipoStock'
      }
    }
  }, {
    sequelize,
    tableName: 'Productos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idProductos" },
        ]
      },
      {
        name: "idProductos_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idProductos" },
        ]
      },
      {
        name: "fk_Productos_productos_Categoria1_idx",
        using: "BTREE",
        fields: [
          { name: "Categoria_idCategoria" },
        ]
      },
      {
        name: "fk_Productos_producto_tipoTela1_idx",
        using: "BTREE",
        fields: [
          { name: "tipoTela_idTipoTela" },
        ]
      },
      {
        name: "fk_Productos_TipoStock1_idx",
        using: "BTREE",
        fields: [
          { name: "TipoStock_idTipoStock" },
        ]
      },
    ]
  });
};
