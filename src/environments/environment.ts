// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const serverDEVBaseURL = 'localhost:8283';
const serverUATBaseUrl = 'localhost:8283';
const serverPRDBaseUrl = 'localhost:8283';
const serverLocalHostBaseUrl = 'localhost:8283';


const serverURL = 'https://' + serverDEVBaseURL+ '/';
const webServerURL = 'http://localhost:8280/images/';


export const environment = {
  production: false,

  baseUrl:          serverURL,
  authUrl:          serverURL + 'users/login/',
  errorApiURL:      serverURL + 'errors/',
  baseUserUrl:      serverURL + 'users/',
  extraImageURL:    webServerURL,
  allowedDomain:    serverDEVBaseURL,
  missingFile:      'false_640.png',
  version:          '1.0',
  appId:            'SeuQrCode',
  googleMapsAPIKey: '',


  defaultContryCode:'55',
  defaultLanguage:  'en-US',
  supportedLangs:   ['en-US', 'pt-BR', 'pt'],
  languageKey:      'Language',
  tokenKey:         'token',
  authDataKey:      'authData',



  baseUrlLocalHost: 'http://'+serverLocalHostBaseUrl+'/',
  apiUrlLocalHost: 'http://'+serverLocalHostBaseUrl+'/api/',
  mediaUrlLocalHost: 'http://'+serverLocalHostBaseUrl+'/media/',
  imageUrlLocalHost: 'http://'+serverLocalHostBaseUrl+'/media/images/',
  spinnerUrlLocalHost: 'http://'+serverLocalHostBaseUrl+'/media/Spinner-1.4s-200px.svg',
  errorApiUrlLocalHost: 'http://'+serverLocalHostBaseUrl+'/errors/',

  baseUrlDEV: 'https://'+serverDEVBaseURL+'/',
  apiUrlDEV: 'https://'+serverDEVBaseURL+'/api/',
  mediaUrlDEV: 'https://'+serverDEVBaseURL+'/media/',
  imageUrlDEV: 'https://'+serverDEVBaseURL+'/media/images/',
  spinnerUrlDEV: 'https://'+serverDEVBaseURL+'/media/Spinner-1.4s-200px.svg',
  errorApiUrlDEV: 'https://'+serverDEVBaseURL+'/errors/',

  baseUrlUAT: 'https://'+serverUATBaseUrl+'/',
  apiUrlUAT: 'https://'+serverUATBaseUrl+'/api/',
  mediaUrlUAT: 'https://'+serverUATBaseUrl+'/media/',
  imageUrlUAT: 'https://'+serverUATBaseUrl+'/media/images/',
  spinnerUrlUAT: 'https://'+serverUATBaseUrl+'/media/Spinner-1.4s-200px.svg',
  errorApiUrlUAT: 'https://'+serverUATBaseUrl+'/errors/',

  baseUrlPRD: 'https://'+serverPRDBaseUrl+'/',
  apiUrlPRD: 'https://'+serverPRDBaseUrl+'/api/',
  mediaUrlPRD: 'https://'+serverPRDBaseUrl+'/media/',
  imageUrlPRD: 'https://'+serverPRDBaseUrl+'/media/images/',
  spinnerUrlPRD: 'https://'+serverPRDBaseUrl+'/media/Spinner-1.4s-200px.svg',
  errorApiUrlPRD: 'https://'+serverPRDBaseUrl+'/errors/',



};
