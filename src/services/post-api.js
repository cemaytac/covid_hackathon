import tokenService from "./tokenService";
const baseUrl = "/api/posts/";

export function create(post) {
  console.log('HELLO')
  return fetch(baseUrl, {
    method: "POST",
    headers: { 'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken() },
    body: JSON.stringify(post)
  }, { mode: "cors" })
    .then(res => res.json());
}

export function getAll() {
  return fetch(baseUrl, { mode: "cors" })
    .then(res => res.json())
}

export function viewPosts(id) {
  return fetch(`${baseUrl}post/${id}`)
    .then(res => res.json())
}

export function getUserPosts(id) {
  return fetch(`${baseUrl}${id}`, {
    headers: { 'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken() },
  }, { mode: "cors" })
    .then(res => res.json())
}