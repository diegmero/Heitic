# Cómo Limitar Recursos en Docker

Docker permite limitar recursos como CPU, memoria y disco para gestionar el uso eficiente del host.

## 1. Limitar Uso de CPU

### Limitar Núcleos

```bash
docker run --cpuset-cpus="0,1" imagen
```

El contenedor usará solo los núcleos 0 y 1.

### Limitar Proporción de CPU

```bash
docker run --cpu-shares=512 imagen
```

El contenedor tendrá menos prioridad (512) que otros con el valor predeterminado (1024).

### Limitar Tiempo de CPU

```bash
docker run --cpu-quota=50000 imagen
```

El contenedor usará el 50% de CPU disponible.

## 2. Limitar Uso de Memoria

### Limitar RAM

```bash
docker run --memory=512m imagen
```

Máximo 512 MB de RAM.

### Limitar Memoria Swap

```bash
docker run --memory=512m --memory-swap=1g imagen
```

Máximo 512 MB de RAM + 512 MB de swap.

## 3. Limitar Uso del Disco

### Limitar Operaciones de E/S

```bash
docker run --device-read-bps=/dev/sda:1mb --device-write-bps=/dev/sda:2mb imagen
```

Lectura limitada a 1 MB/s y escritura a 2 MB/s en `/dev/sda`.

## 4. Ejemplo Completo

```bash
docker run \
  --cpuset-cpus="0,1" \
  --cpu-quota=50000 \
  --memory=512m \
  --memory-swap=1g \
  imagen
```

Usa núcleos 0 y 1, 50% de CPU, 512 MB de RAM y 1 GB de RAM + swap.

## Verificar Configuración

Para confirmar límites aplicados:

```bash
docker inspect <nombre_contenedor>
```