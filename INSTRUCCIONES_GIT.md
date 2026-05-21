# 📝 Instrucciones para Subir a GitHub

## Paso 1: Crear una cuenta en GitHub (Si no tienes)
1. Ve a https://github.com
2. Haz clic en "Sign up"
3. Completa los datos (email, contraseña, nombre de usuario)
4. Verifica tu email

## Paso 2: Crear un repositorio nuevo en GitHub

1. Inicia sesión en GitHub
2. Haz clic en el `+` en la esquina superior derecha
3. Selecciona "New repository"
4. En "Repository name" escribe: `catalogo-cursos`
5. Descripción (opcional): "Catálogo de cursos online con Next.js"
6. Selecciona "Public" (para que sea visible)
7. ❌ NO marques "Add a README file" (ya tenemos uno)
8. ❌ NO marques "Add .gitignore" (ya existe)
9. Haz clic en "Create repository"

## Paso 3: Configurar Git en tu máquina (Primera vez)

Si es la primera vez que usas Git, ejecuta esto en una terminal:

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"
```

Usa el mismo email y nombre que registraste en GitHub.

## Paso 4: Subir el proyecto a GitHub

En la carpeta del proyecto `catalogo-cursos`, ejecuta estos comandos:

```bash
# Inicializar git (si no está ya inicializado)
git init

# Agregar todos los archivos
git add .

# Crear el primer commit
git commit -m "Inicial: Catálogo de cursos con Next.js"

# Agregar el repositorio remoto (REEMPLAZA username con tu usuario de GitHub)
git remote add origin https://github.com/USERNAME/catalogo-cursos.git

# Cambiar rama a main (Next.js usa main por defecto)
git branch -M main

# Subir los archivos a GitHub
git push -u origin main
```

**⚠️ Reemplaza `USERNAME` con tu nombre de usuario de GitHub**

Por ejemplo, si tu usuario es "carlos123":
```bash
git remote add origin https://github.com/carlos123/catalogo-cursos.git
```

## Paso 5: Verificar que se subió correctamente

1. Ve a GitHub
2. Abre tu repositorio `https://github.com/USERNAME/catalogo-cursos`
3. Deberías ver todos los archivos del proyecto

## Paso 6: Actualizar cambios en el futuro

Si haces cambios localmente y quieres subirlos:

```bash
# Ver cambios
git status

# Agregar cambios
git add .

# Crear commit con mensaje descriptivo
git commit -m "Descripción de lo que cambiaste"

# Subir a GitHub
git push
```

## Paso 7: Clonar el proyecto en otra máquina

Si quieres descargar el proyecto en otra computadora:

```bash
git clone https://github.com/USERNAME/catalogo-cursos.git
cd catalogo-cursos
npm install
npm run dev
```

---

## 🆘 Solución de problemas

### Error: "fatal: not a git repository"
```bash
cd /ruta/correcta/catalogo-cursos
git init
```

### Error de autenticación al hacer push
GitHub cambió a usar tokens en lugar de contraseñas. Sigue esto:

1. Ve a GitHub → Settings → Developer settings → Personal access tokens
2. Crea un nuevo token (selecciona "repo")
3. Copia el token
4. Cuando Git pida contraseña, pega el token (no tu contraseña)

Alternativa más fácil: Usa SSH
```bash
# Generar clave SSH
ssh-keygen -t ed25519 -C "tu@email.com"

# Agregar la clave pública a GitHub (Settings → SSH keys)
```

### Error: "The branch 'main' is not fully merged"
```bash
git push -f origin main  # Fuerza el push (cuidado)
```

---

## ✅ Checklist Final

- [ ] Creé cuenta en GitHub
- [ ] Creé repositorio "catalogo-cursos"
- [ ] Configuré git con mi nombre y email
- [ ] Ejecuté `git init`
- [ ] Ejecuté `git add .`
- [ ] Ejecuté `git commit -m "..."`
- [ ] Agregué el remote con `git remote add origin`
- [ ] Hice `git push -u origin main`
- [ ] Verifiqué que los archivos están en GitHub

¡Listo! Tu proyecto está en GitHub. 🎉
