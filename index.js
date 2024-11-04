const express = require('express');
const bodyParser = require('body-parser');
const walletRoutes = require('./routes/walletRoutes');
const errorHandler = require('./middleware/errorHandler');
const app = express();

app.use(bodyParser.json());
app.use('/api/wallet', walletRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
