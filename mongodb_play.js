use zoo;




//find
db.animals.updateOne({_id: ObjectId("62262d49d96ac7ea4b055afe")}, {
    $set: { name: 'Pip'}
});

//delete

db.animals.deleteOne({_id: ObjectId("62262d49d96ac7ea4b055afe")})