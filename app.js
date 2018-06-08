const express = require('express');

const app = express();

app.use(express.static('dist'));
app.use(express.json());
app.post('/api/calc', (req, res) => {
    res.json({
        result: eval(req.body.expression || 'null')
    });
});

app.listen(process.env.PORT || 7676, () => {
    console.info('Listening...');
});
