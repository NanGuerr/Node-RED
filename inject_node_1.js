[
    {
        "id": "inject_node_1",
        "type": "inject",
        "name": "Inicio",
        "props": [
            {
                "p": "payload"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "x": 140,
        "y": 120,
        "wires": [
            [
                "function_node_1"
            ]
        ]
    },
    {
        "id": "function_node_1",
        "type": "function",
        "name": "Hola Mundo",
        "func": "msg.payload = \"Hola Mundo!\";\nreturn msg;",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 350,
        "y": 120,
        "wires": [
            [
                "debug_node_1"
            ]
        ]
    },
    {
        "id": "debug_node_1",
        "type": "debug",
        "name": "Consola",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 550,
        "y": 120,
        "wires": []
    }
]
