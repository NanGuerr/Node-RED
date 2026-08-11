[
    {
        "id": "tab_motor",
        "type": "ui_tab",
        "name": "Control de Planta",
        "icon": "dashboard",
        "disabled": false,
        "hidden": false
    },
    {
        "id": "group_motor",
        "type": "ui_group",
        "name": "Panel de Motor Principal",
        "tab": "tab_motor",
        "order": 1,
        "disp": true,
        "width": "6",
        "collapse": false
    },
    {
        "id": "btn_start",
        "type": "ui_button",
        "z": "flow_hmi_motor",
        "name": "INICIAR",
        "group": "group_motor",
        "order": 2,
        "width": 3,
        "height": 1,
        "passthru": false,
        "label": "INICIAR",
        "tooltip": "",
        "color": "white",
        "bgcolor": "#28a745",
        "className": "",
        "icon": "",
        "payload": "true",
        "payloadType": "bool",
        "topic": "motor/estado",
        "topicType": "str",
        "x": 240,
        "y": 180,
        "wires": [
            [
                "tpl_led"
            ]
        ]
    },
    {
        "id": "btn_stop",
        "type": "ui_button",
        "z": "flow_hmi_motor",
        "name": "DETENER",
        "group": "group_motor",
        "order": 3,
        "width": 3,
        "height": 1,
        "passthru": false,
        "label": "DETENER",
        "tooltip": "",
        "color": "white",
        "bgcolor": "#dc3545",
        "className": "",
        "icon": "",
        "payload": "false",
        "payloadType": "bool",
        "topic": "motor/estado",
        "topicType": "str",
        "x": 240,
        "y": 260,
        "wires": [
            [
                "tpl_led"
            ]
        ]
    },
    {
        "id": "tpl_image",
        "type": "ui_template",
        "z": "flow_hmi_motor",
        "group": "group_motor",
        "name": "Imagen del Motor",
        "order": 1,
        "width": 6,
        "height": 4,
        "format": "<div style=\"display: flex; justify-content: center; align-items: center; height: 100%;\">\n    \n    <img src=\"https://cdn-icons-png.flaticon.com/512/1973/1973003.png\" alt=\"Motor\" style=\"max-height: 100px; max-width: 100%; opacity: 0.8;\">\n</div>",
        "storeOutMessages": true,
        "fwdInMessages": true,
        "reservesSpace": true,
        "templateScope": "local",
        "className": "",
        "x": 250,
        "y": 100,
        "wires": [
            []
        ]
    },
    {
        "id": "tpl_led",
        "type": "ui_template",
        "z": "flow_hmi_motor",
        "group": "group_motor",
        "name": "LED Estado Dinámico",
        "order": 4,
        "width": 6,
        "height": 3,
        "format": "<div style=\"display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%;\">\n    \n    <div style=\"width: 40px; height: 40px; border-radius: 50%; background-color: {{msg.payload ? '#28a745' : '#dc3545'}}; box-shadow: 0 0 20px {{msg.payload ? '#28a745' : '#dc3545'}}; border: 2px solid #fff; transition: all 0.3s ease;\"></div>\n    \n    \n    <div style=\"margin-top: 10px; font-weight: bold; font-family: sans-serif; color: {{msg.payload ? '#28a745' : '#dc3545'}};\">\n        {{msg.payload ? 'MOTOR EN MARCHA' : 'MOTOR DETENIDO'}}\n    </div>\n</div>",
        "storeOutMessages": true,
        "fwdInMessages": true,
        "reservesSpace": true,
        "templateScope": "local",
        "className": "",
        "x": 520,
        "y": 220,
        "wires": [
            []
        ]
    },
    {
        "id": "init_state",
        "type": "inject",
        "z": "flow_hmi_motor",
        "name": "Estado Inicial (Apagado)",
        "props": [
            {
                "p": "payload"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": true,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "false",
        "payloadType": "bool",
        "x": 250,
        "y": 340,
        "wires": [
            [
                "tpl_led"
            ]
        ]
    }
]
