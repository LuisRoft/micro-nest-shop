<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

# Micro-Nest-Shop

## Descripción del Proyecto

Micro-Nest-Shop es un proyecto de demostración que implementa una arquitectura de microservicios utilizando NestJS. El proyecto simula una tienda en línea básica con servicios para usuarios, productos y pedidos. Aunque actualmente no tiene una lógica de negocio completa ni interacción con bases de datos, sirve como una excelente base para entender y construir sistemas basados en microservicios con NestJS.

## Estructura del Proyecto

El proyecto consta de los siguientes componentes principales:

1. API Gateway
2. Servicio de Usuarios
3. Servicio de Productos
4. Servicio de Pedidos

Cada servicio es un microservicio independiente que se comunica a través de TCP utilizando el sistema de mensajería integrado de NestJS.

## Tecnologías Utilizadas

- NestJS
- Docker
- Docker Compose
- pnpm (como gestor de paquetes)
- TypeScript

## Cómo Funciona

1. El API Gateway actúa como punto de entrada para todas las solicitudes de los clientes.
2. Las solicitudes son enrutadas a los microservicios correspondientes (usuarios, productos, pedidos) a través de TCP.
3. Cada microservicio procesa la solicitud y devuelve una respuesta.
4. El API Gateway recopila las respuestas y las envía de vuelta al cliente.

## Configuración y Ejecución

### Prerrequisitos

- Docker
- Docker Compose
- pnpm

### Pasos para Levantar el Proyecto

1. Clonar el repositorio:

   ```
   git clone https://github.com/tu-usuario/micro-nest-shop.git
   cd micro-nest-shop
   ```

2. Construir y levantar los contenedores:

   ```
   docker-compose up --build
   ```

3. El API Gateway estará disponible en `http://localhost:3000`

### Endpoints Disponibles

- `GET /users`: Obtener todos los usuarios
- `POST /products`: Crear un nuevo producto
- `GET /orders/:userId`: Obtener pedidos de un usuario específico

## Desarrollo

Para desarrollo, se ha configurado Nodemon para reiniciar automáticamente los servicios cuando se detectan cambios en el código.

## TODO: Mejoras Futuras

1. Implementar un ORM (por ejemplo, TypeORM o Prisma) para manejar las operaciones de base de datos.
2. Seleccionar e integrar una base de datos (por ejemplo, PostgreSQL o MongoDB).
3. Implementar autenticación y autorización (por ejemplo, con JWT).
4. Agregar validación de datos de entrada utilizando class-validator.
5. Implementar manejo de errores más robusto y centralizado.
6. Agregar pruebas unitarias y de integración para cada servicio.
7. Implementar un sistema de logging centralizado (por ejemplo, con ELK stack).
8. Configurar un pipeline de CI/CD (por ejemplo, con GitHub Actions o GitLab CI).
9. Implementar documentación de API (por ejemplo, con Swagger).
10. Agregar monitoreo y métricas (por ejemplo, con Prometheus y Grafana).
11. Implementar un sistema de caché (por ejemplo, con Redis).
12. Agregar una capa de mensajería asíncrona (por ejemplo, con RabbitMQ o Kafka).
13. Implementar estrategias de resiliencia (circuit breakers, retries, etc.).
14. Añadir soporte para múltiples entornos (desarrollo, staging, producción).
15. Implementar un servicio de descubrimiento (por ejemplo, con Consul).

## Contribución

Las contribuciones son bienvenidas. Por favor, abre un issue o un pull request para cualquier mejora o corrección que quieras proponer.
