[
    {
        "id": "subflow_timestamp",
        "type": "subflow",
        "name": "Generador Timestamp",
        "info": "Genera un timestamp en formato STRING cada segundo al activarse, hasta recibir msg.reset",
        "category": "",
        "in": [
            {
                "x": 60,
                "y": 80,
                "wires": [
                    {
                        "id": "switch_check_reset"
                    }
                ]
            }
        ],
        "out": [
            {
                "x": 600,
                "y": 80,
                "wires": [
                    {
                        "id": "function_node",
                        "port": 0
                    }
                ]
            }
        ]
    },
    {
        "id": "switch_check_reset",
        "type": "switch",
        "z": "subflow_timestamp",
        "name": "Control Loop",
        "property": "reset",
        "propertyType": "msg",
        "rules": [
            {
                "t": "nnull"
            },
            {
                "t": "else"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 2,
        "x": 200,
        "y": 80,
        "wires": [
            [],
            [
                "function_node"
            ]
        ]
    },
    {
        "id": "function_node",
        "type": "function",
        "z": "subflow_timestamp",
        "name": "Formatear Fecha",
        "func": "let d = new Date();\nlet pad = n => (n < 10 ? '0' + n : n);\nmsg.timestamp = `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 400,
        "y": 80,
        "wires": [
            [
                "delay_loop"
            ]
        ]
    },
    {
        "id": "delay_loop",
        "type": "delay",
        "z": "subflow_timestamp",
        "name": "Esperar 1s",
        "pauseType": "delay",
        "timeout": "1",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "allowrate": false,
        "outputs": 1,
        "x": 410,
        "y": 160,
        "wires": [
            [
                "switch_check_reset"
            ]
        ]
    }
]
