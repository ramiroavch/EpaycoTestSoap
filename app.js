const express = require('express');
const app = express();
const cors = require('cors');

//--importing routes
const routes = require('./common/routes');

//--settings
app.set('port', process.env.PORT || 3002);
app.use(cors());
require('./common/database-connection');
app.use('/',routes);

app.listen(app.get('port'),()=>{
    console.log('server on port',app.get('port'));
});