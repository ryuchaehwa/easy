module.exports = (app) => {
    app.post('/register', (req, res) => {
        res.send({
            // message: "Your user was registered! Have fun!"
            message: `Hello ${req.body.email}! Your user was registered! Have fun!`
        })
    })
}
