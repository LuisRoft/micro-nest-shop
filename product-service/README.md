<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Product Service Microservicio

## Descripción

El Servicio de Productos maneja todas las operaciones relacionadas con los productos en la plataforma Micro-Nest-Shop, incluyendo creación, lectura, actualización y eliminación de productos.

## Estructura del Proyecto

```
src/
├── products/
│   ├── dto/
│   │   ├── create-product.dto.ts
│   │   └── update-product.dto.ts
│   ├── entity/
│   │   └── product.entity.ts
│   ├── interface/
│   │   └── product.interface.ts
│   ├── products.controller.ts
│   ├── products.module.ts
│   └── products.service.ts
├── app.module.ts
├── app.controller.ts
├── app.service.ts
└── main.ts
```

## Endpoints

| Método | Patrón de Mensaje | Descripción                     |
| ------ | ----------------- | ------------------------------- |
| GET    | findAllProducts   | Obtiene todos los productos     |
| GET    | findOneProduct    | Obtiene un producto por ID      |
| POST   | createProduct     | Crea un nuevo producto          |
| PATCH  | updateProduct     | Actualiza un producto existente |
| DELETE | removeProduct     | Elimina un producto             |

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
- Agregar manejo de imágenes de productos
- Implementar sistema de categorías para productos
- Expandir las interfaces de producto para incluir más detalles como stock, categoría, etc.

## Contribución

Al agregar nuevas características, asegúrate de mantener la consistencia con los otros servicios en términos de estructura y patrones de diseño.
