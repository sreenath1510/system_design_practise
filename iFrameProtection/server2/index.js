const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/iframe1', (req, res) => {
    res.sendFile(__dirname + '/public/iframe-website1.html');
})

app.get('/iframe2', (req, res) => {
    res.sendFile(__dirname + '/public/iframe-website2.html');
})
const port = process.env.PORT || 5011;
app.listen(port, () => {
  console.log(`Server1 is running on http://localhost:${port}`);
});