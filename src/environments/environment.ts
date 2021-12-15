// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api_cars : 'https://localhost:7142/api/Cars/',
  api_brands : 'https://localhost:7142/api/Brand/',
  api_upload : 'https://localhost:7142/api/Upload/UploadImage',
  api_show : 'https://localhost:7142/api/upload/readimage?filename=',
  api_delete_file : "https://localhost:7142/api/Upload/Delete"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
