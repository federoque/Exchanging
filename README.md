# Exchanging

Web application for viewing cryptocurrency metrics and investment calculator. It displays real-time data on Bitcoin, Ethereum, and Cardano obtained from the API of `https://messari.io` to show values in dollars for these cryptocurrencies, variations, and trend graphs. Additionally, it features an investment simulator where you input an amount, and it returns the recovered value as an annual investment.
# Run locally
## BACKEND

Clone the repository in a local directory.

- On root directory open a terminal and run:

cd Backend
npm install
`npm install --force` in case of error at instalation <br/>

- On root Backend directory create a .env file:

```
PORT=YOUR_PORT
APIKEY= YOUR_MESSARI_API_KEY
APIURL=https://data.messari.io/api/v1/
```

- On root Backend directory run:

npm run dev

It will run server on your selected port.

## FRONTEND

- Open another terminal and on root directory run:

cd Client

- On root Client run:

npm install

`npm install --force` in case of error at instalation <br/>


- Then run:

npm run dev

It will open a browser tab on PORT 5173

======================================================================================================
# Exchanging
 Aplicación web para ver métricas de criptomondas y Calculadora de inversiones. La misma muestra datos en tiempo real sobre Bitcoin, Ethereum y Cardano obtenidas de la API de `https://messari.io/` para mostar valores en dolares de esas criptomonedas, variaciones y gráficas de tendencias. 
Además se posée un simulador de inversiones en el cual se le agrega un monto y devuelve el valor recuperado como inversión anual.
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

