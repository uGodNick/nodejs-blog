## Deploy

The server deployed on [Heroku](https://lit-forest-81401.herokuapp.com/)

## API documentation

Documentation to the endpoints

### Auth controller

**POST** /auth/register - body: *{ login: string, password: string }* - Registers user by login (email) and password. Response: none

**POST** /auth/login - body: *{ login: string, password: string }* - Sign in user account by login (email) and password. Response: *{ access_token: string }*

### Blog controller

**POST** /blog/create - body: *{ createdDateUtc: string, message: string, authorEmail: string }*, header: *{ Authorization: string }* - Create a new blog. Response: none

**PATCH** /blog/update - body: *{ id: number, createdDateUtc: string, message: string, authorEmail: string }*, header: *{ Authorization: string }* - Update a blog message. Response: none

**DELETE** /blog/delete/:id - params: *:id*, header: *{ Authorization: string }* - Delete a blog with the specified id. Response: none

**GET** /blog/last - params: none - Returns the last created blog. Response: *{ id: number, createdDateUtc: string, message: string, authorEmail: string }*

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
