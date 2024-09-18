<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# API Gateway Microservicio

## Descripción

El API Gateway actúa como punto de entrada único para todos los microservicios en la arquitectura Micro-Nest-Shop. Se encarga de enrutar las solicitudes a los servicios correspondientes y agregar las respuestas.

## Estructura del Proyecto

```
src/
├── app.controller.ts
├── app.service.ts
├── main.ts
└── app.module.ts
```

## Endpoints

| Método | Endpoint        | Descripción                       |
| ------ | --------------- | --------------------------------- |
| GET    | /users          | Obtiene todos los usuarios        |
| POST   | /products       | Crea un nuevo producto            |
| GET    | /orders/:userId | Obtiene los pedidos de un usuario |

## Configuración

Asegúrate de que las siguientes variables de entorno estén configuradas:

- `USER_SERVICE_HOST`: Host del servicio de usuarios
- `PRODUCT_SERVICE_HOST`: Host del servicio de productos
- `ORDER_SERVICE_HOST`: Host del servicio de pedidos

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

- @nestjs/microservices: Para la comunicación entre microservicios
- rxjs: Para el manejo de flujos de datos asíncronos

## Comunicación con otros Servicios

El API Gateway se comunica con los servicios de Usuarios, Productos y Pedidos utilizando el transporte TCP de NestJS Microservices.

## TODO

- Implementar autenticación y autorización
- Agregar rate limiting
- Implementar caching de respuestas frecuentes

## Contribución

Por favor, asegúrate de probar todos los endpoints después de hacer cambios en el enrutamiento o la lógica de comunicación con otros servicios.
