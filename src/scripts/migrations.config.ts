import configService from '../config/database.config';
const fs = require('fs');

fs.writeFileSync(
  'ormconfig.json',
  JSON.stringify(configService.getTypeormConfig(), null, 2),
);
