const seedrandom = require("seedrandom");

module.exports = {
    gen: function (signname) {

        let pageinfo = [
            { "title": "" },
            { "seed": "" },
            { "data": "" },
            { "data2": "" }
        ]

        let singseeds = [
            { "name": "aries", "seed": "01" },
            { "name": "taurus", "seed": "02" },
            { "name": "gemini", "seed": "03" },
            { "name": "cancer", "seed": "04" },
            { "name": "leo", "seed": "05" },
            { "name": "virgo", "seed": "06" },
            { "name": "libra", "seed": "07" },
            { "name": "scorpio", "seed": "08" },
            { "name": "sagittarius", "seed": "09" },
            { "name": "capricorn", "seed": "10" },
            { "name": "aquarius", "seed": "11" },
            { "name": "pisces", "seed": "12" }
        ]

        singseeds.forEach(element => {
            if (element.name == signname) {
                pageinfo.title = element.name.charAt(0).toUpperCase() + element.name.slice(1);
                pageinfo.seed = element.seed
            }
        })

        if (pageinfo.title == "" || pageinfo.seed == "") { throw "Unknown sign: " + signname }

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