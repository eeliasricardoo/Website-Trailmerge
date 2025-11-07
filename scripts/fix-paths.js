#!/usr/bin/env node

import { readFileSync, writeFileSync } from 'fs';
import { glob } from 'glob';
import { join, dirname, relative } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const distDir = join(__dirname, '..', 'dist');

// Función para convertir rutas absolutas a relativas
function convertAbsoluteToRelative(html, filePath) {
  const fileDir = dirname(filePath);
  const relativePath = relative(distDir, fileDir);
  const depth = relativePath === '' ? 0 : relativePath.split('/').length;

  // Función helper para convertir una ruta absoluta a relativa
  const convertPath = (path) => {
    // No modificar URLs completas (http/https) o rutas que empiezan con //
    if (path.startsWith('//') || path.startsWith('http')) {
      return path;
    }
    // Convertir ruta absoluta a relativa
    const relativePath = depth === 0 ? path.substring(1) : '../'.repeat(depth) + path.substring(1);
    // Limpiar rutas redundantes (máximo 2 niveles)
    return relativePath.replace(/\.\.\/\.\.\/\.\.+/g, '../..');
  };

  // Reemplazar rutas absolutas en atributos href, src, action
  let modified = html.replace(
    /(href|src|action)=["'](\/[^"']+)["']/g,
    (match, attr, path) => {
      const relativePath = convertPath(path);
      return `${attr}="${relativePath}"`;
    }
  );

  // Reemplazar rutas absolutas en atributos data-* (como data-bg-image)
  modified = modified.replace(
    /(data-[^=]+)=["'](\/[^"']+)["']/g,
    (match, attr, path) => {
      const relativePath = convertPath(path);
      return `${attr}="${relativePath}"`;
    }
  );

  return modified;
}

// Encontrar todos los archivos HTML
const htmlFiles = glob.sync('**/*.html', { cwd: distDir, absolute: true });

console.log(`🔧 Corrigiendo rutas en ${htmlFiles.length} archivos HTML...`);

let fixedCount = 0;
for (const filePath of htmlFiles) {
  try {
    const content = readFileSync(filePath, 'utf-8');
    const fixed = convertAbsoluteToRelative(content, filePath);
    
    if (content !== fixed) {
      writeFileSync(filePath, fixed, 'utf-8');
      fixedCount++;
      console.log(`✅ Corregido: ${relative(distDir, filePath)}`);
    }
  } catch (error) {
    console.error(`❌ Error procesando ${filePath}:`, error.message);
  }
}

console.log(`\n✨ ${fixedCount} archivo(s) corregido(s)`);

