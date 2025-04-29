# React + TypeScript + Vite + GraphQL

1. Punto número uno de la prueba técnica
  
  #Descripción de la app

  Nombre: World Explorer

  Descripción: 
  La aplicación cuenta con una página principal que lista los países y una pantalla de detalle para cada país, con botones de navegación. También incluye una página de error 404 y una página adicional para el segundo punto de la prueba, que consiste en el desarrollo y solución de un algoritmo.
  El enrutamiento se maneja mediante React Router, el consumo de la API GraphQL se realiza con Apollo Client, y se utiliza LocalStorage para manejar la persistencia de datos, proporcionando así una solución al punto número 2 de la prueba.


  1. Página principal
  - Consumo de la Api con GraphQL
  - Listado de países y se renderizan en tarjetas
  - Una barra de búsqueda
  - Filtro por continente
  - Filtro por currency
  - Llenado de listas desplegables de forma dinamica

  2. Página del detalle del país
  - Consumo de la Api con GraphQL
  - Se muestra en una tarjeta la información del país
  - Botón para regresar

  3. Página 404

  4. Página que permite simular la compra de boletos y calcular la devolución de acuerdo al billete seleccionado (mediante una lista desplegable).

  5. Header, Footer, Iconos

2. Ejercicio de algoritmo:
  - Solución:
    Se creó una primera versión en PHP archivo(src\assets\TicketServices.txt) y una segunda versión implementada en la ruta app-countries\src\services\tickets\TicketServices.ts.
    Además, se desarrolló una página que permite simular la compra de boletos y calcular la devolución según el billete seleccionado (mediante una lista desplegable).

  - Página:
  /ticket

# Especificaciones:

El fronten fue desarrollado con las siguientes tecnologías:

  - npm version 10.9.0
  - Node.js versión 22.12.0
  - React versión 19.0.0
  - React Router versión 19.0.0
  - Apollo Client - GraphQL
  - TypeScript
  - Tailwind CSS
  - ShadCN
  - React Icons

Revisar el package.json

# Repositorio:

- Url: https://github.com/mejia-jose/app-countries

- Url de producción:

# La aplicación fue desplegada en vercel
# Url: https://app-countries-seven-fawn.vercel.app/




