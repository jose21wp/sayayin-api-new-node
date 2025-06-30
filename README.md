# 🥋 Sayayin API

API RESTful desarrollada en Node.js y MongoDB para gestionar personajes y transformaciones del universo Dragon Ball. Soporta operaciones CRUD y está completamente documentada con Swagger. En la descripcion aparece un usuario precargado para realizar un login y que devuelva un token para poder interactuar con los demas endpoint(el token se carga en el 🔒 que aparece en cada endpoint).

## 🚀 Tecnologías

- Node.js 22 + Express
- TypeScript
- MongoDB 7 + Mongoose
- Docker y Docker Compose
- Swagger / OpenAPI
- MongoDB Compass
- Git + GitHub

---

## ⚙️ Instalación local

### 1.🐙 Clonar proyecto

```bash
git clone https://github.com/jose21wp/sayayin-api-new-node.git
cd sayayin-api
```

### 2.🐳 Iniciar con Docker

PD: Antes de ejecutar docker verificar que este corriendo el servicio de docker en su equipo o si no no arrancará.

```bash
docker compose up
```

### 3.🟢 Verificar con Swagger y conexiones

Backend: [http://localhost:3000](http://localhost:3000)  
Swagger: [http://localhost:3000/swagger/](http://localhost:3000/swagger/)  
MongoDB: [mongodb://localhost:27017/vegito-db](mongodb://localhost:27017/vegito-db)
Postman: [http://localhost:3000/swagger.json](http://localhost:3000/swagger.json)

### 3.1. Como empezar

- 1.Crear user en /api/auth/register
- 2.Ingresar Credenciales creadas en /api/auth/login, esto trae un TOKEN que es requerido en algunos endpoints.
- 3.Interactuar con los endpoint en Postman o en Swagger.

### 4.🧪 Base de datos desde Docker

Para usar la consola de MongoDB desde Docker Desktop:

```bash
docker exec -it sayayin-mongo mongosh
show dbs
use vegito-db
show collections
db.sayayins.find().pretty() # Colecciones de sayayins del proyecto
db.users.find().pretty() # Colecciones de usuarios del proyecto
```

### 5. 🛠️ Endpoints disponibles

### Sayayins

- GET /api/sayayins
- GET /api/sayayins/:id
- POST /api/sayayins
- PUT /api/sayayins/:id
- DELETE /api/sayayins/:id

### Users

- POST /api/auth/register # Registra un usuario
- POST /api/auth/login # Devuelve el token

### 6.🧙‍♂️ Body ejemplo Sayayin

```bash
json
{
  "id": 2,
  "name": "Vegeta",
  "ki": "7800",
  "maxKi": "9000",
  "race": "Saiyajin",
  "gender": "Masculino",
  "description": "El príncipe orgulloso de los Saiyajin, siempre buscando superar su límite.",
  "image": "https://dragonball.com/vegeta.png",
  "affiliation": "Guerreros Z",
  "originPlanet": {
    "id": 3,
    "name": "Planeta Vegeta",
    "isDestroyed": true,
    "description": "Planeta natal de los Saiyajin, destruido por Freezer.",
    "image": "https://dragonball.com/planeta-vegeta.png",
    "deletedAt": null
  },
  "transformations": [
    {
      "id": 1,
      "name": "Forma Base",
      "image": "https://example.com/base.jpg",
      "ki": "5000",
      "deletedAt": null
    },
    {
      "id": 2,
      "name": "Super Saiyajin",
      "image": "https://example.com/ssj.jpg",
      "ki": "8900",
      "deletedAt": null
    }
  ]
}
```

### 7.📂 Estructura del proyecto

```bash
sayayin-api/
├──scripts/
    └── seed.ts # Hace un insert de sayayines
├──src/
    ├── config/ # Configuración general
    ├── controllers/ # Lógica de negocio por ruta
    ├── middlewares/ # Validaciones de auth
    ├── models/ # Esquemas de Mongoose
    ├── routes/ # Rutas principales de la API
    └── index.ts # server api
├── .dockerignore # Exclusiones para Docker build
├── .env # Variables de entorno
├── docker-compose.yaml # Esto hace la magia para que se creen los Dockers
├── Dockerfile # Configuración del contenedor para la API
├── entrypoint.sh # Script de inicialización del contenedor para primero generar el seed
├── package.json # Dependencias y scripts
├── tsconfig.json # Configuración de TypeScript
└── README.md # Documentación del proyecto
```

✨ Autor
Creado con pasión por Jose Espinoza Miranda
