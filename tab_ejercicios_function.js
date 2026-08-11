[
    {
        "id": "tab_ejercicios_function",
        "type": "tab",
        "label": "Ejercicios Nodo Function",
        "disabled": false,
        "info": "Flows para resolver los ejercicios a, b y c utilizando el nodo Function."
    },
    {
        "id": "inject_a",
        "type": "inject",
        "z": "tab_ejercicios_function",
        "name": "Inyectar Números (20 y 15)",
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
        "payload": "{\"num1\":20,\"num2\":15}",
        "payloadType": "json",
        "x": 180,
        "y": 100,
        "wires": [
            [
                "func_a"
            ]
        ]
    },
    {
        "id": "func_a",
        "type": "function",
        "z": "tab_ejercicios_function",
        "name": "Suma Simple",
        "func": "msg.payload = msg.payload.num1 + msg.payload.num2;\nreturn msg;",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 410,
        "y": 100,
        "wires": [
            [
                "debug_a"
            ]
        ]
    },
    {
        "id": "debug_a",
        "type": "debug",
        "z": "tab_ejercicios_function",
        "name": "Resultado Suma A",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 630,
        "y": 100,
        "wires": []
    },
    {
        "id": "inject_b_true",
        "type": "inject",
        "z": "tab_ejercicios_function",
        "name": "Suma > 50 (40 y 25)",
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
        "payload": "{\"num1\":40,\"num2\":25}",
        "payloadType": "json",
        "x": 170,
        "y": 200,
        "wires": [
            [
                "func_b"
            ]
        ]
    },
    {
        "id": "inject_b_false",
        "type": "inject",
        "z": "tab_ejercicios_function",
        "name": "Suma <= 50 (10 y 15)",
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
        "payload": "{\"num1\":10,\"num2\":15}",
        "payloadType": "json",
        "x": 170,
        "y": 240,
        "wires": [
            [
                "func_b"
            ]
        ]
    },
    {
        "id": "func_b",
        "type": "function",
        "z": "tab_ejercicios_function",
        "name": "Filtrar > 50",
        "func": "var sum = msg.payload.num1 + msg.payload.num2;\nif (sum > 50) {\n    msg.payload = \"Resultado mayor a 50: \" + sum;\n    return msg;\n} else {\n    return null; // No retorna nada si es menor o igual a 50\n}",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 410,
        "y": 220,
        "wires": [
            [
                "debug_b"
            ]
        ]
    },
    {
        "id": "debug_b",
        "type": "debug",
        "z": "tab_ejercicios_function",
        "name": "Resultado B (>50)",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 630,
        "y": 220,
        "wires": []
    },
    {
        "id": "inject_c",
        "type": "inject",
        "z": "tab_ejercicios_function",
        "name": "Inyectar Datos (Prueba ambas)",
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
        "payload": "{\"num1\":30,\"num2\":30}",
        "payloadType": "json",
        "x": 170,
        "y": 360,
        "wires": [
            [
                "func_c"
            ]
        ]
    },
    {
        "id": "func_c",
        "type": "function",
        "z": "tab_ejercicios_function",
        "name": "Dos Salidas (Condicional)",
        "func": "var sum = msg.payload.num1 + msg.payload.num2;\nmsg.payload = {\n    resultado: sum,\n    detalle: \"Cálculo de dos salidas\"\n};\n\nif (sum > 50) {\n    return [msg, null]; // Envía a la primera salida\n} else {\n    return [null, msg]; // Envía a la segunda salida\n}",
        "outputs": 2,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 430,
        "y": 360,
        "wires": [
            [
                "debug_c_alta"
            ],
            [
                "debug_c_baja"
            ]
        ]
    },
    {
        "id": "debug_c_alta",
        "type": "debug",
        "z": "tab_ejercicios_function",
        "name": "Salida 1: Mayor a 50",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 660,
        "y": 340,
        "wires": []
    },
    {
        "id": "debug_c_baja",
        "type": "debug",
        "z": "tab_ejercicios_function",
        "name": "Salida 2: Menor o igual a 50",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 680,
        "y": 380,
        "wires": []
    }
]
