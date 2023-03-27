var DataTypes = require("sequelize").DataTypes;
var _CorteDia = require("./CorteDia");
var _Productos = require("./Productos");
var _Registra = require("./Registra");
var _TipoStock = require("./TipoStock");
var _producto_tipoTela = require("./producto_tipoTela");
var _productos_Categoria = require("./productos_Categoria");

function initModels(sequelize) {
  var CorteDia = _CorteDia(sequelize, DataTypes);
  var Productos = _Productos(sequelize, DataTypes);
  var Registra = _Registra(sequelize, DataTypes);
  var TipoStock = _TipoStock(sequelize, DataTypes);
  var producto_tipoTela = _producto_tipoTela(sequelize, DataTypes);
  var productos_Categoria = _productos_Categoria(sequelize, DataTypes);

  Registra.belongsTo(CorteDia, { as: "Facturas_idFacturas_CorteDium", foreignKey: "Facturas_idFacturas"});
  CorteDia.hasMany(Registra, { as: "Registras", foreignKey: "Facturas_idFacturas"});
  Registra.belongsTo(Productos, { as: "Productos_idProductos_Producto", foreignKey: "Productos_idProductos"});
  Productos.hasMany(Registra, { as: "Registras", foreignKey: "Productos_idProductos"});
  Productos.belongsTo(TipoStock, { as: "TipoStock_idTipoStock_TipoStock", foreignKey: "TipoStock_idTipoStock"});
  TipoStock.hasMany(Productos, { as: "Productos", foreignKey: "TipoStock_idTipoStock"});
  Productos.belongsTo(producto_tipoTela, { as: "tipoTela_idTipoTela_producto_tipoTela", foreignKey: "tipoTela_idTipoTela"});
  producto_tipoTela.hasMany(Productos, { as: "Productos", foreignKey: "tipoTela_idTipoTela"});
  Productos.belongsTo(productos_Categoria, { as: "Categoria_idCategoria_productos_Categorium", foreignKey: "Categoria_idCategoria"});
  productos_Categoria.hasMany(Productos, { as: "Productos", foreignKey: "Categoria_idCategoria"});

  return {
    CorteDia,
    Productos,
    Registra,
    TipoStock,
    producto_tipoTela,
    productos_Categoria,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
