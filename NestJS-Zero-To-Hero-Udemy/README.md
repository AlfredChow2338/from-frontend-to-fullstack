# Project 1: Task Management

### Nest CLI

```bash
# generate module / service / controller
nest g module {module_name}
nest g service {service_name} --no-spec
nest g controller {controller_name} --no-spec
```

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

### Dependency injection

- Inversion of Control (IoC): Delegate instantiation of dependencies to the IoC container
- External entity (framework) manages the creation and injection of dependencies, rather than the class creating them itself
- Instead of creating dependencies, classes receive them via constructor parameters
- Result in loose coupling and improving testability by allowing substitution of dependencies

### Module

- Serves as a container for organizing related components like controllers and providers
- 4 Key Properties
  - `providers`: The services, repositories, or helpers that will be instantiated by the Nest injector and used within this module
  - `controllers`: The set of controllers defined in this module that handle incoming HTTP requests
  - `imports`: A list of other modules that export the providers required by this module (e.g., importing a DatabaseModule)
  - `exports`: A subset of providers that should be available to other modules that import this one. This is the module's "public API"
- Singletons: modules and their providers are singletons by default, meaning the same instance is shared throughout the entire application
- Root Module: Every app has at least one root module (usually AppModule), which acts as the entry point for Nest to build the "application graph"
- Module Types: feature module, shared module, global module, dynamic module

### Model

- Representation of your application's data and state
- Domain model (Entity): represent real-world objects in your database
- DTO (Data Transfer Object): move data between layers (like from Service to Controller) without exposing your internal database structure

### Controller vs Service

Separate of Concerns: Testability, reusability and maintainability

Controller: Gatekeeper

- Entry point for requests
- Primarily concerned with the HTTP/Transport layer
- A manager or waiter that receives requests and hands them to the right person
- Responsibility: Routing, input handling, validation, formatting

Service: Brain

- Contains the core business logic
- Should be independent of how the application is accessed
- Responsibilities: logic and calculation, data orchestration, transaction management

### Repository

- The layer that sits between your Service and the actual Data Source
- CRUD operations lie here
- Abstraction: hides the "messy" details of your database
- Centralization: all queries are in one place
- Avoid duplications: prevents writing the same complex database queries in multiple different services

### Relationship

- Controller (Waiter): Takes your order and tells you the price.
- Service (Chef): Follows the recipe to cook the meal.
- Repository (Pantry Manager): Finds the ingredients. The Chef says, "I need two eggs," and the manager knows exactly which shelf (table) and fridge (database) to look in to get them.
- Model (Ingredients): The actual eggs, flour, and milk being passed around.

### Active Record vs Data Mapper

Data Mapper

- Access your databse within repositories instead of models
- Define query method in separate classes called "repositories"
- Save, remove and load objects using repositories' methods
- Entities are dumb, only define properties and have dummy methods
- Help maintainability in bigger apps

Active Record

- Access your databse within models
- Define query method inside model itself
- Save, remove and load objects using model methods
- Keep things simple in smaller app

### Store password in database

- Adding a salt and a hash to passwords before storing
- Irreversibility: Cannot reverse a hash to get the original password back
- Validation: System hashes the entered password and compares it to the stored hash
- Protection: If a hacker steals the database, they only get a list of hashes, not the actual passwords
- Defeats Rainbow Tables: Hides identical passwords
