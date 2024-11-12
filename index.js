const express = require('express');
const app = express();
const mainRoutes = require('./routes');

app.use('/', mainRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});