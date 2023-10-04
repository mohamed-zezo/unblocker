import express from 'express';
import Unblocker from 'unblocker';

const app = express();
// Create a new instance of unblocker
const unblocker = new Unblocker({});

// Register the unblocker instance as a middleware
app.use(unblocker);

const PORT = process.env.PORT || 5005;
// Start server
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
    // Allow unblocker to proxy websockets
    .on('upgrade', unblocker.onUpgrade);
