const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const db = require('./models/index.js');

dotenv.config();

const app = express();

app.use(express.json()); 
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Database connection
db.sequelize.sync().then(() => {
    console.log('Database synced successfully');
  }).catch((err) => {
    console.error('Error syncing database:', err);
  });

// Define routes
app.use('/applicants',require('./routes/ApplicantsRoutes.js'))
app.use('/impex', require('./routes/impexRoutes'));

app.get('/test', (req, res) => {
  res.status(200).send('<h1>Node.js MySQL</h1>');
});

const PORT = process.env.PORT || 3009;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});









// app.use('/familyparticulars',require('./routes/FamilyParticularsRoutes.js'))
// app.use('/educationbackground',require('./routes/EducationBackgroundRoutes.js'))
// app.use('/experience',require('./routes/ExperienceRoutes.js'))
// app.use('/general',require('./routes/GeneralRoutes.js'))
// app.use('/certificate',require('./routes/CertificateRoutes.js'))
// app.use('/identitydocuments',require('./routes/IdentityDocumentsRoutes.js'))
// app.use('/medical',require('./routes/MedicalRoutes.js'))