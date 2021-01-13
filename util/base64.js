/**
 * Encode a string to base64 (using the Node built-in Buffer)
 *
 * Stolen from http://stackoverflow.com/a/38237610/2115623
 */
export const encode = (string) =>
  Buffer.from(string).toString('base64');

export const decode = (Base64String) =>
  (string ? Buffer.from(string, 'base64').toString('ascii') : '');
  