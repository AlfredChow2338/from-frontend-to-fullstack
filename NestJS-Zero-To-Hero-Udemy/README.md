# Project 1: Task Management

### Application Structure

![Task management architecture](../assets/task-management-architecture.png)

### Backend and Architecture

- Production ready REST APIs
- CRUD operations
- Error handling
- Data Transfer Objects (DTO)
- System Modularity
- Backend development best practices
- Configuration management
- Logging
- Security practices

### Persistence

- Connecting application to databse
- Working with relational database
- Using TypeORM
- Wiring simple and complex queries using `QueryBuilder`
- Performance when working with database

### Authorization and Authentication

- Sign up / Sign in
- Protected resources
- Ownership of tasks by user
- JSON Web Token (JWT)
- Password hashing, salt and properly storing password

### Deployment

- Polish the application for production use
- Deploy NestJS apps to AWS
- Deploy frontend applications to Amazon S3
- Wiring up the frontend and backend

### Docker

- Docker version 4.48.0 is the latest version compatible with MacOS Ventura 13.
- Docker container name must be unique

### ORM Pros and Cons

ORM is a technique that allows you to query and manipulate data from a database using an object-oriented paradigm, using preferred languages.

TypeORM is ORM library running in Node.js in TypeScript, which helps us define and manage entities, repositories, columns, relations, indicies, queries, logging etc

Pros

- Easy to maintain, less repetition
- Automate database handling, data types, relations etc
- SQL syntax is not need (Easy to learn, hard to master)
- Data abstraction - change database type whenever you want
- Leverage OOP, things like inheritance are easy to achieve

Cons

- Learning curve for ORM libraries
- Performance is alright, but it's easy to neglect
- Easy to forget what happens behind the scene, which can lead to maintenability issues
