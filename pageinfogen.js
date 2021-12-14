const arieslines = require("./1")
const tauruslines = require("./2")
const geminilines = require("./3")
const cancerlines = require("./4")
const leolines = require("./5")
const virgolines = require("./6")
const libralines = require("./7")
const scorpiolines = require("./8")
const sagittariuslines = require("./9")
const capricornlines = require("./10")
const aquariuslines = require("./11")
const pisceslines = require("./12")

module.exports = {
    gen: function (signname) {

        let date = new Date
        let day = date.getDate().toString().padStart(2, '0')
        let mon = (date.getMonth() + 1).toString().padStart(2, '0')
        let year = date.getFullYear().toString()

        let datenow = day + "/" + mon + "/" + year

        let pageinfo = {
            "title": "",
            "seed": "",
            "luck": "",
            "horo": ""
        }

        let signseeds = [
            { "name": "aries", "seed": "01", "lines": arieslines.arr },
            { "name": "taurus", "seed": "02", "lines": tauruslines.arr },
            { "name": "gemini", "seed": "03", "lines": geminilines.arr },
            { "name": "cancer", "seed": "04", "lines": cancerlines.arr },
            { "name": "leo", "seed": "05", "lines": leolines.arr },
            { "name": "virgo", "seed": "06", "lines": virgolines.arr },
            { "name": "libra", "seed": "07", "lines": libralines.arr },
            { "name": "scorpio", "seed": "08", "lines": scorpiolines.arr },
            { "name": "sagittarius", "seed": "09", "lines": sagittariuslines.arr },
            { "name": "capricorn", "seed": "10", "lines": capricornlines.arr },
            { "name": "aquarius", "seed": "11", "lines": aquariuslines.arr },
            { "name": "pisces", "seed": "12", "lines": pisceslines.arr }
        ]

        let seed;
        function seededrandom() {
            var x = Math.sin(seed++) * 10000;
            return (x - Math.floor(x));
        }

        signseeds.forEach(element => {
            if (element.name == signname) {
                pageinfo.title = element.name.charAt(0).toUpperCase() + element.name.slice(1);
                pageinfo.seed = element.seed
                pageinfo.seed = year + mon + day + pageinfo.seed + "00"
                seed = pageinfo.seed
                pageinfo.luck = Math.floor((seededrandom() * 70) + 30)
                pageinfo.horo = element.lines[Math.floor((seededrandom() * 342))]
            }
        })

        if (pageinfo.title == "") { throw "Unknown sign: " + signname }

        return pageinfo

        /*
        const data = [
            ['Apples', 10],
            ['Bananas', 2],
            ['Carrots', 5],
            ['Dates', 1],
            ['Eggplant', 3],
            ['Figs', 1],
            ['Gourds', 1],
        ];

        function weigthedrandom(data) {
            let total = 0;
            for (let i = 0; i < data.length; ++i) { total += data[i][1]; }

            const threshold = Math.random() * total;
            total = 0;

            for (let i = 0; i < data.length - 1; ++i) {
                total += data[i][1];
                if (total >= threshold) { return data[i][0]; }
            }
            return data[data.length - 1][0];
        }
*/

    }
}