const ejs = require("ejs")
module.exports = (req, res, code, error) => {
    ejs.renderFile(__dirname + "/../pages/layouts.ejs", {
        content: __dirname + "/../pages/error.ejs",
        code,
        error
    }, (err, string) => {
        if (err) {
            console.error(err)
            return res.sendStatus(500)
        }
        res.send(string)
    })

}