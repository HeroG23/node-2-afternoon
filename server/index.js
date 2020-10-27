const express = require('express');
const mc = require('./controllers/message_controller.js');
const app = express();

app.use(express.json());
app.use(express.static(__dirname + '/../public/build'))

//can set the /api/messages to a variable, causes app.put(`${variable}/:id`) and app.delete(`${variable}/:id`)
// app.post('/api/messages', mess_con.create);
// app.get('/api/messages', mess_con.read);
// app.put('/api/messages/:id', mess_con.update);
// app.delete('/api/messages/:id', mess_con.delete);

const messagesBaseUrl = "/api/messages";
app.post(messagesBaseUrl, mc.create);
app.get(messagesBaseUrl, mc.read);
app.put(`${messagesBaseUrl}/:id`, mc.update);
app.delete(`${messagesBaseUrl}/:id`, mc.delete);

const port = 3001
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})