let messages =[];
let id = 0;

module.exports ={
    create: (res, req) => {
        const {text, time} = req.body;
        messages.push({id, text, time});
        id++
        res.status(200).send(messages);
    },
    read: (res, req) => {
        res.status(200).send(messages);
    },
    update: (res, req) => {
        const {text} = req.body;
        const messageIndex = messages.findIndex(message => message.id === +req.params.id);
        const message = messages[messageIndex];

        messages[messageIndex] ={
            id: message.id,
            text: text || message.text,
            time: message.time
        };
        res.status(200).send(messages);
    },
    delete: (res, req) =>{
        const messageIndex = messages.findIndex(message => message.id === +req.params.id);
        messages.splice(messageIndex, 1);
        res.status(200).send(messages);
    }
}