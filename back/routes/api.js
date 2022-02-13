var express = require('express');
var router = express.Router();

const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
  'test_cnab',
  'root',
  'root',
  {
    dialect: 'mysql'
  },
);

class Operation extends Model {}

Operation.init({
  type: DataTypes.INTEGER,
  ownerName: DataTypes.STRING,
  storeName: DataTypes.STRING,
  cpf: DataTypes.STRING,
  card: DataTypes.STRING,
  date: DataTypes.DATE,
  value: DataTypes.DOUBLE
}, { sequelize, modelName: 'operation' });

/* POST UPLOAD FILE */
router.post('/upload', async function(req, res, next) {
  if (!req.files) {
    return res.status(400).send("No files were uploaded.");
  }

  await Operation.destroy({ truncate: true });

  const str = Buffer.from(req.files.file.data).toString();
  const lines = str.split('\r\n');

  for (const line of lines) {
    const row = {
      type: Number(line.substring(0, 1)),
      date: line.substring(1, 9),
      value: Number(line.substring(9, 19)),
      cpf: line.substring(19, 30),
      card: line.substring(30, 42),
      time: line.substring(42, 48),
      ownerName: line.substring(48, 62).trim(),
      storeName: line.substring(62, 81).trim(),
    };

    const date = `${row.date.substring(0, 4)}-${row.date.substring(4, 6)}-${row.date.substring(6, 8)}`;
    const time = `${row.time.substring(0, 2)}:${row.time.substring(2, 4)}:${row.time.substring(4, 6)}`;

    row.date = date + ' ' + time;
    delete row.time;

    await Operation.create(row);
  }

  res.send();
});

/* GET OPERATIONS */
router.get('/operations', async function(req, res, next) {
  
  res.send(await Operation.findAll());
});

module.exports = router;