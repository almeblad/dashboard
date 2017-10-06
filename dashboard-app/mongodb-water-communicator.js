var host = "localhost"
var port = "27017"
var db = "water_meter"
var collections = "usages"

module.exports = {
    geWaterConsumtionDataForLastHour: function (){
        var MongoClient = require('mongodb').MongoClient

        MongoClient.connect('mongodb://'+host+':'+port+'/'+db, function (err, db) {
          if (err) throw err

          db.collection(collections).find().toArray(function (err, result) {
            if (err) throw err

            console.log(result)
          })
        })
    }
}
