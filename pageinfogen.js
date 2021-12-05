const seedrandom = require("seedrandom");

module.exports = {
    gen: function (signname) {

        let pageinfo = [
            { "title": "" },
            { "seed": "" },
            { "data": "" },
            { "data2": "" }
        ]

        switch (signname) {
            case "aries":
                pageinfo.title = "Aries"
                pageinfo.seed = "01"
                break
            case "taurus":
                pageinfo.title = "Taurus"
                pageinfo.seed = "02"
                break
            case "gemini":
                pageinfo.title = "Gemini"
                pageinfo.seed = "03"
                break
            case "cancer":
                pageinfo.title = "Cancer"
                pageinfo.seed = "04"
                break
            case "leo":
                pageinfo.title = "Leo"
                pageinfo.seed = "05"
                break
            case "virgo":
                pageinfo.title = "Virgo"
                pageinfo.seed = "06"
                break
            case "libra":
                pageinfo.title = "Libra"
                pageinfo.seed = "07"
                break
            case "scorpio":
                pageinfo.title = "Scorpio"
                pageinfo.seed = "08"
                break
            case "sagittarius":
                pageinfo.title = "Sagittarius"
                pageinfo.seed = "09"
                break
            case "capricorn":
                pageinfo.title = "Capricorn"
                pageinfo.seed = "10"
                break
            case "aquarius":
                pageinfo.title = "Aquarius"
                pageinfo.seed = "11"
                break
            case "pisces":
                pageinfo.title = "Pisces"
                pageinfo.seed = "12"
                break
            default:
                throw "Unknown sign: " + signname
        }

        //seed
        let date = new Date
        let day = date.getDate().toString().padStart(2, '0')
        let mon = (date.getMonth() + 1).toString().padStart(2, '0')
        let year = date.getFullYear()
        pageinfo.seed = year + mon + day + pageinfo.seed
        var rng = seedrandom(pageinfo.seed);
        pageinfo.data = rng.int32() % 5
        pageinfo.data < 0 ? pageinfo.data *= -1 : pageinfo.data
        pageinfo.data2 = rng.int32() % 5
        pageinfo.data2 < 0 ? pageinfo.data2 *= -1 : pageinfo.data2

        return pageinfo
    }
}