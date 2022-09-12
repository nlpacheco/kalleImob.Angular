export const serverDEVBaseURL = 'https://localhost:7175';
export const serverUATBaseUrl = 'https://localhost:7175';
export const serverPRDBaseUrl = 'https://localhost:7175';
export const serverLocalHostBaseUrl = 'lhttps://localhost:7175';

const serverURL = serverDEVBaseURL;

export const suffixes = {
    apiSuffix:      '/api',
    authSuffix:     '/login',
    errorSuffix:    '/errors',
    userSuffix:     '/users',
    mediaSuffix:    '/media',
    imageSuffix:    '/media/images'
}


export const GlobalParameters = {

    
  version:          '1.0 2022.09.07',
  appId:            'KalleImob',
  
  

  baseUrl:          serverURL ,
  apiUrl:           serverURL + suffixes.apiSuffix,
  authUrl:          serverURL + suffixes.apiSuffix + suffixes.authSuffix,
  errorApiURL:      serverURL + suffixes.apiSuffix + suffixes.errorSuffix,
  userUrl:          serverURL + suffixes.apiSuffix + suffixes.userSuffix,
  mediaUrl:         serverURL + suffixes.apiSuffix + suffixes.mediaSuffix,
  imageUrl:         serverURL + suffixes.imageSuffix ,
  spinnerUrl:       serverURL + suffixes.imageSuffix + '/Spinner.gif',

  missingFile:      'false_640.png',

  locale: 'pt-br',
  cacheMaxAgeMinutes: 60,
  // missingFileImage: 'Not-found.jpg',
  missingFileImage: 'ops_640_missingfile.png',

  // Parameter names
  idParameterName: 'id',
  userIdParameterName: 'userId',
  cpfParameterName: 'CPF',
  usernameParameterName: 'username',
  emailParameterName: 'email',
  referenceDateParameterName: 'referenceDate',
  transferStatusParameterName: 'transferStatus',
  updateDateParameterName: 'updateDate',
  namePartialParameterName: 'namePartial',
  descriptionPartialParameterName: 'descriptionPartial',
  validAtParameterName: 'validAt',
  voucherIdParameterName: 'voucherId',
  mediaNameParameterName: 'mediaName',
  mediaTypeParameterName: 'mediaType',
  mediaTriggerParameterName: 'mediaTrigger',
  rewardTypeParameterName: 'rewardType',
  machineEventTypeParameterName: 'machineEventType',
  machineEventStatusParameterName: 'machineEventStatus',
  machineStatusTypeParameterName: 'machineStatusType',
  productTypeParameterName: 'productType',
  isDownloadable: 'isDownloadable',

  cleanViewParameterName: 'cleanView',
  isCanceledParameterName: 'isCanceled',

    // Error Support
    //errorApiURL: 'http://localhost:64750/errors/',

}
