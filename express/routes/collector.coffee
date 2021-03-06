models = require '../models/models'

exports.collect = (req, res) ->
    if req.get('content-type').indexOf('application/json') == -1
        throw new Error("Body request is not JSON.")

    jsonData = req.body


    models.DataModel.findOne({name: jsonData.modelName}, (err, model) ->
        console.log('DATA WITH MODEL ' + jsonData.modelName)
        if model
            console.log('model found')
            models.DataUnit.findOne({name: jsonData.unitName, model: model}, (err, unit) ->
                if unit
                    console.log('unit found')
                    models.Hub.findOne({identifier: jsonData.hub_id}, (err, hub) ->
                        if hub
                            console.log('hub found')
                            console.log('looking for sensor with id ' + jsonData.sensor_id)
                            models.Sensor.findOne({identifier: jsonData.sensor_id}, (err, sensor) ->
                                if err
                                    console.log(err)
                                    res.send 500
                                else if sensor
                                    console.log('sensor found')
                                    # Sensor exists
                                else
                                    console.log('creating sensor')
                                    # We need to create it
                                    sensor = new models.Sensor(
                                        identifier: jsonData.sensor_id,
                                        model: model,
                                        hub: hub,
                                        created_on: Date.now()
                                    )
                                    sensor.save()
                                data = new models.Data(
                                    sensor: sensor
                                    value: jsonData.value
                                    model: model
                                    unit: unit
                                    created_on: jsonData.created_on
                                )
                                data.save((err, data) ->
                                    res.send 200
                                )
                            )
                        else
                            console.log('hub not found' + jsonData.hub_id)
                            res.send 500
                    )
                else
                    console.log('unit not found')
                    res.send 400
            )
        else
            console.log('model not found')
            res.send 400
        
    )
