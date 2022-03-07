use zoo;
db.dropDatabase();


// insert one
db.animals.insertOne({   
    name: "Jim",
    species: "Aardvark"
})

// insert ,any
db.animals.insertMany([
    {   name: "Janet",
        species: "Polar Bear"
    },
    {
        name: "Norman",
        species: "Penguin",
        age: 5
    }
   
])