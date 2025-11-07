# Configuración de Staging

## Bucket Configurado

El bucket `staging.trailmerge.com` está configurado y listo para usar.

## Desplegar a Staging

### Opción 1: Desde la línea de comandos
```bash
npm run deploy:staging
```

### Opción 2: Desde GitHub Actions
1. Ve a la pestaña "Actions" en GitHub
2. Selecciona "Deploy to Google Cloud Storage"
3. Click en "Run workflow"
4. Selecciona "staging" en el dropdown "Environment"
5. Click en "Run workflow"

## Configurar el Subdominio

Para que `staging.trailmerge.com` funcione, necesitas configurar el DNS. Tienes dos opciones:

### Opción A: Usar Load Balancer (Recomendado para producción)

1. **Crear un Load Balancer HTTP(S) en Google Cloud:**
   ```bash
   # Esto requiere configuración en la consola de Google Cloud
   # Ve a: Network Services > Load Balancing > Create Load Balancer
   ```

2. **Configurar el backend:**
   - Tipo: Backend Bucket
   - Bucket: `staging.trailmerge.com`

3. **Configurar el frontend:**
   - Protocolo: HTTPS
   - Certificado SSL: Crea o usa uno existente para `staging.trailmerge.com`

4. **Configurar DNS:**
   - Crea un registro A o CNAME en tu DNS apuntando a la IP del Load Balancer

### Opción B: Deshabilitar Public Access Prevention (Más simple para staging)

Si el bucket tiene "public access prevention" habilitado, puedes deshabilitarlo:

```bash
# Deshabilitar public access prevention
gsutil pap set unenforced gs://staging.trailmerge.com

# Hacer el bucket público
gsutil iam ch allUsers:objectViewer gs://staging.trailmerge.com
```

Luego configura DNS con un registro CNAME:
- Nombre: `staging`
- Valor: `c.storage.googleapis.com`

**Nota:** Esta opción es más simple pero menos segura. Para producción, usa la Opción A.

## Acceder al Bucket de Staging

El bucket de staging es **privado** y solo accesible cuando estás autenticado con Google Cloud.

### Opción 1: Usando gsutil (autenticado)
```bash
# Asegúrate de estar autenticado
gcloud auth login

# Accede a los archivos
gsutil ls gs://staging.trailmerge.com/
gsutil cat gs://staging.trailmerge.com/index.html
```

### Opción 2: URL con autenticación
Cuando estás autenticado en Google Cloud, puedes acceder directamente:
- `https://storage.googleapis.com/staging.trailmerge.com/index.html`

**Nota:** Si no estás autenticado, verás un error 403 (Forbidden).

### Opción 3: Compartir URL firmada (temporal)
Si necesitas compartir acceso temporal:
```bash
# Generar URL firmada válida por 1 hora
gsutil signurl -d 1h key.json gs://staging.trailmerge.com/index.html
```

## Verificar el Despliegue

Después de desplegar:
- URL directa (requiere autenticación): `https://storage.googleapis.com/staging.trailmerge.com/index.html`
- Con subdominio configurado: `https://staging.trailmerge.com` (requiere Load Balancer)

## Flujo de Trabajo con Ramas

### Ramas y Entornos

- **`main`** → Despliegue automático a **production** (`trailmerge.com`)
- **`staging`** → Despliegue automático a **staging** (`staging.trailmerge.com`)

### Workflow Recomendado

1. **Crear rama de staging:**
   ```bash
   git checkout -b staging
   git push -u origin staging
   ```

2. **Trabajar en staging:**
   - Haz cambios en la rama `staging`
   - Push a `staging` → despliegue automático a staging
   - Prueba en `staging.trailmerge.com` (requiere autenticación)

3. **Mover a production:**
   - Cuando esté listo, mergea `staging` → `main`
   - Push a `main` → despliegue automático a production

### Despliegue Manual

También puedes desplegar manualmente desde cualquier rama usando GitHub Actions:
- Ve a "Actions" > "Deploy to Google Cloud Storage"
- Selecciona el entorno (production o staging)
- Ejecuta el workflow

