const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const PUBLIC = path.join(__dirname);

app.use(express.static(PUBLIC, {index:'index.html'}));

app.listen(PORT,()=>console.log(`Bandhan running at http://localhost:${PORT}`));
