const express = require('express');
const app = express();
const mess_con = require('./controllers/message_controller.js')

app.use(express.json());
app.use(express.static(__dirname + '/../public/build'))

//can set the /api/messages to a variable, causes app.put(`${variable}/:id`) and app.delete(`${variable}/:id`)
app.post('/api/messages', mess_con.create);
app.get('/api/messages', mess_con.read);
app.put('/api/messages/:id', mess_con.update);
app.delete('/api/messages/:id', mess_con.delete);

const port = 3001
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})