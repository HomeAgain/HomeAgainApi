define({ api: [
  {
    "type": "get",
    "url": "/rooms",
    "title": "Read the list of rooms*",
    "name": "GetRooms",
    "group": "Rooms",
    "description": "This request gives the list of rooms of one user.",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String[]",
            "field": "id",
            "optional": false,
            "description": "List of <code>id</code> of the rooms that belong to one user."
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "NoApikey",
            "optional": false,
            "description": "No apikey was sent with the request."
          },
          {
            "group": "Error 4xx",
            "field": "NoAccessRight",
            "optional": false,
            "description": "Wrong apikey."
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "express/routes/room.js"
  },
  {
    "type": "get",
    "url": "/rooms/:id",
    "title": "Read data of a room*",
    "name": "GetRoomsId",
    "group": "Rooms",
    "description": "This request gives you information about a given room, for the user who is logged in.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<code>id</code> of the room."
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<code>id</code> of the room."
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "room",
            "optional": false,
            "description": "Name of the room"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "field": "sensors",
            "optional": false,
            "description": "List of <code>id</code> of the sensors in the room."
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "IdNotFound",
            "optional": false,
            "description": "The <code>id</code> of the room was not found."
          },
          {
            "group": "Error 4xx",
            "field": "NoApikey",
            "optional": false,
            "description": "No apikey was sent with the request."
          },
          {
            "group": "Error 4xx",
            "field": "NoAccessRight",
            "optional": false,
            "description": "Wrong apikey."
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "express/routes/room.js"
  },
  {
    "type": "get",
    "url": "/sensors",
    "title": "Read the list of sensors*",
    "name": "GetSensors",
    "group": "Sensors",
    "description": "This request gives the list of sensors of one user.",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String[]",
            "field": "id",
            "optional": false,
            "description": "List of <code>id</code> of the sensors that belong to one user."
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "NoApikey",
            "optional": false,
            "description": "No apikey was sent with the request."
          },
          {
            "group": "Error 4xx",
            "field": "NoAccessRight",
            "optional": false,
            "description": "Wrong apikey."
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "express/routes/sensor.coffee"
  },
  {
    "type": "get",
    "url": "/sensors/:id",
    "title": "Read data of a sensor*",
    "name": "GetSensorsId",
    "group": "Sensors",
    "description": "This request gives you information about a given sensor, for the user who is logged in.",
    "examples": [
      {
        "title": "Example usage:",
        "content": "   curl -i http://homeagain.io/sensors/23?api_key=8264823&datastart=1391631304&datastop=1391631800\n"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<code>id</code> of the sensor."
          },
          {
            "group": "Parameter",
            "type": "Date",
            "field": "datastart",
            "optional": true,
            "description": "Beginning of the period you want to get data from."
          },
          {
            "group": "Parameter",
            "type": "Date",
            "field": "dataend",
            "optional": true,
            "description": "End of the period you want to get data from."
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<code>id</code> of the sensor."
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "sensor",
            "optional": false,
            "description": "Name of the sensor."
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "room_id",
            "optional": false,
            "description": "Id of the room where the sensor is."
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "unit",
            "optional": false,
            "description": "Unit of the data given by the sensor."
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "data",
            "optional": false,
            "description": "By default, value and timestamp of the last data taken from the sensor. If a period is specified, list of all timestamp and data in this period."
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"id\": \"23\",\n     \"sensor\": \"Kitchen's temperature\"\n     \"room_id\": \"45\"\n     \"unit\": \"Temperature.Celsius\"\n     \"data\": [{\n         \"value\": \"23\"\n         \"timestamp\": \"1391631784\"\n         }, ...\n         ]\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "IdNotFound",
            "optional": false,
            "description": "The <code>id</code> of the sensor was not found."
          },
          {
            "group": "Error 4xx",
            "field": "NoApikey",
            "optional": false,
            "description": "No apikey was sent with the request."
          },
          {
            "group": "Error 4xx",
            "field": "NoAccessRight",
            "optional": false,
            "description": "Wrong apikey."
          },
          {
            "group": "Error 4xx",
            "field": "WrongDatastart",
            "optional": false,
            "description": "datastart is at wrong format - should be a timestamp"
          },
          {
            "group": "Error 4xx",
            "field": "WrongDatastop",
            "optional": false,
            "description": "datastop is at wrong format - should be a timestamp"
          },
          {
            "group": "Error 4xx",
            "field": "NoDatastart",
            "optional": false,
            "description": "datastop was given with no datastart"
          },
          {
            "group": "Error 4xx",
            "field": "NoDatastop",
            "optional": false,
            "description": "datastart was given with no datastop"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "express/routes/sensor.coffee"
  },
  {
    "type": "get",
    "url": "/user/:id",
    "title": "Read data of a user*",
    "name": "GetUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<code>id</code> of the User."
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "firstname",
            "optional": false,
            "description": "First Name of the User."
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "lastname",
            "optional": false,
            "description": "Last Name of the User."
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<code>id</code> of the User."
          }
        ]
      }
    },
    "error": {
      "fields": {
        "401 Unauthorized": [
          {
            "group": "401",
            "field": "NoApikey",
            "optional": false,
            "description": "No apikey was sent with the request."
          },
          {
            "group": "401",
            "field": "NoAccessRight",
            "optional": false,
            "description": "Wrong apikey."
          }
        ],
        "404 Not Found": [
          {
            "group": "404",
            "field": "IdNotFound",
            "optional": false,
            "description": "The <code>id</code> of the User was not found."
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "express/routes/login.coffee"
  },
  {
    "type": "post",
    "url": "/user/login",
    "title": "Login to HomeAgain",
    "name": "PostUser",
    "group": "User",
    "examples": [
      {
        "title": "Example usage:",
        "content": " curl -i \\\n     -H \"Content-Type: application/json\" \\\n     -d '{\"username\":\"user\", \"password\":\"password\"}' \\\n     \"http://homeagain.io/login\"\n"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<code>id</code> of the User."
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "password",
            "optional": false,
            "description": "Password of the User."
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "firstname",
            "optional": false,
            "description": "First Name of the User."
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "lastname",
            "optional": false,
            "description": "Last Name of the User."
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "<code>id</code> of the User."
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "api_key",
            "optional": false,
            "description": "APIkey that needs to be sent with each request with a star."
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"firstname\": \"Matthieu\",\n     \"lastname\": \"Dupont\"\n     \"id\": \"23\"\n     \"api_key\": \"785876\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "IdNotFound",
            "optional": false,
            "description": "The <code>id</code> of the User was not found."
          },
          {
            "group": "Error 4xx",
            "field": "WrongPassword",
            "optional": false,
            "description": "The password is wrong."
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "express/routes/login.coffee"
  }
] });