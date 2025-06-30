echo "🔄 Esperando que Mongo esté listo..."
until nc -z mongo 27017; do
  echo "⏳ Esperando conexión..."
  sleep 2
done

if [ "$SEED_ON_START" = "true" ]; then
  echo "🌱 Ejecutando seed inicial..."
  npm run seed || {
    echo "❌ Falló el seed. Abortando ejecución."
    exit 1
  }
else
  echo "⚠️ Seed omitido (SEED_ON_START no es true)"
fi

echo "🚀 Iniciando aplicación..."
npm run dev