const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Registra', {
    Facturas_idFacturas: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'CorteDia',
        key: 'idFacturas'
      }
    },
    Productos_idProductos: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'Productos',
        key: 'idProductos'
      }
    },
    CantidadProducto: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    PrecioProducto: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Registra',
    timestamps: false,
    indexes: [
      {
        name: "fk_Facturas_has_Productos_Productos1_idx",
        using: "BTREE",
        fields: [
          { name: "Productos_idProductos" },
        ]
      },
      {
        name: "fk_Facturas_has_Productos_Facturas1_idx",
        using: "BTREE",
        fields: [
          { name: "Facturas_idFacturas" },
        ]
      },
    ]
  });
};
