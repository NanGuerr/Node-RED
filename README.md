# Node-RED


# 🏭 Proyecto Node-RED: [Nombre del Proyecto]
![Node-RED](https://img.shields.io/badge/Node--RED-%238F0000.svg?style=for-the-badge&logo=node-red&logoColor=white)


Repositorio de flujos, subflows y configuraciones en Node-RED que incluyen integración con protocolos industriales (Modbus), procesamiento y análisis de datos en archivos CSV, y paneles HMI interactivos para control de planta.

Aquí tienes una propuesta de archivo `README.md` estructurado, profesional y fácil de leer para tu repositorio en GitHub.

---

# Repositorio de Proyectos Node-RED

Este repositorio contiene una colección de flujos, subflows y configuraciones desarrolladas en **Node-RED**. El objetivo principal es la implementación de soluciones para automatización industrial, incluyendo el procesamiento de datos y la creación de interfaces HMI.

## 🚀 Características principales

* **Protocolos Industriales:** Implementación de comunicación **Modbus** (TCP) para lectura y monitoreo de dispositivos.
* **Procesamiento de Datos:** Subflows especializados para el manejo y análisis dinámico de archivos **CSV**.
* **HMI / Dashboards:** Creación de paneles de control interactivos para visualización y gestión de maquinaria (ej. control de motores).
* **Seguridad:** Configuraciones robustas para la protección de accesos administrativos y de visualización.

## 📁 Estructura del Repositorio

```text
/
├── flows/              # Archivos .js (JSON) con los flujos de Node-RED
├── subflows/           # Subflows reutilizables (Modbus, utilidades)
├── data/               # Ejemplos de datasets CSV para pruebas
└── settings.js         # Configuraciones de seguridad y entorno

```

## 🛠️ Tecnologías Utilizadas

* [Node-RED](https://nodered.org/): Plataforma de programación visual.
* **Node-RED Dashboard:** Para la interfaz gráfica de usuario.
* **node-red-contrib-modbus:** Para la integración con PLCs y equipos industriales.

## 📋 Ejemplos incluidos

1. **Analizador CSV:** Subflow que calcula valores máximos y promedios dinámicamente desde archivos `.csv`.
2. **HMI Motor:** Dashboard interactivo con control de arranque/paro y feedback visual.
3. **Lector Modbus:** Configuración para lectura de registros (Coils) con parámetros dinámicos.

## 🔧 Instalación y Uso

1. Asegúrate de tener **Node-RED** instalado en tu sistema.
2. Clona este repositorio:
```bash
git clone https://github.com/NanGuerr/Node-RED.git

```


3. Importa los archivos `.js` desde el menú de Node-RED: `Import` -> `Clipboard` (o arrastra el archivo directamente al editor).

## 🛡️ Configuración de Seguridad

El archivo `settings.js` incluido contiene plantillas para proteger el entorno mediante autenticación de usuarios (`admin` e `ingelearn`). Recuerda adaptar las contraseñas según tus necesidades antes de desplegar.

---

*Desarrollado con fines educativos y de automatización industrial.*

---
