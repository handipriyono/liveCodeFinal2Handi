# liveCodeFinal2Handi

Hacktivpress - Simple Blogging Platform

## User
| Route          | HTTP   | Description                                                |
|----------------|--------|------------------------------------------------------------|
| `/users/register`  | POST   | Sign up with new user info   and get token                               |
| `/users/login`     | POST   | Sign in while get an access token based on credentials     |

## Articles


      

Route | HTTP | Description
--- | --- | ---
`/article` | GET | Get all articles
`/article/:id` | GET | Get article by id  (single)
`/article/delete/:id` | DELETE | delete an article
`/article/add` | POST | Post new article
`/article/update/:id` | PUT | Update one existing article
`/article/delete/:id` | DELETE | Delete one existing article
