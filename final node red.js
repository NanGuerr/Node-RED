// ... (otras configuraciones del archivo settings.js) ...

module.exports = {
    // La propiedad uiPort define el puerto, etc.
    uiPort: process.env.PORT || 1880,

    // ...

    /** Securing Node-RED admin window **/
    adminAuth: {
        type: "credentials",
        users: [
            {
                username: "admin",
                // Contraseña encriptada para: curso_nodered
                password: "$2b$08$pG2YEnN.A0XG1F76v.3PZexzKxHh8w8m6v9jVdE8yIep1Z2TclSfe",
                // Permiso total (lectura, escritura y administración)
                permissions: "*"
            },
            {
                username: "ingelearn",
                // Contraseña encriptada para: inge1234
                password: "$2b$08$U3h5WdYQ7pZEx2BvM16RbeW/WjfeN7gG9D6ApeI6U1Wf7vS2yKm62",
                // Permiso restringido solo a visualización de flujos y datos
                permissions: "read"
            }
        ]
    },

    // ... (resto del archivo settings.js) ...
}
