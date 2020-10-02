import tokenService from "./tokenService";
const baseUrl = "http://api.ipstack.com/";
const ip = '24.228.160.243'
const access_key = "?access_key=498f9632bc553cf9e1e481f8712016ee"

export function getIPAddress() {
  return fetch(`${baseUrl}${ip}${access_key}`)
    .then(res => res.json())
}