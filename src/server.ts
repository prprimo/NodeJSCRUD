import {createServer} from 'http';
import {app} from './app';
import {sequelize} from './sequelize';

const port = process.env.PORT || 3000;

(async () => {
  //DROP TABLES AND CREATE
  await sequelize.sync({force: true});
  
  //Check Connection with database
  sequelize
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');

      //Start the Server
      createServer(app)
      .listen(
        port,
        () => console.info(`Server running on port ${port}`)
      );
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
  });

})();
