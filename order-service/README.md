<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circle# Order Service Microservicio

## Descripción

El Servicio de Pedidos gestiona todas las operaciones relacionadas con los pedidos en la plataforma Micro-Nest-Shop, incluyendo creación, lectura, actualización y eliminación de pedidos.

## Estructura del Proyecto

```
src/
├── orders/
│   ├── dto/
│   │   ├── create-order.dto.ts
│   │   └── update-order.dto.ts
│   ├── entity/
│   │   └── order.entity.ts
│   ├── interface/
│   │   └── order.interface.ts
│   ├── orders.controller.ts
│   ├── orders.module.ts
│   └── orders.service.ts
├── app.module.ts
├── app.controller.ts
├── app.service.ts
└── main.ts
```

## Endpoints

| Método | Patrón de Mensaje | Descripción                   |
| ------ | ----------------- | ----------------------------- |
| GET    | findAllOrders     | Obtiene todos los pedidos     |
| GET    | findOneOrder      | Obtiene un pedido por ID      |
| POST   | createOrder       | Crea un nuevo pedido          |
| PATCH  | updateOrder       | Actualiza un pedido existente |
| DELETE | removeOrder       | Elimina un pedido             |

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

Este servicio responde a mensajes del API Gateway utilizando el transporte TCP de NestJS Microservices. También se comunica con el Servicio de Productos para verificar la disponibilidad de los productos en un pedido.

## TODO

- Implementar persistencia de datos con una base de datos
- Agregar sistema de notificaciones para actualizaciones de estado de pedidos
- Implementar lógica para manejar inventario de productos

## Contribución

Al trabajar en este servicio, ten en cuenta las posibles interacciones con los servicios de Usuarios y Productos para mantener la consistencia de los datos.
