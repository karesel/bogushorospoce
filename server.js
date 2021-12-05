const express = require("express")
const pageinfogen = require("./pageinfogen")

const app = express()
app.set("view engine", "ejs")


app.get("/", (req, res) => { res.render("index") })

app.get('/favicon.ico', (req, res) => res.status(204));

app.get("/:signname", (req, res) => {

    try {
        var pageinfo = pageinfogen.gen(req.params.signname.toLowerCase())
    } catch (error) {
        console.log(error)
        res.redirect("/")
        return
    }
    res.redirect(signname.toLowerCase())
    res.render("signview", { info: pageinfo })
})

app.get("/*", (req, res) => { res.redirect("/") })

app.listen(process.env.PORT || 5000)
console.log("Up at ", process.env.PORT || 5000)