 # [AngBoot](https://github.com/IcePrince7/IBook-An-Online-Library-Management-Tool)

This project, **AngBoot**, serves as a comprehensive library management system built using Angular. It enables students to browse and purchase books from the library while providing administrators with tools to manage book requests and inventory.

## Project Overview

**AngBoot** facilitates seamless book transactions within a library environment, providing essential features such as:

- **Home page**: Students/Admin can either sign in or signup![image](https://github.com/IcePrince7/IBook-An-Online-Library-Management-Tool/assets/94789529/a56ba88f-1801-4475-8941-d1860da0e598)
- **Student Access**: Students can browse available books, place requests, and view upcoming releases.
![image](https://github.com/IcePrince7/IBook-An-Online-Library-Management-Tool/assets/94789529/b1dc72c1-a17d-4593-8db0-aec2123dccdc)
- **Book Exchange System**: To borrow a book, students must exchange a book they currently possess, fostering a fair exchange system within the library.![image](https://github.com/IcePrince7/IBook-An-Online-Library-Management-Tool/assets/94789529/8e282c2f-bd81-4ba4-a0f2-bf743f21d04f)
- **Upcoming Releases**: A dedicated page displays upcoming book releases, allowing students to anticipate and request new titles in advance.
- **Admin Approval**: Administrators can review and approve book requests, ensuring proper management of inventory and student transactions.![image](https://github.com/IcePrince7/IBook-An-Online-Library-Management-Tool/assets/94789529/b9b6da51-b8e7-4d3d-9710-8e50a5478dbb)

## Angular Services

**AngBoot** employs Angular services to encapsulate reusable logic and functionality throughout the application. Key services include:

- **Authentication Service**: Manages user authentication and authorization, enabling secure access to student and admin features.
- **Book Service**: Handles book-related operations such as fetching available books, processing requests, and managing inventory.
- **User Service**: Facilitates user management tasks, including user registration, login, and profile management.

## Angular Hooks

Angular hooks, also known as lifecycle hooks, play a crucial role in managing component lifecycle events. **AngBoot** leverages Angular hooks for various purposes, including:

- **OnInit**: Used for initializing component data upon creation.
- **OnDestroy**: Cleans up resources and subscriptions when a component is destroyed.
- **OnChanges**: Reacts to changes in component input properties.

## Styling with Bootstrap

To enhance the visual appeal and user experience, **AngBoot** integrates Bootstrap for styling components and layout. Bootstrap's responsive design and extensive component library ensure a consistent and polished look across the application.

For more details on implementation and usage of Angular services, hooks, and Bootstrap styling, please refer to the project source code and documentation.

## Backend Support

**AngBoot** utilizes JSON server to provide backend support. Follow these steps to set up the backend:

1. Download and install JSON server.
2. Serve `Lib.JSON` file as a data source to simulate a backend for the application nad fire the comment npx json-server --Foldernamehere--

## Development Server

To start the development server, follow these steps:

1. Run `ng serve` to launch the Angular development server.
2. Navigate to `http://localhost:4200/` in your web browser.
3. The application will automatically reload upon any changes to the source files.

## Angular CLI Commands

**AngBoot** leverages Angular CLI for code scaffolding, building, and testing. Here are some useful commands:

- `ng generate component component-name`: Generate a new component.
- `ng build`: Build the project, with build artifacts stored in the `dist/` directory.
- `ng test`: Execute unit tests via Karma.
- `ng e2e`: Run end-to-end tests.

For further assistance, refer to the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Contributing

Contributions to **AngBoot** are welcome! Please follow the [Contributing Guidelines](CONTRIBUTING.md) to contribute to the project.
 
