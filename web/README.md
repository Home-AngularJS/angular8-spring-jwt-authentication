# TRANSENIX

## Development server

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.6.

Run `npm start` for a dev local server.

Run `ng serve --proxy-config proxy.conf.json` for a dev local server & use proxy to remote api.

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Run `ng serve --host 0.0.0.0` for a dev remote server.

Navigate to `http://192.168.1.124:4200/`. The app will automatically reload if you change any of the source files.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.


## API Documentation

* [http://map1.mobo.cards:8093/swagger-ui.html](http://map1.mobo.cards:8093/swagger-ui.html)


## Support

- [Angular Reactive Form Setup for Select Dropdown](https://www.positronx.io/angular-7-select-dropdown-examples-with-reactive-forms/)
- [ngIf and ngFor on same element] https://github.com/angular/angular/issues/7315
  ```javascript
  <div *ngFor="let item of items">
      <div *ngIf="item.name === 'test'> Test </div>
  </div>
  ```
