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

## ⚙️ Usuario Precargado

Email :super_sayan@vegito.com
Password: 12345

## ⚙️ Instalación local

### 1. Clonar proyecto

```bash
git clone https://github.com/jose21wp/sayayin-api-node.git
cd sayayin-api

3. Iniciar con Docker
PD: Antes de ejecutar docker verificar que este corriendo el servicio de docker en su equipo o si no no arrancará

docker compose up

4. Ver servicios corriendo
Backend: http://localhost:3000
Swagger: http://localhost:3000/swagger/
MongoDB: localhost:27017 

📘 Documentación Swagger
Accesible en:
http://localhost:3000/swagger/
Incluye definición de esquemas, validaciones y ejemplos de payloads.

🧪 Base de datos
Para usar la consola de MongoDB desde Docker Desktop:

docker exec -it sayayin-mongo mongosh
show dbs
use vegitoDB
show collections
db.sayayins.find().pretty() # Colecciones de sayayins del proyecto
db.users.find().pretty()# Colecciones de usuarios del proyecto

🛠️ Endpoints disponibles
# Sayayins
GET /api/sayayins
GET /api/sayayins/:id
POST /api/sayayins
PUT /api/sayayins/:id
DELETE /api/sayayins/:id 

#Users
POST /api/auth/register # Registra un usuario 
POST /api/auth/login # Devuelve el token

🧙‍♂️ Semilla de ejemplo
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

📂 Estructura del proyecto
sayayin-api/ 
├──scripts/
    └── seed.ts # Hace un inser de sayayines
├──src/
    ├── config/ # Configuración general 
    ├── controllers/ # Lógica de negocio por ruta 
    ├── docs/ # Documentación Swagger y archivos YAML 
    ├── middlewares/ # Validaciones de auth
    ├── models/ # Esquemas de Mongoose 
    ├── repositories/ # Acceso a datos y lógica 
    ├── routes/ # Rutas principales de la API 
    ├── services/ # Servicios
├── .dockerignore # Exclusiones para Docker build 
├── .env # Variables de entorno 
├── docker-compose.yaml # Esto hace la magia para que se creen los Dockers
├── Dockerfile # Configuración del contenedor para la API 
├── entrypoint.sh # Script de inicialización del contenedor para primero generar el seed
├── package.json # Dependencias y scripts 
├── tsconfig.json # Configuración de TypeScript 
└── README.md # Documentación del proyecto

✨ Autor
Creado con pasión por Jose Espinoza Miranda