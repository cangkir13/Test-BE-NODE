# TEST CODE NODE JS API

## INSTALASI
ubah file env menjadi .env <br>
ubah configurasi database pada file config/config.json <br>

## Install Package, Migrasi database, SEEDER data DAN RUNNING NODEJS
```
npm install
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
npm start
```

## Routes
```sh
localhost:3000/register # Create user(s) (POST)
localhost:3000/login # Login user (POST)
localhost:3000/position/{DI} # get position by id (GET)
localhost:3000/position # show user(s) tasks (GET) with query params allow query params "description", "location", "limit", "offset"
```

## Example Requests
##### Create User
```json
{
  "username": "test",
  "password": "test"
}
```

##### Login 
```json
{
  "username": "test",
  "password": "test"
}
```
