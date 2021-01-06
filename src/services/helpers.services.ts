import {BASE_API, CLIENT_ID} from '../config/config';

export async function get(path: string) {
  let responseData:any = null;
  try {
    const response = await fetch(BASE_API + path+CLIENT_ID);
    if (!response.ok) return Promise.reject(response);
    else {
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.indexOf('application/json') !== -1) {
        responseData = await response.json();
      } else {
        responseData = await response.text();
      }
    }
  } catch (error) {
    return Promise.reject(error);
  }
  return responseData;
}

export async function post(path: string, body = {api_key: CLIENT_ID}) {
  let responseData:any=null;
  try {
    const response = await fetch(BASE_API + path, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    if (!response.ok) return Promise.reject(response);
    else {
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.indexOf('application/json') !== -1) {
        responseData = await response.json();
      } else {
        responseData = await response.text();
      }
    }
  } catch (error) {
    return Promise.reject(error);
  }
  return responseData;
}
