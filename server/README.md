### `.env`
Create .env file and add
* PORT - Server
* DB_CONNECTION - MongoDB
* JWT_SECRET - JsonWebToken 
* JWT_EXPIRES - JsonWebToken expire time (For example 10min)

### `npm start`

Runs the app [http://localhost:PORT](http://localhost:PORT).

### Implemented endpoints:

#### /users
Path | Method | Description
---|---|--- |---
/signup | POST | Add new user
/signin | POST | Login user
/:userId | DELETE | Delete user
/ | GET | Get all users
