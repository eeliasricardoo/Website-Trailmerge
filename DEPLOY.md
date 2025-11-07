# Guía de Despliegue a Google Cloud Storage

## Prerrequisitos

1. **Instalar Google Cloud SDK**
   ```bash
   # macOS (usando Homebrew)
   brew install --cask google-cloud-sdk
   
   # O descarga desde: https://cloud.google.com/sdk/docs/install
   ```

2. **Autenticarse con Google Cloud**
   ```bash
   gcloud auth login
   ```

3. **Configurar el proyecto de Google Cloud**
   ```bash
   gcloud config set project TU_PROJECT_ID
   ```

## Configuración

1. **Define el nombre de tu bucket como variable de entorno:**
   ```bash
   export GCS_BUCKET_NAME=tu-bucket-name
   ```

   O crea un archivo `.env` en la raíz del proyecto:
   ```
   GCS_BUCKET_NAME=tu-bucket-name
   ```

2. **Configura el bucket para hosting web:**
   ```bash
   # Hacer el bucket público (opcional)
   gsutil iam ch allUsers:objectViewer gs://tu-bucket-name
   
   # Configurar index.html como página principal
   gsutil web set -m index.html gs://tu-bucket-name
   ```

## Despliegue

### Opción 1: Usando el script de deploy
```bash
npm run deploy
```

Este comando:
1. Construye el sitio (`npm run build`)
2. Sube los archivos al bucket usando `gsutil rsync`
3. Configura el index.html como página principal

### Opción 2: Manual

1. **Construir el sitio:**
   ```bash
   npm run build
   ```

2. **Subir archivos al bucket:**
   ```bash
   gsutil -m rsync -r -d dist/ gs://tu-bucket-name
   ```

3. **Configurar página principal:**
   ```bash
   gsutil web set -m index.html gs://tu-bucket-name
   ```

## Configurar un dominio personalizado (Opcional)

1. En Google Cloud Console, ve a Cloud Storage > tu bucket
2. Ve a la pestaña "Website configuration"
3. Configura tu dominio personalizado

## Despliegue Automático con GitHub Actions

El proyecto incluye un workflow de GitHub Actions que despliega automáticamente cuando haces push a la rama `main`.

### Configuración del Service Account

Para que GitHub Actions pueda desplegar, necesitas crear un Service Account en Google Cloud:

1. **Crear el Service Account:**
   ```bash
   gcloud iam service-accounts create github-actions-deploy \
     --display-name="GitHub Actions Deploy"
   ```

2. **Obtener el email del Service Account:**
   ```bash
   gcloud iam service-accounts list
   ```
   Anota el email (formato: `github-actions-deploy@PROJECT_ID.iam.gserviceaccount.com`)

3. **Dar permisos al Service Account:**
   ```bash
   # Dar permisos para administrar el bucket
   gsutil iam ch serviceAccount:EMAIL_DEL_SERVICE_ACCOUNT:roles/storage.admin gs://trailmerge.com
   ```

4. **Crear y descargar la clave JSON:**
   ```bash
   gcloud iam service-accounts keys create key.json \
     --iam-account=EMAIL_DEL_SERVICE_ACCOUNT
   ```

5. **Agregar el secreto en GitHub:**
   - Ve a tu repositorio en GitHub
   - Settings > Secrets and variables > Actions
   - Click en "New repository secret"
   - Nombre: `GCP_SERVICE_ACCOUNT_KEY`
   - Valor: Copia todo el contenido del archivo `key.json`
   - Click en "Add secret"

6. **Eliminar el archivo de clave local (por seguridad):**
   ```bash
   rm key.json
   ```

### Cambiar la rama por defecto en GitHub

Si aún tienes `master` como rama por defecto:

1. Ve a Settings > Branches en tu repositorio de GitHub
2. Cambia la rama por defecto de `master` a `main`
3. Opcionalmente, elimina la rama `master` desde la interfaz de GitHub

## Notas

- El flag `-m` en `gsutil rsync` habilita la subida paralela (más rápido)
- El flag `-d` elimina archivos del bucket que no están en `dist/`
- El flag `-r` hace la operación recursiva
- El workflow se ejecuta automáticamente en cada push a `main`
- También puedes ejecutarlo manualmente desde la pestaña "Actions" en GitHub

