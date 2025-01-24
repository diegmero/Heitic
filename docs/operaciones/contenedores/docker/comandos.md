# Comandos Más Usados en Docker

Esta es una lista de comandos básicos y útiles en Docker para gestionar imágenes, contenedores, y otros recursos.

## 1. Gestión de Imágenes

### Listar Imágenes

```bash
docker images
```

Muestra todas las imágenes disponibles en el sistema.

### Descargar una Imagen

```bash
docker pull <nombre_imagen>
```

Descarga una imagen desde Docker Hub.

### Eliminar una Imagen

```bash
docker rmi <id_imagen>
```

Elimina una imagen por su ID o nombre.

## 2. Gestión de Contenedores

### Listar Contenedores

- Contenedores Activos:

  ```bash
  docker ps
  ```

- Todos los Contenedores (incluyendo detenidos):

  ```bash
  docker ps -a
  ```

### Crear y Ejecutar un Contenedor

```bash
docker run -it <nombre_imagen>
```

Crea y ejecuta un contenedor interactivo.

### Detener un Contenedor

```bash
docker stop <id_contenedor>
```

Detiene un contenedor en ejecución.

### Iniciar un Contenedor Detenido

```bash
docker start <id_contenedor>
```

Inicia un contenedor previamente detenido.

### Eliminar un Contenedor

```bash
docker rm <id_contenedor>
```

Elimina un contenedor detenido.

## 3. Información y Logs

### Ver Logs de un Contenedor

```bash
docker logs <id_contenedor>
```

Muestra los logs de un contenedor.

### Inspeccionar un Contenedor o Imagen

```bash
docker inspect <id_contenedor_o_imagen>
```

Proporciona detalles sobre un contenedor o imagen.

### Estadísticas en Tiempo Real

```bash
docker stats
```

Muestra estadísticas de uso (CPU, memoria, etc.) de los contenedores activos.

## 4. Redes en Docker

### Listar Redes

```bash
docker network ls
```

Muestra todas las redes creadas en Docker.

### Crear una Red

```bash
docker network create <nombre_red>
```

Crea una nueva red.

### Conectar un Contenedor a una Red

```bash
docker network connect <nombre_red> <id_contenedor>
```

Conecta un contenedor a una red específica.

## 5. Volúmenes en Docker

### Listar Volúmenes

```bash
docker volume ls
```

Muestra todos los volúmenes creados.

### Crear un Volumen

```bash
docker volume create <nombre_volumen>
```

Crea un nuevo volumen.

### Eliminar un Volumen

```bash
docker volume rm <nombre_volumen>
```

Elimina un volumen específico.

## 6. Otros Comandos Útiles

### Ver la Versión de Docker

```bash
docker version
```

Muestra la versión de Docker instalada.

### Ver Información del Sistema Docker

```bash
docker info
```

Proporciona detalles sobre el entorno Docker.

### Eliminar Contenedores Detenidos y Recursos No Usados

```bash
docker system prune
```

Limpia contenedores detenidos, redes no usadas e imágenes intermedias.