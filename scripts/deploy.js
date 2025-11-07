#!/usr/bin/env node

import { execSync } from 'child_process';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

// Leer el nombre del bucket desde variable de entorno o archivo de configuración
const bucketName = process.env.GCS_BUCKET_NAME;

if (!bucketName) {
  console.error('❌ Error: GCS_BUCKET_NAME no está definido');
  console.log('\nPor favor, define la variable de entorno:');
  console.log('  export GCS_BUCKET_NAME=tu-bucket-name');
  console.log('\nO crea un archivo .env con:');
  console.log('  GCS_BUCKET_NAME=tu-bucket-name');
  process.exit(1);
}

const distDir = join(rootDir, 'dist');

console.log('🚀 Iniciando despliegue a Google Cloud Storage...');
console.log(`📦 Bucket: ${bucketName}`);
console.log(`📁 Directorio: ${distDir}\n`);

try {
  // Verificar que gsutil está instalado
  try {
    execSync('which gsutil', { stdio: 'ignore' });
  } catch {
    console.error('❌ Error: gsutil no está instalado');
    console.log('\nInstala Google Cloud SDK:');
    console.log('  https://cloud.google.com/sdk/docs/install');
    process.exit(1);
  }

  // Verificar que el directorio dist existe
  try {
    execSync(`test -d "${distDir}"`, { stdio: 'ignore' });
  } catch {
    console.error('❌ Error: El directorio dist/ no existe');
    console.log('Ejecuta "npm run build" primero');
    process.exit(1);
  }

  // Subir archivos al bucket
  console.log('📤 Subiendo archivos...');
  execSync(
    `gsutil -m rsync -r -d "${distDir}" "gs://${bucketName}"`,
    { stdio: 'inherit', cwd: rootDir }
  );

  // Configurar el index.html como página principal
  console.log('\n⚙️  Configurando página principal...');
  execSync(
    `gsutil web set -m index.html "gs://${bucketName}"`,
    { stdio: 'inherit' }
  );

  // Configurar permisos públicos (opcional, descomenta si quieres que sea público)
  // console.log('\n🌐 Configurando permisos públicos...');
  // execSync(
  //   `gsutil iam ch allUsers:objectViewer "gs://${bucketName}"`,
  //   { stdio: 'inherit' }
  // );

  console.log('\n✅ ¡Despliegue completado exitosamente!');
  console.log(`\n🌐 Tu sitio está disponible en: https://storage.googleapis.com/${bucketName}/index.html`);
  console.log(`   O si configuraste un dominio: https://${bucketName}`);

} catch (error) {
  console.error('\n❌ Error durante el despliegue:', error.message);
  process.exit(1);
}

