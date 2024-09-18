<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# User Service Microservicio

## Descripción

El Servicio de Usuarios gestiona todas las operaciones relacionadas con los usuarios en la plataforma Micro-Nest-Shop, incluyendo creación, lectura, actualización y eliminación de usuarios.

## Estructura del Proyecto

```
src/
├── users/
│   ├── dto/
│   │   ├── create-user.dto.ts
│   │   └── update-user.dto.ts
│   ├── entity/
│   │   └── user.entity.ts
│   ├── interface/
│   │   └── user.interface.ts
│   ├── users.controller.ts
│   ├── users.module.ts
│   └── users.service.ts
├── app.module.ts
├── app.controller.ts
├── app.service.ts
└── main.ts
```

## Endpoints

| Método | Patrón de Mensaje | Descripción                    |
| ------ | ----------------- | ------------------------------ |
| GET    | findAllUsers      | Obtiene todos los usuarios     |
| GET    | findOneUser       | Obtiene un usuario por ID      |
| POST   | createUser        | Crea un nuevo usuario          |
| PATCH  | updateUser        | Actualiza un usuario existente |
| DELETE | removeUser        | Elimina un usuario             |

## Configuración

Configura el puerto del servicio en el archivo `main.ts`.

## Ejecución

```bash
# Desarrollo
pnpm run start:dev

# Producción
pnpm run start:prod
```

## Pruebas

```bash
pnpm run test
pnpm run test:e2e
```

## Dependencias Principales

- @nestjs/microservices: Para la implementación del microservicio

## Comunicación con otros Servicios

Este servicio responde a mensajes del API Gateway utilizando el transporte TCP de NestJS Microservices.

## TODO

- Implementar persistencia de datos con una base de datos
- Agregar validación de datos de entrada
- Implementar autenticación de usuarios

## Contribución

Asegúrate de mantener la compatibilidad con los patrones de mensaje existentes al agregar nuevas funcionalidades.
