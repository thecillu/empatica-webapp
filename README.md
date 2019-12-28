# Empatica Webapp

Angular WebApp which manages Articles.

The Demo WebApp consumes the RESTful API exposed from the project [empatica-server](https://github.com/thecillu/empatica-server)


## Server Endpoint configuration

The endpoint of the RESTFul API is defined in the files `src/environments/environment*.ts`, with the variable name `apiBaseUrl`.

By default the Dev Server connect to the address `http://localhost:80`. Change it in the file `src/environments/environment.ts`

Please put the correct endpoint in the Production file `src/environments/environment.prod.ts` before to serve or build the WebApp with the Production configuration

## Local Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Make sure to run locally the [empatica-server](https://github.com/thecillu/empatica-server) before to run the Angulat WebApp.

## Local Production server

Run `ng serve --configuration=production` for a Local server with the production configuration.  Navigate to `http://localhost:4200/`
 
Make sure to run locally the [empatica-server](https://github.com/thecillu/empatica-server) before to run the Angulat WebApp.

## Build

Run `ng build --configuration=production` to build the project. The build artifacts will be stored in the `dist/` directory.