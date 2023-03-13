module.exports = {
    swaggerDefinition: {
        swagger: "2.0",
        info: {
            "title": "API de operaciones CRUD para una tarea",
            "description": "",
            "version": "1.0.0",
            "servers": ["http://localhost:3000"]
        }
    },
    apis: ["src/routes/*.js"] 
}