# Exchanging
Aplicación web para ver métricas de criptomondas y Calculadora de inversiones.
# Para correrla localmente

## BACKEND

Clonar el Repositorio en un directorio local.

- Abrir una terminal parado sobre la carpeta raiz y ejecutar: 

cd Backend

- Posicionado sobre la carpeta Backend crear archivo .env dev variables de entorno con las siguiente variables:

```
PORT=TU_PUERTO
APIKEY= API_KEY_DE_MESSARI
APIURL=https://data.messari.io/api/v1/
```

Luego en la consola ejecutar:

npm install

`npm install --force` en caso de que ocurra algun error a la hora de la instalación <br/>

Luego ejececutar:

npm run dev

Se correra el backend en el puerto que se haya creado en el arvhivo .env de variables de entorno

## FRONTEND

- Abrir otra consola parado sobre la carpeta raiz y ejecutar: 

cd Client

Posicionado sobre la carpeta Client ejecutar

npm install

`npm install --force` en caso de que ocurra algun error a la hora de la instalación <br/>


Luego ejececutar:

npm run dev

Abrir el navegador en el puerto 5173

