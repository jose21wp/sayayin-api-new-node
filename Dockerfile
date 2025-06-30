# 1) Imagen base
FROM node:20-slim
# 2) Herramientas para compilar

RUN apt-get update && apt-get install -y build-essential python3 netcat-openbsd && rm -rf /var/lib/apt/lists/*

# 3) Directorio de trabajo
WORKDIR /usr/src/app

# 4) Copiar package.json antes del resto del código
COPY package*.json ./

# 5) Instalar todas las dependencias (dev incluidas, para que tsx funcione)
RUN npm install

# 6) Copiar el código fuente
COPY . .

# 7) Exponer el puerto
EXPOSE 3000

# 8) Copiar y dar permisos al entrypoint
COPY entrypoint.sh /usr/src/app/entrypoint.sh
RUN chmod +x /usr/src/app/entrypoint.sh

# 9) Usar el script como punto de entrada
ENTRYPOINT ["sh", "/usr/src/app/entrypoint.sh"]