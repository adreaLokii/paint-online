const express = require('express')
const app = express()
const WSServer = require('express-ws')

const PORT = process.env.PORT || 5000

app.ws('/', (ws, req) => {
    console.log('ПОДКЛЮЧЕНИЕ УСТАНОВЛЕНО, ЮХУ');
})
app.listen(PORT, () => console.log(`Server started in ${PORT} port :)`))