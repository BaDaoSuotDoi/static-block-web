const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    let {link} = req.query
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            * {margin:0; padding:0;}
            html, body {
                height: 100%;
                margin: 0;
            }
        </style>
        <title>Static Site</title>
        </head>
        <body>
            <div style="width:100%;height:100%;background-color:red;display: flex;justify-content: center;align-items: center; background:url('block.png');background-size: cover;background-repeat: no-repeat;background-position: center;color:black;">
                <div style="display: flex;justify-content: center;align-items: center;flex-direction: column;">
                     <div style="">
                        <img src="block.svg"/>
                    </div>
                    <div style="font-size: 30px;margin-top:20px;"><b>Chặn truy cập</b></div>
                    <div style="margin-top:30px;">Bạn đã truy cập <b>${link}</b> bị chặn </div>
                </div>
            </div>
        </form>
        </body>
        </html>
        `);
});


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
