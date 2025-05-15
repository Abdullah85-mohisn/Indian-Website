const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const caseRoutes = require('./routes/caseRoutes');
require('dotenv').config();
const app = express();


// mongoose.connect(process.env.DB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(() => {
//     console.log('✅ Connected to MongoDB');
//     app.listen(5000, '0.0.0.0', () => {
//         console.log('🚀 Server running on http://<your-ip>:5000');
//     });
// })
// .catch((err) => {
//     console.error('❌ MongoDB connection error:', err);
// });

app.use(cors({
    // origin: 'https://slcu-admin.vercel.app',
    methods: ['GET', 'POST'],
    credentials: true
}));
app.use(express.json());
app.use('/api/cases', caseRoutes);
app.use('/', (req,res)=>{
    res.send({"Message":"Backend Working...."})
})

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
