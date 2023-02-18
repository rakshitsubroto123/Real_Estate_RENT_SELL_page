// Dummy data for the card creation
const dummyData = [
    {
        imgUrl: "https://cdn.apartmenttherapy.info/image/upload/v1561046398/at/archive/cfeb5df011c4581264114c16d80cc9b0a4e68353.jpg",
        popular: true,
        price: 500,
        name: "Palm Harbor",
        location: "New York, USA",
        noOfBeds: 3,
        noOfBathroom: 2,
        area: {
            length: 5,
            breadth: 7
        },
        propertyType: "Flats"
    },
    {
        imgUrl: "https://i.pinimg.com/originals/7a/ab/80/7aab806c73668fbee1e5ecb846640603.jpg",
        popular: true,
        price: 1570,
        name: "Beverly Springfield",
        location: "Los Angeles, USA",
        noOfBeds: 4,
        noOfBathroom: 2,
        area: {
            length: 10,
            breadth: 10
        },
        propertyType: "Houses"
    },
    {
        imgUrl: "https://images.ctfassets.net/3s5io6mnxfqz/ieW1cJQYzFKzdAAAz0BN2/31c92cbc7901d1462cd7e610a7efe708/AdobeStock_361162520.jpeg",
        popular: true,
        price: 1000,
        name: "Faulkner Ave",
        location: "San Jose",
        noOfBeds: 2,
        noOfBathroom: 1,
        area: {
            length: 8,
            breadth: 8
        },
        propertyType: "Banglows"
    },
    {
        imgUrl: "https://www.homelane.com/blog/wp-content/uploads/2022/11/bungalow-interiors.jpg",
        popular: false,
        price: 1500,
        name: "Glora Heights",
        location: "Delhi, India",
        noOfBeds: 3,
        noOfBathroom: 2,
        area: {
            length: 12,
            breadth: 8
        },
        propertyType: "Banglows"
    },
    {
        imgUrl: "https://www.bankrate.com/2019/10/25100200/bungalow-484149133.jpg",
        popular: true,
        price: 2200,
        name: "Flora Dreams",
        location: "San Francisco",
        noOfBeds: 2,
        noOfBathroom: 1,
        area: {
            length: 10,
            breadth: 8
        },
        propertyType: "Flats"
    },
    {
        imgUrl: "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2016/8/12/1/IS-Architecture_Ocean-Beach-Bungalow_12.jpg.rend.hgtvcom.1280.853.suffix/1471010266807.jpeg",
        popular: false,
        price: 2500,
        name: "Cosmos Housing",
        location: "Manali, India",
        noOfBeds: 6,
        noOfBathroom: 3,
        area: {
            length: 12,
            breadth: 6
        },
        propertyType: "Huts"
    },
    {
        imgUrl: "https://www.thespruce.com/thmb/zFg7mPetp_7ZVqcScgJHbc7PSTg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-523075374-8d27b929fdfc4702aab5c73f821a65de.jpg",
        popular: false,
        price: 2250,
        name: "Oregano Height",
        location: "Toronto, Canada",
        noOfBeds: 3,
        noOfBathroom: 2,
        area: {
            length: 12,
            breadth: 8
        },
        propertyType: "Banglows"
    },
    {
        imgUrl: "https://www.checkatrade.com/blog/wp-content/uploads/2021/01/cost-to-build-a-bungalow-UK.jpg",
        popular: false,
        price: 3500,
        name: "Sparten Land",
        location: "Ottawa, Canada",
        noOfBeds: 8,
        noOfBathroom: 3,
        area: {
            length: 20,
            breadth: 12
        },
        propertyType: "Banglows"
    },
    {
        imgUrl: "https://ashwinarchitects.com/3/wp-content/uploads/2018/03/latest-bungalow-design-architects-coimbatore-india.jpg",
        popular: false,
        price: 3000,
        name: "Escoraa Avenue",
        location: "Winnipwg, Canada",
        noOfBeds: 7,
        noOfBathroom: 2,
        area: {
            length: 12,
            breadth: 5
        },
        propertyType: "Flats"
    },
    {
        imgUrl: "https://assets.architecturaldigest.in/photos/626f8189a3ac7818a7dd5fee/master/pass/Explore%20a%20spacious%20bungalow%20in%20Gujarat%20that's%20built%20around%20a%20mango%20orchard.jpg",
        popular: true,
        price: 1880,
        name: "Grey Stone",
        location: "Delhi, India",
        noOfBeds: 5,
        noOfBathroom: 2,
        area: {
            length: 15,
            breadth: 8
        },
        propertyType: "Banglows"
    },
    {
        imgUrl: "https://hips.hearstapps.com/hmg-prod/images/bungalow-house-examples-hbx080116blakeney01-1667335322.jpg?resize=1200:*",
        popular: true,
        price: 1800,
        name: "Skyline Construction",
        location: "Toronto, Canada",
        noOfBeds: 5,
        noOfBathroom: 5,
        area: {
            length: 8,
            breadth: 12
        },
        propertyType: "Flats"
    },
    {
        imgUrl: "https://content.jdmagicbox.com/comp/lonavala/x9/9999p2114.2114.180529193537.t3x9/catalogue/khan-bungalow-lonavala-qlhpg.jpg",
        popular: false,
        price: 1200,
        name: "Fredom Fly",
        location: "London, UK",
        noOfBeds: 3,
        noOfBathroom: 2,
        area: {
            length: 7,
            breadth: 8
        },
        propertyType: "Banglows"
    },
    {
        imgUrl: "https://www.bankrate.com/2019/10/25100200/bungalow-484149133.jpg",
        popular: true,
        price: 1260,
        name: "Build Dream",
        location: "Mumbai",
        noOfBeds: 2,
        noOfBathroom: 3,
        area: {
            length: 10,
            breadth: 10
        },
        propertyType: "Banglows"
    },
    {
        imgUrl: "https://housing.com/news/wp-content/uploads/2022/12/bungalow-house-design-compressed.jpg",
        popular: false,
        price: 1300,
        name: "Greentree Construction",
        location: "Manchester, UK",
        noOfBeds: 3,
        noOfBathroom: 2,
        area: {
            length: 12,
            breadth: 8
        },
        propertyType: "Flats"
    },
    {
        imgUrl: "https://thehousedesignhub.com/wp-content/uploads/2021/12/74aE-1024x789.jpg",
        popular: false,
        price: 1500,
        name: "Granite Glora",
        location: "Kelowna, Canada",
        noOfBeds: 3,
        noOfBathroom: 2,
        area: {
            length: 10,
            breadth: 8
        },
        propertyType: "Banglows"
    },
    {
        imgUrl: "https://assets.architecturaldigest.in/photos/6008380ce6e1f64740188ef1/16:9/w_2560%2Cc_limit/new-delhi-house-of-greens-featured-image-1366x768.jpg",
        popular: false,
        price: 790,
        name: "Supernova",
        location: "North Bay, Canada",
        noOfBeds: 3,
        noOfBathroom: 1,
        area: {
            length: 7,
            breadth: 8
        },
        propertyType: "Flats"
    },
    {
        imgUrl: "https://housing.com/news/wp-content/uploads/2022/12/bungalow-house-design-compressed.jpg",
        popular: false,
        price: 1200,
        name: "Special",
        location: "Toronto, Canada",
        noOfBeds: 3,
        noOfBathroom: 2,
        area: {
            length: 10,
            breadth: 8
        },
        propertyType: "Huts"
    },
    {
        imgUrl: "https://www.99homeplans.com/wp-content/uploads/2017/12/bungalow-style-homes-with-double-story-arabian-model-house-elevations.jpg",
        popular: false,
        price: 1550,
        name: "Nova View",
        location: "Mumbai, India",
        noOfBeds: 3,
        noOfBathroom: 2,
        area: {
            length: 12,
            breadth: 8
        },
        propertyType: "Huts"
    },
    {
        imgUrl: "https://www.shutterstock.com/image-illustration/3d-rendering-modern-bungalow-260nw-1473521555.jpg",
        popular: true,
        price: 1210,
        name: "Triangle Heights",
        location: "Londan, UK",
        noOfBeds: 5,
        noOfBathroom: 2,
        area: {
            length: 10,
            breadth: 8
        },
        propertyType: "Huts"
    },
    {
        imgUrl: "https://i.ytimg.com/vi/-Pf2A9ZPTn0/maxresdefault.jpg",
        popular: true,
        price: 4200,
        name: "New View",
        location: "Ottawa, Canada",
        noOfBeds: 9,
        noOfBathroom: 4,
        area: {
            length: 25,
            breadth: 10
        },
        propertyType: "Banglows"
    }
]

export default dummyData;