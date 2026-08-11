[
    {
        "id": "subflow_modbus_reader",
        "type": "subflow",
        "name": "Lector Modbus Dinámico",
        "info": "Subflow para leer coils con Address y Quantity configurables mediante Modbus Flex Getter.",
        "category": "",
        "in": [
            {
                "x": 60,
                "y": 80,
                "wires": [
                    {
                        "id": "config_flex_getter"
                    }
                ]
            }
        ],
        "out": [
            {
                "x": 580,
                "y": 80,
                "wires": [
                    {
                        "id": "modbus_flex_getter_node",
                        "port": 0
                    }
                ]
            }
        ],
        "env": [
            {
                "name": "address",
                "type": "num",
                "value": "0"
            },
            {
                "name": "quantity",
                "type": "num",
                "value": "4"
            }
        ]
    },
    {
        "id": "config_flex_getter",
        "type": "function",
        "z": "subflow_modbus_reader",
        "name": "Configurar Payload",
        "func": "msg.payload = {\n 'fc': 1, // Function Code 1: Leer Coils\n 'unitid': 1,\n 'address': Number(env.get(\"address\") || 0), \n 'quantity': Number(env.get(\"quantity\") || 1)\n};\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 210,
        "y": 80,
        "wires": [
            [
                "modbus_flex_getter_node"
            ]
        ]
    },
    {
        "id": "modbus_flex_getter_node",
        "type": "modbus-flex-getter",
        "z": "subflow_modbus_reader",
        "name": "Leer Coils Dinámico",
        "showStatusActivities": false,
        "showErrors": false,
        "showWarnings": true,
        "logIOActivities": false,
        "server": "",
        "useIOFile": false,
        "ioFile": "",
        "useIOForPayload": false,
        "emptyMsgOnFail": false,
        "keepMsgProperties": false,
        "delayOnStart": false,
        "startDelayTime": "",
        "x": 420,
        "y": 80,
        "wires": [
            [],
            []
        ]
    }
]
