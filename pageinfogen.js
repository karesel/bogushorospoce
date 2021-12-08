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
        let year = date.getFullYear().toString()
        pageinfo.seed = year + mon + day + pageinfo.seed + "00"

        let seed = pageinfo.seed;
        function seededrandom() {
            var x = Math.sin(seed++) * 10000;
            return (x - Math.floor(x));
        }

        pageinfo.data = Math.floor((seededrandom() * 70) + 31)
        pageinfo.data2 = Math.floor((seededrandom() * 70) + 31)


        return pageinfo

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


    }
}